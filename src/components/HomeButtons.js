import "./HomeButtons.css";

const home_buttons = [
  {
    id: 1,
    title: "Events & Advocacy",
    description: "Join upcoming lobbying efforts, meetings, and community events.",
    link_name: "See Events",
    link: "/events",
    bg: "red",
    icon: "/assets/events_advocacy_icon.png",
  },
  {
    id: 2,
    title: "Priority Legislation",
    description: "Track current bills and legislative initiatives we're actively supporting in Congress.",
    link_name: "View All Bills",
    link: "/bill_gallery",
    bg: "blue",
    icon: "/assets/document_icon.png",
  },
  {
    id: 3,
    title: "About Us",
    description: "Learn more about our mission and committee members at SWE @ UCLA.",
    link_name: "See About Us",
    link: "/about",
    bg: "red",
    icon: "/assets/about_us_icon.png",
  },
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function HomeButtons() {
  return (
    <div className="home-button-row-container">
        <div className="home-button-row">
            {home_buttons.map((home_button) => (
            <div key={home_button.id} className={`button button--${home_button.bg}`}>
                <div className="button-shine" />
                <div className="icon-wrap">
                    <img
                      src={home_button.icon}
                      alt={`${home_button.title} icon`}
                      className="document-icon-img"
                    />
                </div>
                <h2 className="button-title">{home_button.title}</h2>
                <p className="button-desc">{home_button.description}</p>
                <button className="button-link" onClick={() => window.location.href = home_button.link}>
                    {home_button.link_name} <ArrowRight />
                </button>
            </div>
            ))}
        </div>
    </div>
  );
}

export default HomeButtons
