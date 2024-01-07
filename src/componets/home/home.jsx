import Navbar from "./navbar/Navbar";
import View from "./imgView/View";
import ViewOpts from "./viewOpts/ViewOpts";

const Home = () => {
  return (
    <div className="h-[100vh] bg-black/90">
      <Navbar />
      <View />
      <ViewOpts />
    </div>
  );
};

export default Home;
