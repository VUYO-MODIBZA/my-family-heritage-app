// src/pages/ChildDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChildDetails = () => {
  const { name_children } = useParams(); // Extract the 'name_children' parameter from the URL
  const [children, setChildren] = useState([]);

  useEffect(() => {
    if (!name_children) {
      console.error('Name parameter is missing.');
      return; // Exit early if `name_children` is not available
    }

    const fetchChildrenData = async () => {
      try {
        const response = await fetch(`http://localhost:5050/api/family/${name_children}`);
        if (!response.ok) {
          throw new Error('Error fetching children data');
        }
        const data = await response.json();
        setChildren(data);
      } catch (error) {
        console.error('Error fetching children data:', error);
      }
    };

    fetchChildrenData();
  }, [name_children]); // Run whenever 'name_children' changes

  if (!name_children) {
    return <div>Error: Name parameter is missing or incorrect.</div>;
  }

  return (
    <div>
      <h2>{name_children.replace('_', ' ').toUpperCase()}</h2>
      <div className="cards-container">
        {children.length > 0 ? (
          children.map((child, index) => (
            <div className="card" key={child._id} style={{ animationDelay: `${index * 0.2}s` }}>
              <img className="card-image" src={child.image} alt={child.name} />
              <h2 className="card-title">{child.name}</h2>
              <p className="card-text">Gender: {child.gender}</p>
              <p className="card-text">Deceased: {child.deceased ? 'Yes' : 'No'}</p>
            </div>
          ))
        ) : (
          <p>No children found for {name_children.replace('_', ' ').toUpperCase()}.</p>
        )}
      </div>
    </div>
  );
};

export default ChildDetails;

