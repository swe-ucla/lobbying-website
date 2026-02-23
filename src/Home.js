import React from "react";
import "./Home.css";
import NavigationBar from "./components/NavigationBar";


function Home() {
    return (
        <div className="home-page">
            <NavigationBar />

            <section className="hero-image-only">
                <img
                    src="/assets/Home Gradient and Image.svg"
                    alt="Capitol building with gradient"
                    className="hero-image"
                />
            </section>

            <div className="bill_section">
                <h2 className="bill_section_heading">Recent Lobbying Efforts & Bill Status</h2>

                <div className="image_grid">
                    <div className="grid_item"><img src="/assets/bill_status.png" alt="1" /></div>
                    <div className="grid_item"><img src="/assets/bill_status.png" alt="2" /></div>
                    <div className="grid_item"><img src="/assets/bill_status.png" alt="3" /></div>
                    <div className="grid_item"><img src="/assets/bill_status.png" alt="4" /></div>
                    <div className="grid_item"><img src="/assets/bill_status.png" alt="5" /></div>
                    <div className="grid_item"><img src="/assets/bill_status.png" alt="6" /></div>
                </div>
            </div>
            
        </div>    
    )
}

export default Home
