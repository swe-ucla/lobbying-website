import React from "react";
import "./BillGallery.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Bill from "./components/Bill";
import billData from "./data/billData";

function BillGallery() {
    
    return (
        <div className="bill-gallery-page">
            <NavigationBar />

            <section className="bill-gallery-hero-image-only">
                <img
                    src="/assets/Our Impact Hero.svg"
                    alt="Our Impact hero"
                    className="bill-gallery-hero-image"
                />
            </section>

            <div className="bill-gallery-content">
                <div className="gallery-search-box">
                        <div className="gallery-search-elements">
                            <div className="gallery-search-wrapper">
                                <div className="gallery-search-icon">
                                    <img src="/assets/magnifying_glass.png" alt="magnifying glass"/>
                                </div>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="gallery-search-input"
                                />
                            </div>

                            <button className="gallery-category-button">Category</button>
                        </div>
                </div>

                <div className="bills-container">
                    {billData.map((bill) => (
                        <Bill key={bill.id} bill={bill} />
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default BillGallery;
