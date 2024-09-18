import { useState } from "react";
import { AboutPage } from "./pages/About";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <AboutPage />
    </>
  );
}

export default App;
