import React, { useState } from 'react';
import './Reports.css';

const SalesReport = () => {
    const [reports, setReports] = useState([]);
    const [newReport, setNewReport] = useState('');

    const handleAddReport = () => {
        if (newReport.trim() !== '') {
            setReports([...reports, newReport]);
            setNewReport('');
        }
    };

    return (
        <div className="report-container">
            <h2>Sales Report</h2>
            <div className="report-box">
                {reports.length === 0 ? (
                    <p>No reports available.</p>
                ) : (
                    <ul>
                        {reports.map((report, index) => (
                            <li key={index} className="report-item">
                                <span>{report}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="add-report-container">
                <input 
                    type="text" 
                    value={newReport} 
                    onChange={(e) => setNewReport(e.target.value)} 
                    placeholder="Enter new report" 
                    className="report-input"
                />
                <button className="report-button" onClick={handleAddReport}>Add Report</button>
            </div>
        </div>
    );
};

export default SalesReport;
