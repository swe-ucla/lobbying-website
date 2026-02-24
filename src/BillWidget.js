import React from "react";
import "./BillWidget.css";
import BillProgressBar from './components/BillProgressBar';

const STATUSES = ["Draft", "Committee", "Floor Vote", "Presented", "Passed"];
// Categories: STEM, Environment & Energy, Education, Healthcare, Public Infrastructure, Human & Social Rights, Miscellaneous
const CATEGORY_ICONS = {"STEM": "assets/STEM_icon.png", "Education": "assets/education_icon.png"}

export default function BillWidget({ number, title, date, categories = [], status }) {
  const currentStep = STATUSES.indexOf(status);

  return (
    <div className="bill-widget">
      <div className="bill-header">
        <span className="bill-number">{number}</span>
        <h2 className="bill-title">{title}</h2>
        <span className="bill-date">{date}</span>
      </div>

      {categories.length > 0 && (
        <div className="bill-categories">
          {categories.map((cat, i) => (
            <div key={i} className="category-circle" title={cat}>
              <img src={CATEGORY_ICONS[cat]} className="category-icon"/>
            </div>
          ))}
        </div>
      )}

      <BillProgressBar currentStep={1} />
      
    </div>
  );
}