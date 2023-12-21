import NavBar from "./components/Navbars";
import Home from "./components/Homes"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import Education from "./components/Educations";
import Footer from "./components/Footers";
import Internship from "./components/internships";
function App(){
  return(<div className="bg-black">
   <section> <NavBar/></section>
 <section> <Home/></section>
  <SocialLinks/>
  <Education/>
  <About/>
  <Portfolio/>
  <Experiance/>
  <Internship/>
  
  <Contact/>
  <Footer/>

  </div>

  
  
  );
}
 export default App;
