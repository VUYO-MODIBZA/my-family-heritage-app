// src/pages/ChildrenList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ChildrenList = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchMyChildrenData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/family/children');
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
      <h2 style={{ textAlign: 'center' }}>My Children</h2>
      <div className="cards-container">
        {children.length > 0 ? (
          children.map((child) => (
            <div className="card" key={child._id}>
              <img className="card-image" src={child.image} alt={child.name} />
              <h2 className="card-title">{child.name}</h2>
              <p className="card-text">Gender: {child.gender}</p>
              <p className="card-text">Deceased: {child.deceased ? 'Yes' : 'No'}</p>  
              
              {/* Add dynamic links to navigate to their children */}
              {child.name === 'Tozi' && (
                <Link to={`/children/tozi_children`} className="card-link">
                  View Tozi's Children
                </Link>
              )}
              {child.name === 'Stefano' && (
                <Link to={`/children/stefano_children`} className="card-link">
                  View Stefano's Children
                </Link>
              )}
                {child.name === 'Silas' && (
                <Link to={`/children/silas_children`} className="card-link">
                  View Silas's Children
                </Link>
              )}
              {child.name === 'Nikiwe' && (
                <Link to={`/children/nikiwe_children`} className="card-link">
                  View Nikiwe's Children
                </Link>
              )}
              <Link to="/children">Back to children</Link>
            </div>
          ))
        ) : (
          <p>No children found.</p>
        )}
      </div>
    </div>
  );
};

export default ChildrenList;





