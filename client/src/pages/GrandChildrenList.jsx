// src/pages/ChildrenList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const GrandChildrenList = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchMyChildrenData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/family/grand_children');
        const data = await response.json();
        setChildren(data);
      } catch (error) {
        console.error('Error fetching family data:', error);
      }
    };

    fetchMyChildrenData();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>My Grandchildren</h2>
      <div className="cards-container">
        {children.length > 0 ? (
          children.map((child) => (
            <div className="card" key={child._id}>
              <img className="card-image" src={child.image} alt={child.name} />
              <h2 className="card-title">{child.name}</h2>
              <p className="card-text">Gender: {child.gender}</p>
              <p className="card-text">Deceased: {child.deceased ? 'Yes' : 'No'}</p>  
              
             {/* Add dynamic links to navigate to their children */}
             {child.name === 'Nokhaya' && (
                <Link to={`/children/nokhaya_children`} className="card-link">
                  View Nokhaya's Children
                </Link>
              )}
              {child.name === 'Lulama' && (
                <Link to={`/children/lulama_children`} className="card-link">
                  View Lulama's Children
                </Link>
              )}
              {child.name === 'Mampo' && (
                <Link to={`/children/mampo_children`} className="card-link">
                  View Mampo's Children
                </Link>
              )}
              {child.name === 'Sonwabile' && (
                <Link to={`/children/sonwabile_children`} className="card-link">
                  View Sonwabile's Children
                </Link>
              )}
              {child.name === 'Mthunzi' && (
                <Link to={`/children/mthunzi_children`} className="card-link">
                  View Mthunzi's Children
                </Link>
              )}
              {child.name === 'Mncedi' && (
                <Link to={`/children/mncedi_children`} className="card-link">
                  View Mncedi's Children
                </Link>
              )}
              {child.name === 'Kholeka' && (
                <Link to={`/children/kholeka_children`} className="card-link">
                  View Kholeka's Children
                </Link>
              )}
              {child.name === 'Nontombzana' && (
                <Link to={`/children/nontombzana_children`} className="card-link">
                  View Nontombzana's Children
                </Link>
              )}
                {child.name === 'Vuyisile' && (
                <Link to={`/children/vuyisile_children`} className="card-link">
                  View Vuyisile's Children
                </Link>
              )}
              {child.name === 'Nomhle' && (
                <Link to={`/children/nomhle_children`} className="card-link">
                  View Nomhle's Children
                </Link>
              )}
              {child.name === 'Thobile' && (
                <Link to={`/children/thobile_children`} className="card-link">
                  View Thobile's Children
                </Link>
              )}
              {child.name === 'Liziwe' && (
                <Link to={`/children/liziwe_children`} className="card-link">
                  View Liziwe's Children
                </Link>
              )}
              {child.name === 'Lindelwa' && (
                <Link to={`/children/lindelwa_children`} className="card-link">
                  View Lindelwa's Children
                </Link>
              )}
              {child.name === 'Thandiwe' && (
                <Link to={`/children/thandiwe_children`} className="card-link">
                  View Thandiwe's Children
                </Link>
              )}
              {child.name === 'Phathiswa' && (
                <Link to={`/children/phathiswa_children`} className="card-link">
                  View Phathiswa's Children
                </Link>
              )}
              {child.name === 'Nqonqo' && (
                <Link to={`/children/nqonqo_children`} className="card-link">
                  View Nqonqo's Children
                </Link>
              )}
              {child.name === 'Mthetheleli' && (
                <Link to={`/children/mthetheleli_children`} className="card-link">
                  View Mthetheleli's Children
                </Link>
              )}
              {child.name === 'Nobuntu' && (
                <Link to={`/children/nobuntu_children`} className="card-link">
                  View Nobuntu's Children
                </Link>
              )}
              {child.name === 'Maponki' && (
                <Link to={`/children/maponki_children`} className="card-link">
                  View Maponki's Children
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

export default GrandChildrenList;

