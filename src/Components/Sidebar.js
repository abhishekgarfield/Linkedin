import { TurnedIn } from "@material-ui/icons";
import userEvent from "@testing-library/user-event";

const Sidebar = () => {
  const user = {
    name: "Abhishek",
    profile_pic:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
    university: "Chitkara university",
    user_connections: [123, 234],
  };
  const reacents = [
    "# india",
    "# population",
    "# Russia",
    "# Usa",
    "# Streetfood",
    "# Bihar",
    "# Himachal pradesh",
    "# Cricket",
    "# population",
    "# Russia-oils",
    "# india-export",
    "# population",
    "# Russia",
  ];
  return (
    <div className="Sidebar-container">
      <div className="sidebar-upper-container">
        <div className="sidebar-profile-info-container">
          <div className="sidebar-profilepic">
            <img src={user.profile_pic} />
          </div>
          <span id="sidebar-user-name">{user.name}</span>
          <span id="useruni">{`Student at ${user.university}`}</span>
        </div>
        <div className="sidebar-connection-info-container">
          <div className="Sidebar-connections">
            <div className="connection-title">Connections</div>
            <div className="Connection-count">
              {user.user_connections.length}
            </div>
          </div>
          <div className="connection-suggestion">Grow your network</div>
        </div>
        <div className="sidebar-myitems-info-container">
          <TurnedIn style={{ color: "rgba(0, 0, 0, 0.7)", paddingRight: 5 }} />
          My items
        </div>
      </div>
      <div className="sidebar-lower-container">
        <div className="sidebar-lower-header">Recent</div>
        {reacents.map((data) => {
          return <div className="sidebar-lower-info">{data}</div>;
        })}
      </div>
    </div>
  );
};
export default Sidebar;
