import Main from "../components/Main.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
function Service() {
  return (
    <div>
      <Navbar />
      <Main
        cName="hero-about"
        img="https://images.unsplash.com/photo-1644410574872-7c0fe8eb201b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80"
        title="Services"
        btnclass="hide"
      />
      <Plan />
      <Footer />
    </div>
  );
}

export default Service;
