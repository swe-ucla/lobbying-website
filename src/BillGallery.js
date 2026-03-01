import React, { useState } from "react";
import "./BillGallery.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Bill from "./components/Bill";
import BillWidget from "./BillWidget";

function BillGallery() {

    const [bills] = useState([
        {
            id: 1,
            number: 'US HB730',
            title: 'Mathematical and Statistical Modeling Education Act',
            date: '2025',
            categories: ['Education', 'Inclusivity', 'STEM'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb730'
        },
        {
            id: 2,
            number: 'US SB382',
            title: 'Dismantle DEI Act',
            date: '2025',
            categories: ['Inclusivity'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/sb382'
        },
        {
            id: 3,
            number: 'US HB641',
            title: 'Coordination for Soil Carbon Research and Monitoring Act',
            date: '2025',
            categories: ['Environment'],
            status: 'Committee',
            summary: 'TBD',
            details_url: '/bill/hb641'
        },
        {
            id: 4,
            number: 'US HR66',
            title: 'Global Education Equity Act',
            date: '2025',
            categories: ['Education', 'Inclusivity', 'STEM'],
            status: 'Committee',
            summary: 'TBD',
            details_url: '/bill/hr66'
        },
        {
            id: 5,
            number: 'US HB2104',
            title: 'Establish a National STEM Week To Promote Equity in STEM Education',
            date: '2025',
            categories: ['Education', 'Inclusivity', 'STEM'],
            status: 'Committee',
            summary: 'TBD',
            details_url: '/bill/hb2104'
        },
        {
            id: 6,
            number: 'US HB812',
            title: 'Making Advances Kinetic Education, Research, and Skills (MAKERS) Act',
            date: '2025',
            categories: ['Education', 'Inclusivity', 'STEM'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb812'
        },
        {
            id: 7,
            number: 'US SB4028',
            title: 'Women and Underrepresented Minorities in STEM Booster Act',
            date: '2024',
            categories: ['Education', 'Inclusivity', 'STEM'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/sb4028'
        },
        {
            id: 8,
            number: 'US HR1918',
            title: 'Farewell to Foam Act',
            date: '2024',
            categories: ['Environment'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hr1918'
        },
        {
            id: 9,
            number: 'US HB7841',
            title: 'The Reproductive Data Privacy and Protection Act',
            date: '2024',
            categories: ['Human Rights'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb7841'
        },
        {
            id: 10,
            number: 'US HB6576',
            title: 'Full-Service Community Schools Expansion Act',
            date: '2024',
            categories: ['Education'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb6576'
        },
        {
            id: 11,
            number: 'US SB3360',
            title: 'Full-Service Community School Expansion Act',
            date: '2024',
            categories: ['Education'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/sb3360'
        },
        {
            id: 12,
            number: 'US HB6235',
            title: 'Harmful Algal Bloom and Hypoxia Research and Control Amendments Act',
            date: '2024',
            categories: ['Environment'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb6235'
        },
        {
            id: 13,
            number: 'US HB5474',
            title: 'Jumpstart on College Act',
            date: '2024',
            categories: ['Education', 'Inclusivity'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb5474'
        },
        {
            id: 14,
            number: 'US HB4040',
            title: 'Recycling and Composting Accountability Act',
            date: '2024',
            categories: ['Environment'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb4040'
        },
        {
            id: 15,
            number: 'US HB403',
            title: 'Preventing Our Next Natural Disaster Act',
            date: '2024',
            categories: ['Environment'],
            status: 'Draft',
            summary: 'TBD',
            details_url: '/bill/hb403'
        }
    ]);
    
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
