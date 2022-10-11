import {
  SearchRounded,
  Home,
  WorkRounded,
  Group,
  MessageOutlined,
  Apps,
  ArrowDropDown,
} from "@material-ui/icons";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Header = ({ user }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  return (
    <div className="header-container">
      <div className="header-container2">
        <div className="left-header-container">
          <div className="left-header-container-img">
            <img src="https://i.imgur.com/SAeZ1Rb.png" alt="linkedin" />
          </div>
          <div className="left-header-container-searchcontainer">
            <SearchRounded style={headersearchicon} />
            <input type="text" id="searchfield" placeholder="Search" />
          </div>
        </div>
        <div className="right-header-container">
          <div className="right-header-container-content">
            <Home style={headericon} />
            <span>Home</span>
          </div>
          <div className="right-header-container-content">
            <WorkRounded style={headericon} />
            <span>Jobs</span>
          </div>
          <div className="right-header-container-content">
            <Group style={headericon} />
            <span>My Network</span>
          </div>
          <div className="right-header-container-content">
            <MessageOutlined style={headericon} />
            <span>Messaging</span>
          </div>
          <div
            className="right-header-container-content"
            onClick={() => {
              var el = document.querySelector(".logout");
              el.classList.toggle("show");
            }}
          >
            <img src={user.profile_pic} style={headericon}   alt="profile" />
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Me
              <ArrowDropDown />
            </span>
            <div className="logout">
              <div className="sidebar-profile-info-container">
                <div className="sidebar-profilepic">
                  <img src={user.profile_pic} alt="profile-pic" />
                </div>
                <div className="logout-style">
                  <span className="sidebar-user-name">{user.name}</span>
                  <span className="useruni">{`Student at ${user.university}`}</span>
                </div>
              </div>
              <div
                className="logout-button"
                onClick={() => {
                  removeCookie("authToken", cookies.authToken);
                  removeCookie("user_id", cookies.user_id);

                  navigate("/");
                }}
              >
                Logout
              </div>
            </div>
          </div>
          <div className="right-header-container-content">
            <Apps style={headericon} />
            <span>Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const headericon = {
  color: "rgba(0,0,0,0.6)",
  fontSize: 25,
};
const headersearchicon = {
  color: "rgba(0,0,0,0.6)",
  fontSize: 20,
  paddingRight: 5,
};

export default Header;
