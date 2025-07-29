import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Curriculum.scss';

function Curriculum() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const pdfUrl = '/me/curriculum.pdf';

    const handleIframeLoad = () => {
        setLoading(false);
        setError('');
    };

    const handleIframeError = () => {
        setLoading(false);
        setError('Unable to load curriculum PDF.');
    };

    return (
        <div className="curriculum-container" id="curriculum">
            <div className="back-link">
                <Link to="/" className="back-to-home">← Back to Home</Link>
            </div>
            
            <h1>Curriculum Vitae</h1>

            <div className="pdf-viewer-container">
                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                        <p>Loading curriculum...</p>
                    </div>
                )}
                
                {error && (
                    <div className="error-state">
                        <div className="error-icon">⚠️</div>
                        <p>{error}</p>
                    </div>
                )}
                
                {!error && (
                    <div className="pdf-display">
                        <iframe
                            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=FitH`}
                            className="pdf-iframe"
                            title="Curriculum Vitae"
                            onLoad={handleIframeLoad}
                            onError={handleIframeError}
                        />
                    </div>
                )}
            </div>

            <div className="disclaimer">
                <p>Last updated as of: 29/07/2025</p>
            </div>
        </div>
    );
}

export default Curriculum;