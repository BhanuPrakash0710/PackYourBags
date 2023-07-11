import Main from "../components/Main.js";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Main
        cName="hero"
        img="https://images.unsplash.com/photo-1643757663872-e70c60d250c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="Your Journey Our Responsibility"
        text="Pack Your Bags to the Pearl of the Orient"
        url="/"
        btntxt="Travel Plan"
        btnclass="show"
      />
      <Destination />
      <Footer />
    </div>
  );
}

export default Home;
