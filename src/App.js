import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Home/Sidebar";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import MySkills from "./Components/MySkills/MySkills";
import Allprojects from "./Components/Projects/Allprojects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App ">
      <div className="lg:flex relative">
        <Sidebar open={open} setOpen={setOpen}></Sidebar>

        <Routes>
          <Route
            path="/"
            element={<Home open={open} setOpen={setOpen}></Home>}
          ></Route>
          <Route
            path="home"
            element={<Home open={open} setOpen={setOpen}></Home>}
          ></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route
            path="skills"
            element={<MySkills open={open} setOpen={setOpen}></MySkills>}
          ></Route>
          <Route
            path="projects"
            element={<Allprojects open={open} setOpen={setOpen}></Allprojects>}
          ></Route>
          <Route
            path="blogs"
            element={<Blogs open={open} setOpen={setOpen}></Blogs>}
          ></Route>
          <Route
            path="about"
            element={<About open={open} setOpen={setOpen}></About>}
          ></Route>
          <Route
            path="projectdetails"
            element={
              <ProjectDetails open={open} setOpen={setOpen}></ProjectDetails>
            }
          ></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
