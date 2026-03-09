import React, { useMemo, useState } from "react";
import "./BillGallery.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import BillWidget from "./BillWidget";
import billData from "./data/billData";
import { CATEGORY_ICONS } from "./BillWidgetCategoryIcons";

const legendItems = [
  { label: "Education", key: "Education" },
  { label: "STEM", key: "STEM" },
  { label: "Human Rights", key: "HumanRights" },
  { label: "Environment", key: "Environment" },
  { label: "Inclusivity", key: "Inclusivity" }
];


function BillGallery() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const categories = useMemo(() => {
        const set = new Set();
        billData.forEach((bill) => {
            (bill.categories || []).forEach((cat) => set.add(cat));
        });
        return Array.from(set).sort();
    }, []);

    const normalizedQuery = searchQuery.toLowerCase().trim();

    const filteredBills = billData.filter((bill) => {
        const matchesCategory =
            selectedCategory === "All Categories" ||
            (bill.categories || []).includes(selectedCategory);

        if (!normalizedQuery) {
            return matchesCategory;
        }

        const name = (bill.name || "").toLowerCase();

        return matchesCategory && name.includes(normalizedQuery);
    });

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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <select
                            className="gallery-category-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All Categories">All Categories</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="category-legend">
                {legendItems.map((item) => {
                    const Icon = CATEGORY_ICONS[item.key];

                    if (!Icon) return null;

                    return (
                    <div key={item.key} className="legend-item">
                        <div className="category-circle">
                        <Icon />
                        </div>
                        <span className="legend-text">=&nbsp;&nbsp;{item.label}</span>
                    </div>
                    );
                })}
                </div>


                <div className="bills-container">
                    {filteredBills.length === 0 ? (
                        <p>No bills match your search.</p>
                    ) : (
                        filteredBills.map((bill) => (
                            <BillWidget
                                key={bill.id}
                                number={bill.billNumber}
                                title={bill.name}
                                date={String(bill.year)}
                                categories={bill.categories}
                                status={bill.status}
                                expanded={true}
                                summary={bill.significance || (bill.background && bill.background[0]) || ""}
                                details_url={`/bill/${bill.id}`}
                            />
                        ))
                    )}
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default BillGallery;
