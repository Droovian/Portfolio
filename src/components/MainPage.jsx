import About from "./About";
import Home from "./Home";
import MySkills from "./MySkills";
import Navbar from "./Navbar";
import Project from "../../data/projects.jsx"
import Footer from "./Footer.jsx";
const MainPage = () => {
    return ( 
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <MySkills/>
            <Project/>
            <Footer/>
        </div>
     );
}
 
export default MainPage;