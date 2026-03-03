import React, { useState } from "react";
import "./BillGallery.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Bill from "./components/Bill";
import BillWidget from "./BillWidget";
import { bills } from './data/ConciseBillData';

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
                <h1 className="bill-gallery-title">IMPACT BILL GALLERY</h1>

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
                    {bills.map((bill) => (
                        <BillWidget
                            key={bill.id}
                            number={bill.number}
                            title={bill.title}
                            date={bill.date}
                            categories={bill.categories}
                            status={bill.status}
                            expanded={true}
                            summary={bill.summary}
                            details_url={bill.details_url}
                        />
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default BillGallery;
