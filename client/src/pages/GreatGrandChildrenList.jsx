
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const GreatGrandChildrenList = () => {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        const fetchMyGreatGrandChildrenData = async () => {
            try {
                const response = await fetch('http://localhost:5050/api/family/great_grandchildren');
                const data = await response.json();
                setChildren(data);
            } catch (error) {
                console.error("Error fetching family data:", error);
            }
        };

        fetchMyGreatGrandChildrenData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>My Great_grandchildren</h2>
            <div className="cards-container">
                {children.length > 0 ? (
                    children.map((child) => (
                        <div className="card" key={child._id}>
                            <img className="card-image" src={child.image} alt={child.name} />
                            <h2 className="card-title">{child.name}</h2>
                            <p className="card-text">Gender: {child.gender}</p>
                            <p className="card-text">Deceased: {child.deceased ? "Yes" : "No"}</p>
            {/* Add dynamic links to navigate to their children */}
              {child.name === 'Mlindeli' && (
                <Link to={`/children/mlindeli_children`} className="card-link">
                  View Mlindeli's Children
                </Link>
              )}
              {child.name === 'Ncomelo' && (
                <Link to={`/children/ncomelo_children`} className="card-link">
                  View Ncomelo's Children
                </Link>
              )}
                {child.name === 'Tholi' && (
                <Link to={`/children/tholi_children`} className="card-link">
                  View Tholi's Children
                </Link>
              )}
              {child.name === 'Nontombi' && (
                <Link to={`/children/nontombi_children`} className="card-link">
                  View Nontombi's Children
                </Link>
              )}
              {child.name === 'Siyanda' && (
                <Link to={`/children/siyanda_children`} className="card-link">
                  View Siyanda's Children
                </Link>
              )}
              {child.name === 'Nopasika' && (
                <Link to={`/children/nopasika_children`} className="card-link">
                  View Nopasika's Children
                </Link>
              )}
              {child.name === 'Zandile' && (
                <Link to={`/children/zandile_children`} className="card-link">
                  View Zandile's Children
                </Link>
              )}
                {child.name === 'Vuyiswa' && (
                <Link to={`/children/vuyiswa_children`} className="card-link">
                  View Vuyiswa's Children
                </Link>
              )}
              {child.name === 'Simphiwe' && (
                <Link to={`/children/simphiwe_children`} className="card-link">
                  View Simphiwe's Children
                </Link>
              )}
              {child.name === 'Buntu' && (
                <Link to={`/children/buntu_children`} className="card-link">
                  View Buntu's Children
                </Link>
              )}
              {child.name === 'Sandisiwe' && (
                <Link to={`/children/sandisiwe_children`} className="card-link">
                  View Sandisiwe's Children
                </Link>
              )}
            {child.name === 'Vuyokazi' && (
                <Link to={`/children/vuyokazi_children`} className="card-link">
                  View Vuyokazi's Children
                </Link>
              )} 
            {child.name === 'Xhanti' && (
                <Link to={`/children/xhanti_children`} className="card-link">
                  View Xhanti's Children
                </Link>
              )} 
            {child.name === 'Vukile' && (
                <Link to={`/children/vukile_children`} className="card-link">
                  View Vukile's Children
                </Link>
              )} 
            {child.name === 'Bongani' && (
                <Link to={`/children/bongani_children`} className="card-link">
                  View Bongani's Children
                </Link>
              )} 
            {child.name === 'Bonga' && (
                <Link to={`/children/bonga_children`} className="card-link">
                  View Bonga's Children
                </Link>
              )} 
            {child.name === 'Chumisa' && (
                <Link to={`/children/chumisa_children`} className="card-link">
                  View Chumisa's Children
                </Link>
              )} 
            {child.name === 'Bulumko' && (
                <Link to={`/children/bulumko_children`} className="card-link">
                  View Bulumko's Children
                </Link>
              )}
            {child.name === 'Khayalethu' && (
                <Link to={`/children/khayalethu_children`} className="card-link">
                  View Khayalethu's Children
                </Link>
              )} 
            {child.name === 'Nombongo' && (
                <Link to={`/children/nombongo_children`} className="card-link">
                  View Nombongo's Children
                </Link>
              )} 
            {child.name === 'Athenkosi' && (
                <Link to={`/children/athenkosi_children`} className="card-link">
                  View Athenkosi's Children
                </Link>
              )} 
            {child.name === 'Nowhiza' && (
                <Link to={`/children/nowhiza_children`} className="card-link">
                  View Nowhiza's Children
                </Link>
              )} 
            {child.name === 'Zukiswa' && (
                <Link to={`/children/zukiswa_children`} className="card-link">
                  View Zukiswa's Children
                </Link>
              )} 
            {child.name === 'Zoleka' && (
                <Link to={`/children/zoleka_children`} className="card-link">
                  View Zoleka's Children
                </Link>
              )} 
            {child.name === 'ThembaQ' && (
                <Link to={`/children/thembaq_children`} className="card-link">
                  View ThembaQ's Children
                </Link>
              )} 
            {child.name === 'Yanga' && (
                <Link to={`/children/yanga_children`} className="card-link">
                  View Yanga's Children
                </Link>
              )} 
           {child.name === 'Lusanda' && (
                <Link to={`/children/lusanda_children`} className="card-link">
                  View Lusanda's Children
                </Link>
              )} 
            {child.name === 'Siyambonga' && (
                <Link to={`/children/siyambonga_children`} className="card-link">
                  View Siyambonga's Children
                </Link>
              )} 
            {child.name === 'Amphiwe' && (
                <Link to={`/children/amphiwe_children`} className="card-link">
                  View Amphiwe's Children
                </Link>
              )} 
            {child.name === 'Iviwe' && (
                <Link to={`/children/iviwe_children`} className="card-link">
                  View Iviwe's Children
                </Link>
              )} 
            {child.name === 'Lelethu' && (
                <Link to={`/children/lelethu_children`} className="card-link">
                  View Lelethu's Children
                </Link>
              )} 
            {child.name === 'Lubabalo' && (
                <Link to={`/children/lubabalo_children`} className="card-link">
                  View Lubabalo's Children
                </Link>
              )} 
            {child.name === 'Nozuko' && (
                <Link to={`/children/nozuko_children`} className="card-link">
                  View Nozuko's Children
                </Link>
              )} 
            {child.name === 'Nanziwe' && (
                <Link to={`/children/nanziwe_children`} className="card-link">
                  View Nanziwe's Children
                </Link>
              )} 
            {child.name === 'Themba' && (
                <Link to={`/children/themba_children`} className="card-link">
                  View Themba's Children
                </Link>
              )}
            </div>
                    ))
                ) : (
                    <p>No children found.</p>
                )}
            </div>
        </div>
    );
};

export default GreatGrandChildrenList;
