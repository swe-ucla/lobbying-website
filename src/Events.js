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
                    <h1 className="events-title">Upcoming & Past Events</h1>

                    <div className="calendar-section">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles"
                            title="Events Calendar"
                            className="calendar-embed"
                        ></iframe>
                    </div>

                    <h2 className="past-events-title">Past Events</h2>

                    <div className="past-events-list">
                        <div className="event-card">
                            <img
                                src="/assets/event_photo.png"
                                alt="Event"
                                className="event-card-image"
                            />
                            <div className="event-card-content">
                                <h3 className="event-card-title">Donation effort for LA wildfire victims</h3>
                                <p className="event-card-description">
                                    The Society of Women Engineers at UCLA hosted a donation drive for
                                    victims of the Los Angeles wildfires Thursday. Members of the club
                                    created donation kits at the event for children affected by fires
                                    across LA County, which have burned over 47,000 acres since Jan. 7,
                                    according to the California Department of Forestry and Fire Protection
                                    website.
                                </p>
                            </div>
                        </div>

                        <div className="event-card">
                            <img
                                src="/assets/event_photo.png"
                                alt="Event"
                                className="event-card-image"
                            />
                            <div className="event-card-content">
                                <h3 className="event-card-title">Donation effort for LA wildfire victims</h3>
                                <p className="event-card-description">
                                    The Society of Women Engineers at UCLA hosted a donation drive for
                                    victims of the Los Angeles wildfires Thursday. Members of the club
                                    created donation kits at the event for children affected by fires
                                    across LA County, which have burned over 47,000 acres since Jan. 7,
                                    according to the California Department of Forestry and Fire Protection
                                    website.
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
