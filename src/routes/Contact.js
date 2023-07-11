import Main from "../components/Main.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform.js";
function Contact() {
  return (
    <div>
      <Navbar />
      <Main
        cName="hero-about"
        img="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        // title="Contact"
        btnclass="hide"
      />
      <Contactform />
      <Footer />
    </div>
  );
}

export default Contact;
