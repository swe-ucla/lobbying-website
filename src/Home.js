import React from "react";
import './Home.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import BillWidget from './BillWidget';
import HomeButtons from './components/HomeButtons';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

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
            </div>


            <HomeButtons />

            <div className="bill_section">
                <h2 className="bill_section_heading">Recent Lobbying Efforts & Bill Status</h2>
                <p className="bill-section-text">
                    Track the progress of legislation impacting STEM education and women engineers
                </p>

                <div className="image_grid">
                    <BillWidget number="H.R. 1234" title="STEM Education Act" date="02/03/26" categories={["Education", "STEM"]} status="Committee"></BillWidget>
                    <BillWidget number="H.R. 1234" title="STEM Education Act" date="02/03/26" categories={["Education", "STEM"]} status="Committee"></BillWidget>
                    <BillWidget number="H.R. 1234" title="STEM Education Act" date="02/03/26" categories={["Education", "STEM"]} status="Committee"></BillWidget>
                    <BillWidget number="H.R. 1234" title="STEM Education Act" date="02/03/26" categories={["Education", "STEM"]} status="Committee"></BillWidget>
                    <BillWidget number="H.R. 1234" title="STEM Education Act" date="02/03/26" categories={["Education", "STEM"]} status="Committee"></BillWidget>
                    <BillWidget number="H.R. 1234" title="STEM Education Act" date="02/03/26" categories={["Education", "STEM"]} status="Committee"></BillWidget>
                </div>
            </div>

            <div>
                <button className="more-bills-button" onClick={() => window.location.href = "/bill_gallery"}>
                    See More Bills <ArrowRight />
                </button>
            </div>

            
            
        </div>    
    )
}

export default Home
