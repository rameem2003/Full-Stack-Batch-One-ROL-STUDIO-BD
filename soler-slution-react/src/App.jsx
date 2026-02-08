import Banner from "./components/screens/Home/Banner";
import Experience from "./components/screens/Home/Experience";
import Navigation from "./components/shared/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Experience />
    </div>
  );
};

export default App;
