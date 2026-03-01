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
            <div>
                <NavigationBar />
                <div className="bd-content">
                    <h1>Bill not found.</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="bd-page">
            <NavigationBar />

            {/* Hero Section */}
            <section className="bd-hero">
                <Link to="/bill_gallery" className="bd-back-link">
                    &larr; Back to Impact Gallery
                </Link>
                <h1 className="bd-hero-title">
                    {bill.name} ({bill.billNumber})
                </h1>

                <div className="bd-hero-info">
                    {bill.leadAuthor && (
                        <div className="bd-info-col">
                            <span className="bd-info-label">Lead Author</span>
                            <span className="bd-info-value">{bill.leadAuthor}</span>
                        </div>
                    )}
                    {bill.coAuthors && (
                        <div className="bd-info-col">
                            <span className="bd-info-label">Co-Authors</span>
                            <span className="bd-info-value">{bill.coAuthors}</span>
                        </div>
                    )}
                    {bill.status && (
                        <div className="bd-info-col">
                            <span className="bd-info-label">Status</span>
                            <span className="bd-info-value">{bill.status}</span>
                        </div>
                    )}
                </div>
            </section>

            {/* Main Content */}
            <div className="bd-content">
                <aside className="bd-sidebar">
                    <BillWidget
                        number={bill.billNumber}
                        title={bill.name}
                        date={bill.year.toString()}
                        categories={bill.categories}
                        status="Committee"
                    />
                    {bill.legiscanLink && (
                        <a
                            href={bill.legiscanLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bd-congress-link"
                        >
                            View at Congress.gov
                        </a>
                    )}
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

                    {/* Contact */}
                    {bill.contact && (
                        <section className="bd-section">
                            <h2 className="bd-section-title">Contact Us</h2>
                            <p>UCLA Society of Women Engineers (SWE) Lobbying Committee</p>
                            <p><a href={`mailto:${bill.contact.email}`}>{bill.contact.email}</a></p>
                            {bill.contact.names.map((name, i) => (
                                <p key={i}>{name}</p>
                            ))}
                        </section>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default BillDetail;
