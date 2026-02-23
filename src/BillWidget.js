import React from "react";
import "./BillWidget.css";

const STATUSES = ["Draft", "Committee", "Floor Vote", "Presented", "Passed"];
// Categories: STEM, Environment & Energy, Education, Healthcare, Public Infrastructure, Human & Social Rights, Miscellaneous 

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
            </div>
          ))}
        </div>
      )}

      <div className="bill-progress-wrapper">
        <div className="bill-progress">
          {STATUSES.map((step, i) => {
            const filled = i <= currentStep;
            const isFirst = i === 0;
            const isLast = i === STATUSES.length - 1;
            return (
              <div
                key={step}
                className={[
                  "progress-step",
                  filled ? "filled" : "empty",
                  isFirst ? "first" : "",
                  isLast ? "last" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            );
          })}
        </div>

        <div className="bill-progress-labels">
          {STATUSES.map((step, i) => (
            <span
              key={step}
              className={`step-label ${i <= currentStep ? "active-label" : ""}`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}