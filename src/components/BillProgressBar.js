import React from "react";
import "./BillProgressBar.css";

const STATUSES = ["Draft", "Committee", "Floor Vote", "Presented", "Passed"];

export default function BillProgressBar({ currentStep = 1 }) {
  const progressPercent = (currentStep + 1) * 20;

  return (
    <div className="progress-container">
      <p className="progress-label">CURRENT STATUS</p>
      <p className="progress-current">{STATUSES[currentStep]}</p>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="progress-circles">
        {STATUSES.map((step, i) => {
          const completed = i <= currentStep;
          return (
            <div key={step} className="progress-step-col">
              <div className={`progress-circle ${completed ? "completed" : "incomplete"}`}>
                {completed && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className={`progress-step-label ${i === currentStep ? "active-step" : completed ? "done-step" : "future-step"}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}