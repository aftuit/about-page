import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Frame } from "./components/Frame";
import { AboutPage } from "./pages/About";
import { NotFoundPage } from "./pages/NotFound";
import { Breadcrumb } from "./components/ui/Breadcrumb";

function App() {
  const links = [
    {
      name: "Bosh sahifa",
      active: false,
      path: "/home",
    },
    {
      name: "Biz haqimizda",
      active: true,
      path: "/about",
    },
    {
      name: "Vazifalar funksiyalar",
      active: false,
      path: "/tasks",
    },
    {
      name: "Rahbariyat",
      active: false,
      path: "/leadership",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <div className="w-full overflow-x-hidden">
          <TopBar />
          <Header />
          <Navbar />
          <main className="bg-white pt-9 pb-[87px]">
            <div className="container-wrapper">
              <Breadcrumb items={links} />
            </div>
            <Routes>
              <Route path="/" element={<Navigate to={"/about"} />} />
              <Route path="/*" element={<NotFoundPage />} />
              <Route path="/about" element={<AboutPage />} />
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
