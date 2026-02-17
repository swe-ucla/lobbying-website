import React from "react";
import './Home.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';


function Home() {
    return (
        <div>
            <Header />
            <NavigationBar />

            <div className="background_section">
                <img src="/assets/background_image.png" className="background_image" alt="Lobbying group"/>
                <div className="background_image_overlay"></div>
                <div className="background_text">
                    <p>Advocating for STEM, Education, and Policy.<br/>
                    Empowering Women Engineers</p>
                </div>


                

                <div className="bill_section">
                    <h2 className="bill_section_heading">Recent Lobbying Efforts & Bill Status</h2>

                    <div className="image_grid">
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="1"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="2"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="3"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="4"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="5"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="6"/></div>
                    </div>
                </div>



            </div>
            
        </div>    
    )
}

export default Home
