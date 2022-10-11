import { useState } from "react";
import {
  Comment,
  Event,
  Photo,
  PostAdd,
  Public,
  Send,
  Share,
  ThumbUp,
  YouTube,
} from "@material-ui/icons";

const Post = ({ post, user, index }) => {
    const [formdata, setformdata] = useState("");
  const [iscommentselected,setiscommentselected]=useState(false);
  const [templikes, setTemplikes] = useState(post.likes.length);
  return (
    <div className="post-card" key={index}>
      <div className="Post-header">
        <div className="user-pic">
          <img src={post.user_pic} />
        </div>
        <div className="user-info">
          <div className="user-name">{post.user_name}</div>
          <div className="user-information">{post.user_info}</div>
          <div className="user-time">
            {`${post.time}`} <Public style={{ fontSize: 17, paddingLeft: 3 }} />
          </div>
        </div>
      </div>
      <div
        className={
          templikes > 0 || post.comments.length > 0
            ? "post-content"
            : "post-content nt"
        }
      >
        {post.post_content}
      </div>
      {(templikes > 0 || post.comments.length > 0) && (
        <div className="post-likes-comments">
          <div className="post-likes">
            <i className="likes-thumbsup">
              {" "}
              <ThumbUp style={{ fontSize: 12, color: "aliceblue" }} />
            </i>
            {`${templikes > 0 ? templikes : ""}`}
          </div>
          <div className="post-comments"></div>
        </div>
      )}
      <div className="post-actions">
        <div
          className={
            post.likes.some(({ user_id }) => user_id == user.user_id)
              ? "options-container liked"
              : "options-container"
          }
          onClick={(e) => {
            e.currentTarget.classList.toggle("liked");
            if (e.currentTarget.classList.contains("liked")) {
              setTemplikes(templikes + 1);
              fetch("http://localhost:8000/addlike", {
                method: "Put",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  post_id: post.post_id,
                  user_id: user.user_id,
                }),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  e.currentTarget.style.color = "rgb(0, 132, 255)";
                });
            } else {
              setTemplikes(templikes - 1);
              fetch("http://localhost:8000/removelike", {
                method: "Delete",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  post_id: post.post_id,
                  user_id: user.user_id,
                }),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  e.currentTarget.style.color = "rgba(0, 0, 0, 0.44)";
                });
            }
          }}
        >
          <ThumbUp style={{ paddingRight: 7 }} />
          Like
        </div>
        <div className="options-container">
          <Comment style={{ paddingRight: 7 }} onClick={()=>{
            setiscommentselected(!iscommentselected)
          }} />
          Comment
        </div>
        <div className="options-container">
          <Share style={{ paddingRight: 7 }} />
          Share
        </div>
        <div className="options-container">
          <Send style={{ paddingRight: 7 }} />
          Send
        </div>
      </div>
      {iscommentselected && <div className="comments">
      <div className="feed-input-container">
          <div className="feed-input-image-container">
            <img src={user.profile_pic} />
          </div>
          <div className="feed-input-text-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = {
                  user_id: user.user_id,
                  user_pic: user.profile_pic,
                  user_name: user.name,
                  time: new Date().toISOString(),
                  user_info: "student",
                  comment_content: formdata,
                };
                setformdata("");
               fetch(`http://localhost:8000/addcomment/?post_id=${post.post_id}`, {
                  method: "Post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(comment),
                }).then((res) => {
                  if (res) {
                  }
                });
              }}
            >
              <input
                type="text"
                placeholder="Add a comment..."
                className="postdata"
                value={formdata}
                onChange={(e) => {
                  setformdata(e.target.value);
                }}
              />
              <button type="submit"></button>
            </form>
          </div>
        </div> </div>}
    </div>
  );
};

export default Post;
