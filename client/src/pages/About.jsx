import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <p>Selina Phetshiwe "Maxaba" Mtimba was the daughter of Nondlala "Xhayiya" Twalo. She was born on May 25, 1908, in the village of Upper Didimana, located in the Hewu district in the Eastern Cape Province of South Africa.</p>
                <p>She married Chitha Mtimba, and together they were blessed with four children - Tozi Lizzie Ningiza, Stephen Mtimba, Silas Mtimba and Nikiwe Ndidi</p>
            </div>
            <div className="about-page-cta">
            <p>Discover more detailed information about Selina Phetshiwe "Maxaba" Mtimba's family history.</p>
            <Link className="link-button" to="/children">Explore the Lineage</Link>
            </div>
        </div>
    );
}