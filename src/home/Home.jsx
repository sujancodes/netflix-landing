import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import "./home.scss";
import List from "../components/list/List";
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List watchtype="Popular on Netflix"/>
      <List watchtype="Continue to watching for __sujan__"/>
      <List watchtype="Trending Now"/>
      <List watchtype="Hollywood"/>
      <Footer />
    </div>
  );
};

export default Home;