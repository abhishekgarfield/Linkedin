import {
  SearchRounded,
  Home,
  WorkRounded,
  Group,
  MessageOutlined,
  Person,
  Apps,
} from "@material-ui/icons";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container2">
        <div className="left-header-container">
          <div className="left-header-container-img">
            <img src="https://i.imgur.com/SAeZ1Rb.png" alt="linkedin"/>
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
          <div className="right-header-container-content">
            <Person style={headericon} />
            <span>Me</span>
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
