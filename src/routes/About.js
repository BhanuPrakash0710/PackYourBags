import Main from "../components/Main.js";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
function About() {
  return (
    <div>
      <Navbar />
      <Main
        cName="hero-about"
        img="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="About"
        btnclass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
