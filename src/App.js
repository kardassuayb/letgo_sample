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
function App() {
  const backgrundStyle = {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={backgrundStyle} className="max-w-7xl w-full mx-auto flex mt-8">
      <img src={logo} alt="logo" className="w-[90px] h-[40px] mt-3" />
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-between py-4 w-full">
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
