import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import Protfolio from "../Components/Protfolio";
import Service from "../Components/Service";
import Skill from "../Components/Skill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Featured></Featured>
      <Skill></Skill>
      <Protfolio></Protfolio>
      <Footer></Footer>
    </div>
  );
};

export default Home;