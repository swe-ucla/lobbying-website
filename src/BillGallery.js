import React from "react";
import "./BillGallery.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import BillWidget from "./BillWidget";
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
                                placeholder="Search bills..."
                                className="gallery-search-input"
                            />
                        </div>

                        <div className="gallery-category-select">
                            <span>All Categories</span>
                            <svg className="gallery-category-chevron" viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bills-container">
                    {billData.map((bill) => (
                        <BillWidget
                            key={bill.id}
                            number={bill.billNumber}
                            title={bill.name}
                            date={String(bill.year)}
                            categories={bill.categories}
                            status={bill.status}
                            expanded={true}
                            summary={
                                bill.significance
                                || bill.issueConclusion
                                || (bill.background && bill.background[0])
                                || ""
                            }
                            details_url={`/bill/${bill.id}`}
                        />
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default BillGallery;
