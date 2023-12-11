import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import Protfolio from "../Components/Protfolio";
import Service from "../Components/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Featured></Featured>
      <Protfolio></Protfolio>
      <Footer></Footer>
    </div>
  );
};

export default Home;