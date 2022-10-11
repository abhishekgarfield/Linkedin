import { useState } from "react";
import {
  ArrowDropDown,
  Comment,
  Public,
  Send,
  Share,
  ThumbUp,
} from "@material-ui/icons";

const Post = ({ post, user, index, getposts }) => {
  const [formdata, setformdata] = useState("");
  const [iscommentselected, setiscommentselected] = useState(false);
  const [templikes, setTemplikes] = useState(post ? post.likes.length : 0);
  return (
    <div className="post-card" key={index}>
      <div className="Post-header">
        <div className="user-pic">
          <img src={post.user_pic} alt="profile" />
        </div>
        <div className="user-info">
          <div className="user-name">{post.user_name}</div>
          <div className="user-information">{post.user_info}</div>
          <div className="user-time">
            {`${
              (new Date().getDate() - 1) * 24 +
                new Date().getHours() -
                ((new Date(post.time).getDate() - 1) * 24 +
                  new Date(post.time).getHours()) >
              24
                ? `${
                    (new Date().getDate() - 1) * 24 +
                    new Date().getHours() -
                    ((new Date(post.time).getDate() - 1) * 24 +
                      new Date(post.time).getHours()) /
                      24
                  } d`
                : `${
                    (new Date().getDate() - 1) * 24 +
                    new Date().getHours() -
                    ((new Date(post.time).getDate() - 1) * 24 +
                      new Date(post.time).getHours())
                  }h`
            }`}{" "}
            <Public style={{ fontSize: 17, paddingLeft: 3 }} />
          </div>
        </div>
      </div>
      <div
        className={
          templikes > 0 || post.comments?.length > 0
            ? "post-content"
            : "post-content nt"
        }
      >
        {post.post_content}
      </div>
      {(templikes > 0 || post.comments?.length > 0) && (
        <div className="post-likes-comments">
          {templikes > 0 && (
            <div className="post-likes">
              <i className="likes-thumbsup">
                {" "}
                <ThumbUp style={{ fontSize: 12, color: "aliceblue" }} />
              </i>
              {`${templikes > 0 ? templikes : "0"}`}
            </div>
          )}
          <div className="post-comments">{`${
            post.comments?.length > 0 ? post.comments?.length : 0
          } comments`}</div>
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
              fetch("https://linkedingarfield.herokuapp.com/addlike", {
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
              fetch("https://linkedingarfield.herokuapp.com/removelike", {
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
        <div
          className="options-container"
          onClick={() => {
            setiscommentselected(!iscommentselected);
          }}
        >
          <Comment style={{ paddingRight: 7 }} />
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
      {iscommentselected && (
        <div className="comments">
          <div className="feed-input-container">
            <div className="feed-input-image-container">
              <img src={user.profile_pic}   alt="profile" />
            </div>
            <div className="feed-input-text-container">
              <form
                onSubmit={(e) => {
                  if (formdata.length > 2) {
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
                    fetch(
                      `https://linkedingarfield.herokuapp.com/addcomment/?post_id=${post.post_id}`,
                      {
                        method: "Post",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(comment),
                      }
                    )
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        getposts();
                      });
                  }
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
          </div>{" "}
        </div>
      )}
      {iscommentselected && (
        <>
          {" "}
          <div className="comment-header">
            Comments
            <ArrowDropDown />
          </div>
          {post.comments?.map((post) => {
            return (
              <div className="comment-container">
                <div className="Post-header">
                  <div className="user-pic">
                    <img src={post.user_pic}   alt="profile" />
                  </div>
                  <div className="user-info">
                    <div className="user-name">{post.user_name}</div>
                    <div className="user-information">{post.user_info}</div>
                    <div className="user-time">
                      {`${
                        (new Date().getDate() - 1) * 24 +
                          new Date().getHours() -
                          ((new Date(post.time).getDate() - 1) * 24 +
                            new Date(post.time).getHours()) >
                        24
                          ? `${
                              (new Date().getDate() - 1) * 24 +
                              new Date().getHours() -
                              ((new Date(post.time).getDate() - 1) * 24 +
                                new Date(post.time).getHours()) /
                                24
                            } d`
                          : `${
                              (new Date().getDate() - 1) * 24 +
                              new Date().getHours() -
                              ((new Date(post.time).getDate() - 1) * 24 +
                                new Date(post.time).getHours())
                            }h`
                      }`}{" "}
                      <Public style={{ fontSize: 17, paddingLeft: 3 }} />
                    </div>
                    <div
                      className={
                        templikes > 0 || post.comments?.length > 0
                          ? "post-content"
                          : "post-content nt"
                      }
                    >
                      {post.comment_content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Post;
