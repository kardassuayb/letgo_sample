import "./App.css";
//  COMPONENTS
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
//  IMAGES
import logo from "./assets/images/doob_logo.png";
import background1 from "./assets/images/background_1.jpg";
import background2 from "./assets/images/background_2.png";

function App() {
  const background1Style = {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-full flex flex-col justify-center relative">
      <div
        style={background1Style}
        className="flex md:hidden flex-col max-w-7xl w-full justify-center absolute inset-0 -z-10"
        id="home"
      ></div>
      <div className="flex">
        <a
          href="#home"
          className="absolute inset-0 mr-auto ml-28 xl:ml-4 mt-3 lg:hidden"
        >
          <img src={logo} alt="logo" className="w-[40px] h-[20px] mx-2 mt-4" />
        </a>
        <div
          style={background2Style}
          className="max-w-4xl mx-auto flex flex-col items-center py-4 w-full"
        >
          <Header />
          <AboutUs />
          <Portfolio />
          <Blog />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
