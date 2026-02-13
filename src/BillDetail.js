import React from "react";
import { useParams } from "react-router-dom";
import './BillDetail.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import billData from './data/billData';

function BillDetail() {
    const { id } = useParams();
    const bill = billData.find(b => b.id === id);

    if (!bill) {
        return (
            <div>
                <Header />
                <NavigationBar />
                <div className="bill-detail-page">
                    <h1 className="bill-detail-title">Bill not found.</h1>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <NavigationBar />

            <div className="bill-detail-page">
                <h1 className="bill-detail-title">{bill.title}</h1>

                {/* Author / Status Info Box */}
                <div className="bill-info-box">
                    <p><strong>Lead Author:</strong> {bill.leadAuthor}</p>
                    <p><strong>Co-Authors:</strong> {bill.coAuthors}</p>
                    <p>
                        <strong>Status <em>[from latest history action, legiscan]</em>:</strong> {bill.status}
                    </p>
                </div>

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

            {/* Footer Banner */}
            <div className="bill-footer-banner">
                <p>———— <em>To invest in engineering is to invest in our students, our future.</em> ————</p>
            </div>
        </div>
    );
}

export default BillDetail;
