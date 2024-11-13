import React, { useEffect, useState, forwardRef } from 'react';
import { useParams } from 'react-dom-router';

const ToziChildren = forwardRef((props,ref) => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchToziChildrenData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/family/tozi_children');
        if (!response.ok) { 
          throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        setChildren(data);
      } catch (error) {
        console.error("Error fetching tozi_children data:", error);
      }
    };

    fetchToziChildrenData();
  }, []);

  return (

    <div>
      <div className="cards-container">
        {children.length > 0 ? (
          children.map((child, index) => (
            <div className="card" key={child._id} style={{ animationDelay: `${index * 0.2}s` }}>
              <img className="card-image" src={child.image} alt={child.name} />
              <h2 className="card-title">{child.name}</h2>
              <p className="card-text">Gender: {child.gender}</p>
              <p className="card-text">Deceased: {child.deceased ? "Yes" : "No"}</p>
            </div>
          ))
        ) : (
          <p>No children found.</p>
        )}
      </div>
    </div>
  );
});

export default ToziChildren;

