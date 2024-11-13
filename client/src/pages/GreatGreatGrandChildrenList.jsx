// src/pages/ChildrenList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const GreatGreatGrandChildrenList = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchMyChildrenData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/family/great_great_grandchildren');
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
      <h2 style={{ textAlign: 'center' }}>My Great-great-grandchildren</h2>
      <div className="cards-container">
        {children.length > 0 ? (
          children.map((child) => (
            <div className="card" key={child._id}>
              <img className="card-image" src={child.image} alt={child.name} />
              <h2 className="card-title">{child.name}</h2>
              <p className="card-text">Gender: {child.gender}</p>
              <p className="card-text">Deceased: {child.deceased ? 'Yes' : 'No'}</p>
  
              {child.name === 'Vuyiseka' && (
                <Link to={`/children/vuyiseka_children`} className="card-link">
                  View Vuyiseka's Children
                </Link>
              )}
              {child.name === 'Snethemba' && (
                <Link to={`/children/snethemba_children`} className="card-link">
                  View Snethemba's Children
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

export default GreatGreatGrandChildrenList;