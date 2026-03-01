import React from "react";
import "./BillWidget.css";
import BillProgressBar from './components/BillProgressBar';

const STATUSES = ["Draft", "Committee", "Floor Vote", "Presented", "Passed"];
// Categories: STEM, Environment & Energy, Education, Healthcare, Public Infrastructure, Human & Social Rights, Miscellaneous
// TODO: Add icons for remaining categories
const CATEGORY_ICONS = {"STEM": "assets/STEM_icon.png", "Education": "assets/education_icon.png", 
  "Inclusivity": "assets/STEM_icon.png", "Environment": "assets/STEM_icon.png", "Human Rights" : "assets/STEM_icon.png"}

export default function BillWidget({ 
  number, 
  title, 
  date, 
  categories = [], 
  status,
  summary,
  details_url,
  expanded = false 
}) {
  const currentStep = STATUSES.indexOf(status);

  const leftPanel = (
      <div className="bill-left">
        <div className="bill-header">
          <span className="bill-number">{number}</span>
          <h2 className="bill-title">{title}</h2>
          <span className="bill-date">{date}</span>
        </div>

        {categories.length > 0 && (
          <div className="bill-categories">
            {categories.map((cat, i) => (
              <div key={i} className="category-circle" title={cat}>
                <img src={CATEGORY_ICONS[cat]} alt={cat} className="category-icon" />
              </div>
            ))}
          </div>
        )}

        <BillProgressBar currentStep={currentStep} />
      </div>
    );

    if (!expanded) {
      return <div className="bill-widget">{leftPanel}</div>;
    }

    return (
      <div className="bill-widget bill-widget--expanded">
        {leftPanel}

        <div className="bill-right">
          <h3 className="bill-summary-title">Summary</h3>
          <p className="bill-summary-text">{summary}</p>
          {details_url && (
            <a href={details_url} className="bill-details-link">
              <span className="bill-details-link-text">Read Full Details</span>
              <span className="bill-details-arrow">→</span>
            </a>
          )}
        </div>
      </div>
    );
}