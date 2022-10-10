import {
  AirlineSeatReclineExtra,
  Comment,
  Event,
  LinkedIn,
  Phone,
  Photo,
  PostAdd,
  Public,
  Send,
  Share,
  ThumbUp,
  YouTube,
} from "@material-ui/icons";

const Feed = ({ user }) => {
  const post = [
    {
      post_id: "1",
      user_id: "1",
      user_pic:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
      user_name: "abhishek",
      time: new Date().toLocaleDateString(),
      likes: "",
      user_info: "student",
      comments: "",
      post_content: "Hello abhishek this side",
    },
    {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },
      ,
      {
        post_id: "1",
        user_id: "1",
        user_pic:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg",
        user_name: "abhishek",
        time: new Date().toLocaleDateString(),
        likes: "",
        user_info: "student",
        comments: "",
        post_content: "Hello abhishek this side",
      },

  ];
  return (
    <div className="Feed-container">
      <div className="feed-post-container">
        <div className="feed-input-container">
          <div className="feed-input-image-container">
            <img src={user.profile_pic} />
          </div>
          <div className="feed-input-text-container">
            <input type="text" placeholder="Start a post" />
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
        {post.map((data, index) => {
          return (
            <div className="post-card" key={index}>
              <div className="Post-header">
                <div className="user-pic">
                  <img src={data.user_pic} />
                </div>
                <div className="user-info">
                  <div className="user-name">{data.user_name}</div>
                  <div className="user-information">{data.user_info}</div>
                  <div className="user-time">
                    {`${data.time}`}{" "}
                    <Public style={{ fontSize: 17, paddingLeft: 3 }} />
                  </div>
                </div>
              </div>
              <div className="post-content">{data.post_content}</div>
              <div className="post-actions">
                <div className="options-container">
                  <ThumbUp
                    style={{ paddingRight: 7 }}
                  />
                  Like
                </div>
                <div className="options-container">
                  <Comment
                    style={{  paddingRight: 7 }}
                  />
                  Comment
                </div>
                <div className="options-container">
                  <Share
                    style={{ paddingRight: 7 }}
                  />
                 Share
                </div>
                <div className="options-container">
                  <Send
                    style={{  paddingRight: 7 }}
                  />
                 Send
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Feed;
