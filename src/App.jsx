import { Button, Mask, Tooltip } from "react-daisyui";
import "./App.css";
import NavMenu from "./components/NavMenu";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/ContactsPage";
import SideTools from "./components/SideTools";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="grid grid-cols-1 justify-center md:grid-cols-7 sm:gap-4">
        <div className="col-span-1">
          <NavMenu />
        </div>

        <div className="col-span-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          
        </div>
        <div className="col-span-1 h-0">
          <SideTools /> 
        </div>
      </div>
      <Footer /> 
    </>
  );
}

export default App;
