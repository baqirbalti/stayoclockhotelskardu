import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBooking from "./components/QuickBooking";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Terms from "./components/Terms";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-hotel-page text-slate-800">
      <Navbar />
      <Hero />
      <QuickBooking />
      <About />
      <Rooms />
      <Gallery />
      <Amenities />
      <Terms />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
