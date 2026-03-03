import React from "react";
import './Home.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import BillWidget from './BillWidget';
import HomeButtons from './components/HomeButtons';
import { useNavigate } from 'react-router-dom';
import { bills } from './data/ConciseBillData';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function Home() {
    const navigate = useNavigate();
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



            <HomeButtons />

            <div className="bill_section">
                <h2 className="bill_section_heading">Recent Lobbying Efforts & Bill Status</h2>
                <p className="bill-section-text">
                    Track the progress of legislation impacting STEM education and women engineers
                </p>

                <div className="image_grid">
                    {bills.slice(0, 6).map((bill) => (
                        <div key={bill.id} className="bill-link-wrapper" onClick={() => navigate(bill.details_url)}>
                            <BillWidget
                                number={bill.number}
                                title={bill.title}
                                date={bill.date}
                                categories={bill.categories}
                                status={bill.status}
                            />
                        </div>
                    ))}

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
