# RTSP Streaming Service Frontend Development Guide

This guide explains how to integrate and build frontend applications with our RTSP Streaming Service using WebSocket and WebRTC.

## WebSocket API Reference

### Connection

Connect to the WebSocket server:
```javascript
const ws = new WebSocket('ws://localhost:52209');
```

### Message Types

All messages use JSON format.

#### 1. Client Messages

##### WebRTC Offer (Start Stream)
```javascript
{
    "sdp": "v=0\r\no=- 8736453687...", // SDP offer
    "type": "offer",
    "rtsp_url": "rtsp://camera-ip:554/stream",
    "stream_type": "webrtc"
}
```

##### ICE Candidate
```javascript
{
    "ice": {
        "candidate": "candidate:1 1 UDP 2013266431...",
        "sdpMid": "0",
        "sdpMLineIndex": 0
    }
}
```

#### 2. Server Messages

##### WebRTC Answer
```javascript
{
    "sdp": "v=0\r\no=- 7089656789...",
    "type": "answer"
}
```

##### Error Message
```javascript
{
    "error": "Failed to open RTSP stream"
}
```

## Frontend Implementation Guide

### 1. Basic Setup

```html
<!DOCTYPE html>
<html>
<head>
    <title>RTSP Stream Viewer</title>
</head>
<body>
    <video id="videoElement" autoplay playsinline></video>
    <script src="rtsp-client.js"></script>
</body>
</html>
```

### 2. WebRTC Client Implementation

```javascript
class RTSPClient {
    constructor(wsUrl) {
        this.wsUrl = wsUrl;
        this.peerConnection = null;
        this.ws = null;
        this.videoElement = document.getElementById('videoElement');
    }

    async connect(rtspUrl) {
        try {
            this.ws = new WebSocket(this.wsUrl);
            this.ws.onmessage = this.handleMessage.bind(this);
            this.ws.onopen = async () => {
                console.log('WebSocket connected');
                await this.startStream(rtspUrl);
            };
        } catch (error) {
            console.error('Connection failed:', error);
        }
    }

    async startStream(rtspUrl) {
        try {
            this.peerConnection = new RTCPeerConnection({
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' }
                ]
            });

            this.peerConnection.ontrack = (event) => {
                if (event.streams && event.streams[0]) {
                    this.videoElement.srcObject = event.streams[0];
                }
            };

            this.peerConnection.onicecandidate = (event) => {
                if (event.candidate) {
                    this.ws.send(JSON.stringify({
                        ice: event.candidate
                    }));
                }
            };

            // Create and send offer
            const offer = await this.peerConnection.createOffer({
                offerToReceiveVideo: true
            });
            await this.peerConnection.setLocalDescription(offer);

            this.ws.send(JSON.stringify({
                sdp: offer.sdp,
                type: offer.type,
                rtsp_url: rtspUrl,
                stream_type: "webrtc"
            }));
        } catch (error) {
            console.error('Error starting stream:', error);
        }
    }

    async handleMessage(event) {
        const message = JSON.parse(event.data);

        if (message.error) {
            console.error('Server error:', message.error);
            return;
        }

        if (message.sdp) {
            try {
                await this.peerConnection.setRemoteDescription(
                    new RTCSessionDescription({
                        type: message.type,
                        sdp: message.sdp
                    })
                );
            } catch (error) {
                console.error('Error setting remote description:', error);
            }
        }
    }

    disconnect() {
        if (this.peerConnection) {
            this.peerConnection.close();
            this.peerConnection = null;
        }
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        if (this.videoElement.srcObject) {
            this.videoElement.srcObject.getTracks().forEach(track => track.stop());
            this.videoElement.srcObject = null;
        }
    }
}
```

### 3. Usage Example

```javascript
// Initialize and connect to a specific RTSP stream
const client = new RTSPClient('ws://localhost:52209');
client.connect('rtsp://camera-ip:554/stream');

// Handle page unload
window.addEventListener('beforeunload', () => {
    client.disconnect();
});
```

## Advanced Features

### 1. Multiple Camera Support

```javascript
class MultiStreamViewer {
    constructor(wsUrl) {
        this.clients = new Map();
    }

    addCamera(cameraId, videoElement) {
        const client = new RTSPClient(this.wsUrl);
        client.videoElement = videoElement;
        this.clients.set(cameraId, client);
        client.connect();
        client.requestStream(cameraId);
    }

    removeCamera(cameraId) {
        const client = this.clients.get(cameraId);
        if (client) {
            client.disconnect();
            this.clients.delete(cameraId);
        }
    }
}
```

### 2. Stream Controls

```javascript
class StreamControls {
    constructor(client) {
        this.client = client;
    }

    async snapshot() {
        const canvas = document.createElement('canvas');
        canvas.width = this.client.videoElement.videoWidth;
        canvas.height = this.client.videoElement.videoHeight;
        canvas.getContext('2d').drawImage(this.client.videoElement, 0, 0);
        return canvas.toDataURL('image/jpeg');
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.client.videoElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}
```

## Error Handling

```javascript
class RTSPError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

function handleStreamError(error) {
    switch (error.code) {
        case 'STREAM_NOT_FOUND':
            // Handle missing stream
            break;
        case 'CONNECTION_FAILED':
            // Handle connection failure
            break;
        case 'PEER_CONNECTION_FAILED':
            // Handle WebRTC failure
            break;
        default:
            console.error('Unknown error:', error);
    }
}
```

## Best Practices

1. **Connection Management**
   - Always properly close connections
   - Implement reconnection logic
   - Handle network changes

2. **Resource Optimization**
   - Stop unused tracks
   - Clean up peer connections
   - Monitor memory usage

3. **User Experience**
   - Show loading indicators
   - Provide clear error messages
   - Implement stream quality controls

4. **Security**
   - Validate all messages
   - Use secure WebSocket (wss://)
   - Implement authentication if needed

## Example UI Components

### 1. Stream Quality Selector
```javascript
class StreamQualitySelector {
    constructor(client) {
        this.client = client;
    }

    async setQuality(quality) {
        // quality: 'high' | 'medium' | 'low'
        await this.client.sendMessage({
            type: 'set_quality',
            quality: quality
        });
    }
}
```

### 2. Camera Selector
```javascript
class CameraSelector {
    constructor(container, streams) {
        this.container = container;
        this.streams = streams;
        this.render();
    }

    render() {
        const select = document.createElement('select');
        this.streams.forEach(stream => {
            const option = document.createElement('option');
            option.value = stream.id;
            option.text = stream.name;
            select.appendChild(option);
        });
        this.container.appendChild(select);
    }
}
```

## Testing

### 1. Connection Testing
```javascript
async function testConnection(wsUrl) {
    try {
        const ws = new WebSocket(wsUrl);
        await new Promise((resolve, reject) => {
            ws.onopen = resolve;
            ws.onerror = reject;
        });
        return true;
    } catch (error) {
        return false;
    }
}
```

### 2. Stream Testing
```javascript
async function testStream(client, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Stream timeout'));
        }, timeout);

        client.videoElement.onplaying = () => {
            clearTimeout(timer);
            resolve(true);
        };
    });
}
```

## Performance Monitoring

```javascript
class StreamMonitor {
    constructor(client) {
        this.client = client;
        this.stats = {
            framerate: 0,
            bitrate: 0,
            packetsLost: 0
        };
    }

    async startMonitoring() {
        setInterval(async () => {
            const stats = await this.client.peerConnection.getStats();
            stats.forEach(stat => {
                if (stat.type === 'inbound-rtp' && stat.kind === 'video') {
                    this.stats.framerate = stat.framesPerSecond;
                    this.stats.bitrate = stat.bytesReceived * 8 / 1000;
                    this.stats.packetsLost = stat.packetsLost;
                }
            });
        }, 1000);
    }
}
```

This frontend guide provides comprehensive documentation for integrating with the RTSP Streaming Service, including WebSocket API reference, implementation examples, and best practices for building robust video streaming applications.
