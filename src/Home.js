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
                <img src="/assets/background_image.png" className="background_image" />
                <div className="background_image_overlay"></div>
                <div className="background_text">
                    <p>Advocating for STEM, Education, and Policy.<br/>
                    Empowering Women Engineers</p>
                </div>


                <div className="search_box">
                    <h1 className="search_title">Policy Area</h1>

                    <div className="search_elements">
                        <div className="search-wrapper">
                            <div className="search-icon">
                                <img src="/assets/magnifying_glass.png"/>
                            </div>
                            <input
                                type="text"
                                placeholder=""
                                className="search-input"
                            />
                        </div>

                        <button className="category-button">Category</button>
                    </div>
                </div>



                <div className="bill_section">
                    <h2 className="bill_section_heading">Recent Lobbying Efforts & Bill Status</h2>

                    <div className="image_grid">
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="Image 1"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="Image 2"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="Image 3"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="Image 4"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="Image 5"/></div>
                        <div className="grid_item"><img src="/assets/bill_status.png" alt="Image 6"/></div>
                    </div>
                </div>



            </div>
            
        </div>    
    )
}

export default Home
