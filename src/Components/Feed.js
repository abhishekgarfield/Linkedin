import {
  Event,
  Photo,
  PostAdd,
  YouTube,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import Post from "./Posts";

const Feed = ({ user }) => {
  const [formdata, setformdata] = useState("");
  const [posts, setPosts] = useState(null);
  const getposts = () => {
    fetch("http://localhost:8000/getposts", { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data.sort((a, b) => b.time.localeCompare(a.time)));
      });
  };
  useEffect(() => {
    getposts();
  }, []);
  return (
    <div className="Feed-container">
      <div className="feed-post-container">
        <div className="feed-input-container">
          <div className="feed-input-image-container">
            <img src={user.profile_pic}   alt="profile" />
          </div>
          <div className="feed-input-text-container">
            <form
              onSubmit={(e) => {
                if (formdata.length) {
                  e.preventDefault();
                  const post = {
                    user_id: user.user_id,
                    user_pic: user.profile_pic,
                    user_name: user.name,
                    time: new Date().toISOString(),
                    likes: [],
                    user_info: "student",
                    post_content: formdata,
                  };
                  setformdata("");
                  console.log(post);
                  fetch("http://localhost:8000/addpost", {
                    method: "Post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(post),
                  })
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      console.log(data);
                      setPosts(
                        data.sort((a, b) => b.time.localeCompare(a.time))
                      );
                    });
                }
              }}
            >
              <input
                type="text"
                placeholder="Start a post"
                className="postdata"
                value={formdata}
                onChange={(e) => {
                  setformdata(e.target.value);
                }}
              />
              <button type="submit"></button>
            </form>
          </div>
        </div>
        <div className="feed-option-container">
          <div className="options-container">
            <Photo style={{ color: "rgb(0, 132, 255)", paddingRight: 7 }} />
            Photo
          </div>
          <div className="options-container">
            <YouTube style={{ color: "rgb(20, 152, 20)", paddingRight: 7 }} />
            Video
          </div>
          <div className="options-container">
            <Event
              style={{ color: " rgba(163, 58, 58, 0.812)", paddingRight: 7 }}
            />
            Event
          </div>
          <div className="options-container">
            <PostAdd
              style={{ color: "rgba(255, 0, 0, 0.703)", paddingRight: 7 }}
            />
            Write article
          </div>
        </div>
      </div>

      <div className="feed-Read-container">
        {posts?.map((data, index) => {
          return (
            <Post key={index} post={data} user={user} getposts={getposts} />
          );
        })}
      </div>
    </div>
  );
};
export default Feed;
