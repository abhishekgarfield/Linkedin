import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Widget from "../Components/Widget";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsloading } from "../Slice/activity";
import { json, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const user_id = cookies.user_id;
  console.log(user_id);
  const [user, setUser] = useState(null);
  const getuser = () => {
    disptach(setIsloading(true));
    fetch(`http://localhost:8000/getuser/?user_id=${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        disptach(setIsloading(false));
        setUser(data);
      });
  };
  useEffect(() => {
    getuser();
  }, []);
  return (
    <div className="Homepage">
      {user && !isloading && (
        <>
          <Header user={user} />
          <div className="app-body">
            <Sidebar user={user} />
            <Feed user={user} />
            <Widget user={user} />
          </div>
        </>
      )}
      {!user && isloading && <div className="loader-container">
        <div className="loader"></div></div>}
    </div>
  );
};

export default Homepage;
