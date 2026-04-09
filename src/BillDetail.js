import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './BillDetail.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import BillWidget from './BillWidget';
import billData from './data/billData';

const URL_SPLIT = /(https?:\/\/[^\s]+)/g;

function renderContactLine(line, i) {
    const t = typeof line === "string" ? line.trim() : "";
    if (!t) {
        return <p key={i} className="bd-contact-spacer" aria-hidden="true" />;
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
        return (
            <p key={i} className="bd-contact-line">
                <a href={`mailto:${t}`} className="bd-contact-email">
                    {t}
                </a>
            </p>
        );
    }
    return (
        <p key={i} className="bd-contact-line">
            {line}
        </p>
    );
}

function linkifyReferenceText(text) {
    const parts = text.split(URL_SPLIT);
    return parts.map((part, i) => {
        if (/^https?:\/\//.test(part)) {
            const href = part.replace(/[.,;:)\]]+$/, "");
            return (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bd-reference-link"
                >
                    {part}
                </a>
            );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
}

/** Renders **double-asterisk** spans as <strong> (for memo-style emphasis in plain strings). */
function renderInlineBold(text) {
    if (typeof text !== "string") return text;
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
}

function BillDetail() {
    const { id } = useParams();
    const bill = billData.find(b => b.id === id);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!bill) {
        return (
            <div className="bill-detail-page-wrapper">
                <NavigationBar />
                <div className="bd-content">
                    <h1>Bill not found.</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="bill-detail-page-wrapper">
            <section className="bill-hero">
                <NavigationBar />
                <Link to="/bill_gallery" className="bill-hero-back-link">
                    <span className="bill-hero-back-arrow">&larr;</span>
                    Back to Impact Gallery
                </Link>
                <h1 className="bill-hero-title">
                    {bill.heroTitle ?? `${bill.name} (${bill.billNumber})`}
                </h1>
                {(bill.leadAuthor || bill.coAuthors || bill.status) && (
                    <div className="bill-hero-info">
                        {bill.leadAuthor && (
                            <div className="bill-hero-info-col">
                                <p className="bill-hero-info-label">
                                    {bill.leadAuthorLabel ?? "Lead Author"}
                                </p>
                                <p className="bill-hero-info-value">{bill.leadAuthor}</p>
                            </div>
                        )}
                        {bill.coAuthors && (
                            <div className="bill-hero-info-col">
                                <p className="bill-hero-info-label">
                                    {bill.coAuthorsLabel ?? "Co-Authors"}
                                </p>
                                <p className="bill-hero-info-value">{bill.coAuthors}</p>
                            </div>
                        )}
                        {bill.status && (
                            <div className="bill-hero-info-col">
                                <p className="bill-hero-info-label">Status</p>
                                <p className="bill-hero-info-value">{bill.status}</p>
                            </div>
                        )}
                    </div>
                )}
            </section>

            <div className="bill-detail-page">

            {/* Main Content */}
            {/* <div className="bd-content"> */}
                <aside className="bd-sidebar">
                    <BillWidget
                        number={bill.billNumber}
                        title={bill.name}
                        date={bill.year.toString()}
                        categories={bill.categories}
                        status={bill.status}
                        legiscanLink={bill.legiscanLink}
                        sidebar
                    />
                </aside>

                <main className="bd-main">
                    {/* Background */}
                    {bill.background.length > 0 && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">
                                {bill.sectionHeadings?.background ?? "Background"}
                            </h2>
                            {bill.background.map((para, i) => (
                                <p key={i}>{renderInlineBold(para)}</p>
                            ))}
                        </section>
                    )}

                    {/* Issue */}
                    {(bill.issues.length > 0 || bill.issueIntro) && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">
                                {bill.sectionHeadings?.issue ?? "Issue"}
                            </h2>
                            {bill.issueIntro && bill.issueIntro.split('\n\n').map((para, i) => (
                                <p key={i}>{renderInlineBold(para)}</p>
                            ))}
                            {bill.issues.length > 0 && (
                                <ul className="bd-issue-list">
                                    {bill.issues.map((issue, i) => (
                                        <li key={i}>
                                            {issue.bold ? (
                                                <>
                                                    <strong>{issue.bold}</strong>
                                                    {issue.text.replace(issue.bold, '')}
                                                </>
                                            ) : (
                                                issue.text
                                            )}
                                            {issue.subItems.length > 0 && (
                                                <ul className="bd-issue-sublist">
                                                    {issue.subItems.map((sub, j) => (
                                                        <li key={j}>{sub}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {bill.issueConclusion && <p>{bill.issueConclusion}</p>}
                        </section>
                    )}

                    {/* Recommendations */}
                    {(bill.recommendations.length > 0 || bill.recommendationsIntro) && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">
                                {bill.sectionHeadings?.recommendations ?? "Recommendations"}
                            </h2>
                            {bill.recommendationsIntro && (
                                <p>{renderInlineBold(bill.recommendationsIntro)}</p>
                            )}
                            {bill.recommendations.length > 0 && (
                                bill.recommendationsPlain ? (
                                    <>
                                        {bill.recommendations.map((rec, i) => (
                                            <React.Fragment key={i}>
                                                <p>{renderInlineBold(rec.text)}</p>
                                                {(rec.subItems ?? []).map((sub, j) => (
                                                    <p key={j}>{renderInlineBold(sub)}</p>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </>
                                ) : (
                                    <ol className="bd-recommendations-list">
                                        {bill.recommendations.map((rec, i) => (
                                            <li key={i}>
                                                {rec.bold ? (
                                                    <>
                                                        <strong className="bd-rec-lead">{rec.bold}</strong>
                                                        {rec.text.replace(rec.bold, '')}
                                                    </>
                                                ) : (rec.subItems ?? []).length > 0 ? (
                                                    <strong className="bd-rec-lead">{rec.text}</strong>
                                                ) : (
                                                    rec.text
                                                )}
                                                {(rec.subItems ?? []).length > 0 && (
                                                    <ul className="bd-rec-sublist">
                                                        {(rec.subItems ?? []).map((sub, j) => (
                                                            <li key={j}>{renderInlineBold(sub)}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                )
                            )}
                        </section>
                    )}

                    {Array.isArray(bill.testimonies) &&
                        bill.testimonies.some((t) => typeof t === "string" && t.trim().length > 0) && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">
                                {bill.sectionHeadings?.testimonies ?? "Testimonies"}
                            </h2>
                            {bill.testimonies
                                .filter((t) => typeof t === "string" && t.trim().length > 0)
                                .map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                        </section>
                    )}

                    {/* Significance */}
                    {bill.significance && (
                        <section className="bd-section">
                            {!(
                                typeof bill.significanceTitle === "string" &&
                                bill.significanceTitle.trim() === ""
                            ) && (
                                <h2 className="bd-section-title">
                                    {bill.significanceTitle ?? "Significance to SWE@UCLA"}
                                </h2>
                            )}
                            {bill.significance.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </section>
                    )}

                    {(bill.references?.length > 0 || bill.sources?.length > 0) && (
                        <section className="bd-section bd-references">
                            <h2 className="bd-section-title">
                                {bill.sectionHeadings?.references ??
                                    bill.sectionHeadings?.sources ??
                                    "References"}
                            </h2>
                            <ol className="bd-references-list">
                                {(bill.references ?? bill.sources).map((line, i) => (
                                    <li key={i}>
                                        <span className="bd-reference-text">
                                            {linkifyReferenceText(line)}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}

                    {/* Credit / Contact */}
                    {bill.contact && (
                        <section className="bd-section bd-credit">
                            <h2 className="bd-section-title">
                                {bill.contact.sectionTitle ?? "Credit"}
                            </h2>
                            {bill.contact.lines && bill.contact.lines.length > 0 ? (
                                bill.contact.lines.map((line, i) => renderContactLine(line, i))
                            ) : (
                                (bill.contact.names || []).map((name, i) => (
                                    <p key={i} className="bd-contact-line">
                                        {name}
                                    </p>
                                ))
                            )}
                        </section>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default BillDetail;
