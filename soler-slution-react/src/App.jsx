import AboutComponent from "./components/screens/Home/AboutComponent";
import Banner from "./components/screens/Home/Banner";
import Experience from "./components/screens/Home/Experience";
import WhyChooseUs from "./components/screens/Home/WhyChooseUs";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Experience />
      <WhyChooseUs />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default App;
