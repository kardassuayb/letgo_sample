import "./App.css";
//  COMPONENTS
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
//  IMAGES
import logo from "./assets/images/doob_logo.png";
function App() {
  return (
    <div className="max-w-7xl w-full mx-auto flex">
      <img src={logo} alt="logo" className="w-[90px] h-[40px] mt-3" />
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-between py-4">
        <Header />
        <AboutUs />
        <Portfolio />
        <Blog />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
