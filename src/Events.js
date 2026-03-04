import React from "react";
import "./Events.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function Events() {
    return (
        <div className="events-page-wrapper">
            <section className="events-hero" style={{ backgroundImage: "linear-gradient(to bottom, rgba(11, 40, 128, 0.95) 15%, rgba(20, 71, 230, 0) 88%), url('/assets/events_hero_bg.jpg')" }}>
                <NavigationBar />
                <h1 className="events-hero-title">Events</h1>
                <svg className="events-hero-line" width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H60" stroke="white" strokeWidth="2"/>
                </svg>
            </section>

            <div className="events-background">
                <div className="events-page">
                    <div className="events-section">
                        <h2 className="events-section-heading">Upcoming Events</h2>
                        <div className="calendar-section">
                            <iframe src="https://calendar.google.com/calendar/embed?src=lobbying.swe.ucla%40gmail.com&ctz=America%2FLos_Angeles"
                                style={{border: 0}}
                                width="800"
                                height="600"
                                frameBorder="0"
                                scrolling="no"
                                title="SWE Lobbying Calendar">
                            </iframe>
                        </div>
                    </div>

                    <div className="events-section events-section--left">
                        <h2 className="events-section-heading">Past Events</h2>
                        <div className="past-events-list">
                            <div className="event-card">
                                <div
                                    className="event-card-image-wrapper"
                                    style={{ backgroundImage: "url(/assets/write4rights.jpg)" }}
                                    role="img"
                                    aria-label="Immigration Write for Rights"
                                ></div>
                                <div className="event-card-content">
                                    <div className="event-card-header">
                                        <h3 className="event-card-title">Immigration Write for Rights (W4R)</h3>
                                        <p className="event-card-date">February 23, 2026</p>
                                    </div>
                                    <p className="event-card-description">
                                        SWE @ UCLA hosted a Bad Bunny-themed W4R event to advocate for
                                        immigration reform. Attendees drafted letters to legislators regarding
                                        immigrant protection and immigration enforcement. They discussed key
                                        immigration issues affecting the community, and created vision boards
                                        while listening to the artist's discography, combining cultural
                                        celebration with civic engagement.
                                    </p>
                                </div>
                            </div>

                            <div className="event-card">
                                <div
                                    className="event-card-image-wrapper"
                                    style={{ backgroundImage: "url(/assets/dei.jpg)" }}
                                    role="img"
                                    aria-label="DEI and I"
                                ></div>
                                <div className="event-card-content">
                                    <div className="event-card-header">
                                        <h3 className="event-card-title">DEI &amp; I</h3>
                                        <p className="event-card-date">February 19, 2026</p>
                                    </div>
                                    <p className="event-card-description">
                                        SWE @ UCLA hosted a forum dedicated to the intersection of Diversity,
                                        Equity, Inclusion, and Innovation. The event fostered critical dialogue
                                        regarding the necessity of diverse perspectives in shaping both STEM
                                        education curricula and the modern engineering workforce by discussing
                                        strategies to dismantle systemic barriers.
                                    </p>
                                </div>
                            </div>

                            <div className="event-card">
                                <div
                                    className="event-card-image-wrapper"
                                    style={{ backgroundImage: "url(/assets/wildfire.jpg)" }}
                                    role="img"
                                    aria-label="Donation effort for LA wildfire victims"
                                ></div>
                                <div className="event-card-content">
                                    <div className="event-card-header">
                                        <h3 className="event-card-title">Donation effort for LA wildfire victims</h3>
                                        <p className="event-card-date">January 15, 2025</p>
                                    </div>
                                    <p className="event-card-description">
                                        SWE @ UCLA hosted a donation drive for victims of the Los Angeles
                                        wildfires. Members of the club created donation kits at the event for
                                        children affected by fires across LA County, which burned over 57,000
                                        acres according to the California Department of Forestry and Fire
                                        Protection, and drafted letters to legislators pushing for wildfire
                                        relief bills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Events;
