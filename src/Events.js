import React from "react";
import "./Events.css";
import NavigationBar from "./components/NavigationBar";

function Events() {
    return (
        <div className="events-page-wrapper">
            <NavigationBar />

            <section className="events-hero-image-only">
                <img
                    src="/assets/Events Hero.svg"
                    alt="Events hero"
                    className="events-hero-image"
                />
            </section>

            <div className="events-background">
                <div className="events-page">
                    <h2 className="events-section-heading">Upcoming Events</h2>

                    <div className="calendar-section">
                        <iframe src="https://calendar.google.com/calendar/embed?src=lobbying.swe.ucla%40gmail.com&ctz=America%2FLos_Angeles"
                            style={{border: 0}}
                            width="800"
                            height="600"
                            frameBorder="0"
                            scrolling="no">
                        </iframe>
                    </div>

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
                                <h3 className="event-card-title">Immigration Write for Rights (W4R)</h3>
                                <p className="event-card-date">February 23, 2026</p>
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
                                <h3 className="event-card-title">DEI &amp; I</h3>
                                <p className="event-card-date">February 19, 2026</p>
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
                                <h3 className="event-card-title">Donation effort for LA wildfire victims</h3>
                                <p className="event-card-date">January 15, 2025</p>
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
    );
}

export default Events;
