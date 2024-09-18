import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/About";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <TopBar />
          <Header />
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light-gray">
            <Routes>
              <Route path="/" element={<Navigate to={"/about"} />} />
              <Route path="/*" element={<h1>No page found</h1>} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
