import React from "react";
import "./BillWidget.css";
import BillProgressBar from './components/BillProgressBar';

const STATUSES = ["Draft", "Committee", "Floor Vote", "Presented", "Passed"];

const CategoryIcon = ({ category }) => {
  const icons = {
    Education: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
    STEM: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v6l4 8H5l4-8V3z" />
        <path d="M9 3h6" />
        <circle cx="13" cy="15" r="1" fill="#1447e7" />
        <circle cx="10" cy="13" r="0.5" fill="#1447e7" />
      </svg>
    ),
    Inclusivity: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3h4v7l3 7H7l3-7V3z" />
        <path d="M10 3h4" />
        <circle cx="12" cy="14" r="1" fill="#1447e7" />
      </svg>
    ),
    Environment: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12A8 8 0 0 0 4 10c0 4.5 4 8 8 12z" />
        <path d="M12 12c-2 0-4 1-4 3" />
        <path d="M12 8v6" />
      </svg>
    ),
    "Human Rights": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  };
  return icons[category] || null;
};

function getChambers(billNumber) {
  if (!billNumber) return [];
  const prefix = billNumber.replace(/^US\s*/i, '').trim().toUpperCase();
  if (prefix.startsWith('HB') || prefix.startsWith('HR')) return ['House'];
  if (prefix.startsWith('SB') || prefix.startsWith('SR')) return ['Senate'];
  return ['House', 'Senate'];
}

export default function BillWidget({ 
  number, 
  title, 
  date, 
  categories = [], 
  status,
  summary,
  details_url,
  legiscanLink,
  expanded = false 
}) {
  const currentStep = STATUSES.indexOf(status);
  const chambers = getChambers(number);

    if (!expanded) {
      return (
        <div className="bill-widget">
          <div className="bill-left">
            <div className="bill-header">
              <span className="bill-number">{number}</span>
              <h2 className="bill-title">{title}</h2>
            </div>

            <div className="bill-meta-sections">
              {categories.length > 0 && (
                <div className="bill-meta-row">
                  <span className="bill-meta-label">CATEGORY</span>
                  <div className="bill-categories">
                    {categories.map((cat, i) => (
                      <div key={i} className="category-circle" title={cat}>
                        <CategoryIcon category={cat} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bill-meta-row">
                <span className="bill-meta-label">DATE INTRODUCED</span>
                <div className="bill-meta-date">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{date}</span>
                </div>
              </div>

              <div className="bill-meta-row">
                <span className="bill-meta-label">CHAMBERS</span>
                <div className="bill-chambers">
                  {['House', 'Senate'].map((chamber) => (
                    <span
                      key={chamber}
                      className={`chamber-pill ${chambers.includes(chamber) ? 'chamber-active' : 'chamber-inactive'}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                      </svg>
                      {chamber}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <BillProgressBar currentStep={currentStep} />

            {legiscanLink && (
              <a
                href={legiscanLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bill-congress-btn"
              >
                View on Congress.gov
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="bill-widget bill-widget--expanded">
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
                  <CategoryIcon category={cat} />
                </div>
              ))}
            </div>
          )}

          <BillProgressBar currentStep={currentStep} />
        </div>

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
