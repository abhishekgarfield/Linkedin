import { SearchRounded,Home } from "@material-ui/icons";
const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header-container">
        <div className="left-header-container-img">
          <img src="https://i.imgur.com/SAeZ1Rb.png" />
        </div>
        <div className="left-header-container-searchcontainer">
          <SearchRounded />
          <input type="text" id="searchfield" />
        </div>
      </div>
      <div className="right-header-container">
        <div className="right-header-container-content">
            <Home/>
            <span>Home</span>
        </div>
        <div className="right-header-container-content">
            <Home/>
            <span>Home</span>
        </div>
        <div className="right-header-container-content">
            <Home/>
            <span>Home</span>
        </div>
        <div className="right-header-container-content">
            <Home/>
            <span>Home</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
