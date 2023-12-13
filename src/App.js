import "./App.css";
//  COMPONENTS
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
//  IMAGES
import logo from "./assets/images/doob_logo.png";
import background1 from "./assets/images/backgorund_1.jpg";
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
    <div
      style={background1Style}
      className="max-w-7xl w-full mx-auto flex mt-8"
    >
      <img src={logo} alt="logo" className="w-[90px] h-[40px] mt-3" />
      <div
        style={background2Style}
        className="max-w-4xl mx-auto flex flex-col items-center justify-between py-4 w-full"
      >
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
