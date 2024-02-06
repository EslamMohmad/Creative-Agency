import View from "./imgView/View";
import ViewOpts from "./viewOpts/ViewOpts";

const Home = () => {
  return (
    <div className="h-[100dvh] overflow-hidden">
      <View />
      <ViewOpts />
    </div>
  );
};

export default Home;
