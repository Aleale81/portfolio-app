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

function App() {

  return (
    <>
      <div className="grid grid-cols-1 align-center sm:grid-cols-6">
        <div className="col-span-1">
          <NavMenu />
        </div>

        <div className="col-span-4">
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
    </>
  );
}

export default App;
