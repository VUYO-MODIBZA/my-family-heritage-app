import React, { useEffect, useState, forwardRef } from 'react';

const LulamaChildren = forwardRef((props,ref) => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchLulamaChildrenData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/family/lulama_children');
        if (!response.ok) { 
          throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        setChildren(data);
      } catch (error) {
        console.error("Error fetching lulama_children data:", error);
      }
    };

    fetchLulamaChildrenData();
  }, []);

  return (
    <div ref={ref}>
      <div className="cards-container">
        <div className="card">
          <img
            className="card-image"
            src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1729168395/family-tree/Tozi_pic_dy0ukk.jpg"
            alt="Tozi"/>
          <h2 className="card-title">Lulama</h2>
          <p className="card-text">Gender: Female</p>
          <p className="card-text">Deceased: "No"</p>
        </div>
      </div>

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

export default LulamaChildren;
