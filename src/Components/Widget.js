import { Info } from "@material-ui/icons";

const Widget = ({ user }) => {
  console.log(user);
  const news = [
    {
      title: "Winner of the 2022 Nobel Peace Prize",
      others: "1d ago • 98,569 readers",
    },
    {
      title: "Here are 2022's Top Startups in India",
      others: "5h ago • 50,126 readers",
    },
    {
      title: "It’s celebration mode at India Inc",
      others: "5h ago • 2,822 readers",
    },
    {
      title: "Co-working spaces get a makeover",
      others: "5h ago • 1,236 readers",
    },
    { title: "What makes a good CEO?", others: "5h ago • 1,928 readers" },
    {
      title: "Sneak peek: Startup hiring trends",
      others: "5h ago • 1,272 readers",
    },
    {
      title: "Travel now, pay later' takes off",
      others: "5h ago • 6,080 readers",
    },
    { title: "How India paid online", others: "5h ago • 1,862 readers" },
    {
      title: "Dealing with career stagnation",
      others: "5h ago • 3,687 readers",
    },
    { title: "What makes a good CEO?", others: "5h ago • 1,928 readers" },
    {
      title: "Sneak peek: Startup hiring trends",
      others: "5h ago • 1,272 readers",
    },
    {
      title: "Travel now, pay later' takes off",
      others: "5h ago • 6,080 readers",
    },
  ];
  return (
    <div className="Widget-container">
      <div className="first-container">
        <div className="first-container-header">
          <span> Linkedin news</span>
          <Info />
        </div>
        {news.map(({ title, others }, index) => {
          return (
            <ul key={index} className="news-card">
              <li>{title}</li>
              <span>{others}</span>
            </ul>
          );
        })}
      </div>
      <div className="second-container">
        <div className="second-container-header">
          You've got the skills, aramco has the opportunities
        </div>
        <div className="second-container-content">
          <div className="images-container">
            <img src={user.profile_pic}  alt="profilepic"/>
            <img alt="company"
              src={
                "https://media-exp1.licdn.com/dms/image/C560BAQFjHNUub2MPHA/company-logo_100_100/0/1519855923074?e=1673481600&v=beta&t=ahZqnpWehZCza47MTeTIG_Qj3xbMZUcBn-LPr-iktrM"
              }
            />
          </div>
          <div className="message">{`${user.name}, aramco is hiring!`}</div>
          <div className="follow">Follow</div>
        </div>
      </div>
    </div>
  );
};
export default Widget;
