import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Widget from "../Components/Widget";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
};

export default Homepage;
