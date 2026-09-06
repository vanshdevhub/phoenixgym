import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;