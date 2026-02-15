import React, { useState } from "react";
import './BillGallery.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Bill from './components/Bill';

function BillGallery() {

    const [bills] = useState([
        {
            id: 1,
            number: 'H.R. 1234',
            title: 'STEM Education Act',
            category: 'Policy',
            imageUrl: '/assets/bill_status_2.png',
            summary: `Soil carbon sequestration is a critical strategy for mitigating climate change by capturing atmospheric carbon dioxide and storing it in agricultural and natural soils. Existing federal efforts, such as the USDA's Natural Resources Conservation Service (NRCS) programs and the Energy Act of 2020, have supported soil health initiatives, but a coordinated, cross-agency approach is lacking.

H.R. 641, the Coordination for Soil Carbon Research and Monitoring Act, addresses this gap by establishing an interagency committee to streamline research, standardize data collection, and engage stakeholders in advancing soil carbon sequestration.`
        },
        {
            id: 2,
            number: 'H.R. 1234',
            title: 'STEM Education Act',
            category: 'Policy',
            imageUrl: '/assets/bill_status_2.png',
            summary: `Soil carbon sequestration is a critical strategy for mitigating climate change by capturing atmospheric carbon dioxide and storing it in agricultural and natural soils. Existing federal efforts, such as the USDA's Natural Resources Conservation Service (NRCS) programs and the Energy Act of 2020, have supported soil health initiatives, but a coordinated, cross-agency approach is lacking.

H.R. 641, the Coordination for Soil Carbon Research and Monitoring Act, addresses this gap by establishing an interagency committee to streamline research, standardize data collection, and engage stakeholders in advancing soil carbon sequestration.`
        }
    ]);
    
    return (
        <div>
            <Header />
            <NavigationBar />

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
                    <Bill key={bill.id} bill={bill} />
                ))}
            </div>

            <Footer />

        </div>
    );
}

export default BillGallery;
