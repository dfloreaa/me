import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Publications.scss';

const publications = [
    {
        title: "Data Distributional Properties As Inductive Bias for Systematic Generalization",
        authors: "Felipe del Rio, Alain Raymond-Saez, Daniel Florea, Rodrigo Toro Icarte, Julio Hurtado, Cristian B. Calderon, Alvaro Soto",
        venue: "CVPR 2025",
        year: "2025",
        link: "https://openaccess.thecvf.com/content/CVPR2025/papers/del_Rio_Data_Distributional_Properties_As_Inductive_Bias_for_Systematic_Generalization_CVPR_2025_paper.pdf"
    },
    {
        title: "PUC Chile team at TBT Task: Diagnosis of Tuberculosis Type using segmented CT scans",
        authors: "José Miguel Quintana, Daniel Florea, Ria Deane, Denis Parra, Pablo Pino, Pablo Messina, Hans Löbel",
        venue: "CLEF 2021",
        year: "2021",
        link: "https://ceur-ws.org/Vol-2936/paper-112.pdf"
    }
];

function Publications() {
    return (
        <div className="container" id="publications">
            <div className="publications-container">
                <div className="publications-header">
                    <h1>Publications</h1>
                    <p className="scholar-link">
                        See also my <a href="https://scholar.google.com/citations?user=PCLRoFgAAAAJ&hl" target="_blank" rel="noopener noreferrer">Scholar</a> profile
                    </p>
                </div>
                
                <div className="publications-list">
                    {publications.map((pub, index) => (
                        <div key={index} className="publication-item">
                            <div className="publication-content">
                                <FontAwesomeIcon icon={faFileText} className="doc-icon" />
                                
                                <div className="publication-details">
                                    <div className="content-line">
                                        <span className="authors">
                                            {pub.authors.split('Daniel Florea').map((part, i, arr) => (
                                                <span key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && <strong>Daniel Florea</strong>}
                                                </span>
                                            ))}
                                        </span>
                                        <span className="year"> ({pub.year})</span>
                                        <span className="title-separator">. </span>
                                        <a 
                                            href={pub.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="publication-title-link"
                                        >
                                            {pub.title}
                                        </a>
                                        <span className="title-separator">. </span>
                                        <span className="venue">{pub.venue}.</span>
                                    </div>
                                    
                                    <div className="link-line">
                                        <a 
                                            href={pub.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-link-button"
                                        >
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
                                            Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Publications;