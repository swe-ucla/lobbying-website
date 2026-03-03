import React from 'react';
import { Link } from 'react-router-dom';
import BillWidget from '../BillWidget';
import './Bill.css';

const Bill = ({ bill }) => {
    return (
        <div className="bill">
            <div className="bill-info-component">
                <BillWidget
                    number={bill.number}
                    title={bill.title}
                    date={bill.date}
                    categories={bill.categories}
                    progressStep={bill.progressStep}
                />
            </div>

            <div className="bill-summary">
                <h3 className="summary-title">Summary</h3>
                <div className="summary-content">
                    <p className="summary-paragraph">{bill.summary}</p>
                </div>
                <Link to={`/bill/${bill.id}`} className="read-full-details">
                    Read Full Details →
                </Link>
            </div>
        </div>
    );
};

export default Bill;
