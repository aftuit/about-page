import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Frame } from "./components/Frame";
import { AboutPage } from "./pages/About";
import { NewsPage } from "./pages/News";
import { NotFoundPage } from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full overflow-x-hidden">
          <TopBar />
          <Header />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to={"/about"} />} />
              <Route path="/*" element={<NotFoundPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
            </Routes>
          </main>
          <footer>
            <Footer />
            <Frame />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
