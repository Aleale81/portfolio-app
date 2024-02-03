import { Button, Mask, Tooltip } from "react-daisyui";
import "./App.css";
import NavMenu from "./components/NavMenu";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/ContactsPage";
import Intro from "./components/Intro";
import SideTools from "./components/SideTools";

function App() {
  // const [showIntro, setShowIntro] = useState(true)


  return (
    <>
    {/* {showIntro && <Intro /> } */}
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="col-span-1 flex justify-center sm:block">
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
        <div className="col-span-1 h-0 sm:h-screen">
<SideTools /> 
        </div>
      </div>
    </>
  );
}

export default App;
