import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { setIsloading } from "../Slice/activity";

const AuthModal = () => {
  const [isLogin, setislogin] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const navigate = useNavigate();
  const disptach = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    url: "",
  });
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (user.password == user.confirmpassword || isLogin) {
      setError(null);
      disptach(setIsloading(true));

      const url = `${
        isLogin ? "login" : "signup"
      }`;

      fetch(url, {
        method: "Post",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({ user }),
      }).then((response) => {
        if (response.status == 403) {
          response.json().then((data) => {
            setError(data.error);
            disptach(setIsloading(false));
          });
        } else if (response.status == 200) {
          response.json().then((data) => {
            setCookie("authToken", data.token);
            setCookie("user_id", data.user_id);
            disptach(setIsloading(false));
            navigate("/netflix");
            window.location.reload();
          });
        }
      });
    } else if (user.password != user.confirmpassword) {
      setError("Passwords don't match");
    }
  };
  return (
    <div className="authmodal-main-cont">
      <img src="https://i.imgur.com/pG5EiLc.png" />
      <div className="authmodal-inner-cont">
        <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={user.confirmpassword}
            name="confirmpassword"
            onChange={(e) => handleChange(e)}
          />
        )}
        {!isLogin && (
          <input
            type="url"
            placeholder="Profile pic"
            value={user.url}
            name="url"
            onChange={(e) => handleChange(e)}
          />
        )}
        {error && (
          <div className="error-cont">
            <span
              className="fa fa-exclamation"
              style={{ paddingRight: 5 }}
            ></span>
            {error}
          </div>
        )}
        <div className="submit-container" onClick={handleSubmit}>
          {!isloading && (
            <div className="vutton"> {isLogin ? "Sign in" : "Sign up"}</div>
          )}
          {isloading && <div className="loader"></div>}
        </div>
        <p>
        { isLogin ? "New to Linkedin ?" : "Already have an account ?"}{" "}
          <span
            onClick={() => {
              setislogin(!isLogin);
            }}
          >
            {" "}
            { isLogin ? "Sign up now." : "Signin"}
          </span>
        </p>
      </div>
    </div>
  );
};
export default AuthModal;
