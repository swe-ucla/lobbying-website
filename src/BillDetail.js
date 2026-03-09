import React from "react";
import { useParams, Link } from "react-router-dom";
import './BillDetail.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import BillWidget from './BillWidget';
import billData from './data/billData';

function BillDetail() {
    const { id } = useParams();
    const bill = billData.find(b => b.id === id);

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
                <h1 className="bill-hero-title">{bill.name} ({bill.billNumber})</h1>
                {(bill.leadAuthor || bill.coAuthors || bill.status) && (
                    <div className="bill-hero-info">
                        {bill.leadAuthor && (
                            <div className="bill-hero-info-col">
                                <p className="bill-hero-info-label">Lead Author</p>
                                <p className="bill-hero-info-value">{bill.leadAuthor}</p>
                            </div>
                        )}
                        {bill.coAuthors && (
                            <div className="bill-hero-info-col">
                                <p className="bill-hero-info-label">Co-Authors</p>
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
                            <h2 className="bd-section-title">Background</h2>
                            {bill.background.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </section>
                    )}

                    {/* Issue */}
                    {(bill.issues.length > 0 || bill.issueIntro) && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">Issue</h2>
                            {bill.issueIntro && bill.issueIntro.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
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
                        </section>
                    )}

                    {/* Recommendations */}
                    {(bill.recommendations.length > 0 || bill.recommendationsIntro) && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">Recommendations</h2>
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
                        </section>
                    )}

                    {/* Significance */}
                    {bill.significance && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">Significance to SWE@UCLA</h2>
                            {bill.significance.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </section>
                    )}

                    {/* Credit */}
                    {bill.contact && (
                        <section className="bd-section bd-credit">
                            <h2 className="bd-section-title">Credit</h2>
                            <div className="bd-credit-names">
                                {bill.contact.names.map((name, i) => (
                                    <span key={i} className="bd-credit-chip">{name}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default BillDetail;
