import React from "react";
import "./BillWidget.css";
import BillProgressBar from './components/BillProgressBar';
import { CategoryIcon } from './data/categories';

const STATUSES = ["Draft", "Committee", "Floor Vote", "Presented", "Passed"];

function mapStatusToStep(status) {
  if (!status) return 0;
  const s = status.toLowerCase();
  if (STATUSES.map(st => st.toLowerCase()).includes(s)) return STATUSES.findIndex(st => st.toLowerCase() === s);
  if (s.includes("enacted") || s.includes("signed by the president") || s.includes("became law")) return 4;
  if (s.includes("passed") && !s.includes("referred")) return 4;
  if (s.includes("received in the senate") || s.includes("received in the house") || s.includes("engrossed")) return 3;
  if (s.includes("reported by") || s.includes("ordered to be reported")) return 2;
  if (s.includes("passed") && s.includes("referred")) return 2;
  if (s.includes("floor") || s.includes("vote")) return 2;
  if (s.includes("presented")) return 3;
  if (s.includes("referred") || s.includes("committee") || s.includes("subcommittee")) return 1;
  if (s.includes("died") && s.includes("committee")) return 1;
  if (s.includes("introduced") || s.includes("died")) return 0;
  return 0;
}

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
  expanded = false,
  sidebar = false
}) {
  const currentStep = mapStatusToStep(status);
  const chambers = getChambers(number);

    // Detailed sidebar card (Bill Detail page)
    if (sidebar) {
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

    // Expanded card with summary (Gallery page)
    if (expanded) {
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

    // Default simple card (Home page)
    return (
      <div className="bill-widget">
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
      </div>
    );
}
