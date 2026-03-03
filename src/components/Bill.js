import React from 'react';
import { Link } from 'react-router-dom';
import './Bill.css';

const Bill = ({ bill }) => {
    return (
        <Link to={`/bill/${bill.id}`} className="bill-link" aria-label={`View memo for ${bill.title}`}>
            <div className="bill">

                {/* replace static image with actual bill image component later */}
                <div className="bill-info-component">
                    <img 
                    src={bill.imageUrl} 
                    alt={`${bill.title} info card`}
                    className="bill-info-image"
                    />
                </div>

                <div className="bill-summary">
                    <h3 className="summary-title">Summary</h3>
                    <div className="summary-content">
                    {bill.summary.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="summary-paragraph">{paragraph}</p>
                    ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Bill;
