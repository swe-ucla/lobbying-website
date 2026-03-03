import React from "react";
import { useParams, Link } from "react-router-dom";
import './BillDetail.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import billData from './data/billData';

function BillDetail() {
    const { id } = useParams();
    const bill = billData.find(b => b.id === id);

    if (!bill) {
        return (
            <div className="bill-detail-page-wrapper">
                <NavigationBar />
                <div className="bill-detail-page">
                    <h1 className="bill-detail-title">Bill not found.</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="bill-detail-page-wrapper">
            <NavigationBar />

            <section className="bill-detail-hero-image-only">
                <img
                    src="/assets/Bill Memo Hero.svg"
                    alt="Bill memo hero"
                    className="bill-detail-hero-image"
                />
                <div className="bill-hero-overlay">
                    <Link to="/bill_gallery" className="bill-hero-back-link">← Back to Impact Gallery</Link>
                    <h1 className="bill-hero-title">{bill.title}</h1>
                    <div className="bill-hero-info">
                        <div className="bill-hero-info-col">
                            <p className="bill-hero-info-label">Lead Author</p>
                            <p className="bill-hero-info-value">{bill.leadAuthor}</p>
                        </div>
                        <div className="bill-hero-info-col">
                            <p className="bill-hero-info-label">Co-Authors</p>
                            <p className="bill-hero-info-value">{bill.coAuthors}</p>
                        </div>
                        <div className="bill-hero-info-col">
                            <p className="bill-hero-info-label">Status</p>
                            <p className="bill-hero-info-value">{bill.status}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bill-detail-page">

                {/* Background + Sidebar */}
                <div className="bill-content-row">
                    <div className="bill-background-section">
                        <h2 className="bill-section-heading">BACKGROUND</h2>
                        {bill.background.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    <div className="bill-sidebar">
                        <img
                            src={bill.statusImage}
                            alt="Bill Status Card"
                            className="bill-sidebar-image"
                        />
                    </div>
                </div>

                {/* Issue Section */}
                {(bill.issues.length > 0 || bill.issueIntro) && (
                    <div className="bill-issue-section">
                        <h2 className="bill-section-heading">ISSUE</h2>
                        {bill.issueIntro && <p>{bill.issueIntro}</p>}
                        {bill.issues.length > 0 && (
                            <ol>
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
                                            <ul>
                                                {issue.subItems.map((sub, j) => (
                                                    <li key={j}>{sub}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        )}
                        {bill.issueConclusion && <p>{bill.issueConclusion}</p>}
                    </div>
                )}

                {/* Recommendations Section */}
                {(bill.recommendations.length > 0 || bill.recommendationsIntro) && (
                    <div className="bill-recommendations-section">
                        <h2 className="bill-section-heading">RECOMMENDATIONS</h2>
                        {bill.recommendationsIntro && <p>{bill.recommendationsIntro}</p>}
                        {bill.recommendations.length > 0 && (
                            <ol>
                                {bill.recommendations.map((rec, i) => (
                                    <li key={i}>
                                        {rec.text}
                                        {rec.subItems.length > 0 && (
                                            <ul>
                                                {rec.subItems.map((sub, j) => (
                                                    <li key={j}>{sub}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default BillDetail;
