import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Widget from "../Components/Widget";

const Homepage = () => {
  const user = {
    name: "Abhishek",
    profile_pic:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
    university: "Chitkara university",
    user_connections: [123, 234],
  };
  return (
    <div className="Homepage">
      <Header user={user} />
      <div className="app-body">
        <Sidebar user={user} />
        <Feed   user={user}/>
        <Widget user={user}/>
      </div>
    </div>
  );
};

export default Homepage;
