import React, { useState } from 'react'
import WastBin from "./assets/WASTE-BIN__ScaleMaxWidthWzEwMDBd.jpeg"

const skipData = [
    { id: 17933, size: 4, hireDays: 14, price: 278, vat: 20, allowedOnRoad:true, allowsHeavyWaste: true},
    { id: 17934, size: 6, hireDays: 14, price: 303, vat: 20, allowedOnRoad:true, allowsHeavyWaste: true},
    { id: 17935, size: 8, hireDays: 14, price: 374, vat: 20, allowedOnRoad:true, allowsHeavyWaste: true},
    { id: 17936, size: 10, hireDays: 14, price: 474, vat: 20, allowedOnRoad:false, allowsHeavyWaste: false},
    { id: 17937, size: 12, hireDays: 14, price: 524, vat: 20, allowedOnRoad:false, allowsHeavyWaste: false},
    { id: 17938, size: 14, hireDays: 14, price: 574, vat: 20, allowedOnRoad:false, allowsHeavyWaste: false},
    
]

const SkipSelection = () => {
  const [skips] = useState(skipData);
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <div className="skip-container">
      <h2>Choose Your Skip Size</h2>
      <h4>Select the skip size that best suits your needs</h4>
      <div className="skip-grid">
        {skips.map(skip => (
          <div
            key={skip.id}
            className={`skip-card${selectedSkip && selectedSkip.id === skip.id ? ' selected' : ''}`}>

             <img className="img" src={WastBin} alt="profile"></img>
            <h3>{skip.size} Yard Skip</h3>
            <p>Hire Period: {skip.hireDays} days</p>
            <p>Price: £{skip.price} (VAT {skip.vat}%)</p>
            <p>Allowed on Road: {skip.allowedOnRoad ? "✅ Yes" : "❌ No"}</p>
            <p>Allows Heavy Waste: {skip.allowsHeavyWaste ? "✅ Yes" : "❌ No"}</p>
            <button
              className="select-button"
              onClick={() => setSelectedSkip(skip)}
              disabled={selectedSkip && selectedSkip.id === skip.id}
            >
              {selectedSkip && selectedSkip.id === skip.id ? "Selected ✔" : "Select This Skip →"}
            </button>
          </div>
        ))}
      </div>

      {selectedSkip && (
        <div className="selected-skip">
          <h3>You selected the {selectedSkip.size}-yard skip</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginTop: "12px" }}>
            <button
              className="select-button"
              style={{ background: "#007bff" }}
              onClick={() => alert(`Previewing ${selectedSkip.size}-yard skip`)} >
              Preview
            </button>
            <button
              className="select-button"
              style={{ background: "#dc3545" }}
              onClick={() => setSelectedSkip(null)}>
              Clear Selection
            </button>
            <button
              className="select-button"
              style={{ background: "#28a745" }}
              onClick={() => alert(`Continuing with ${selectedSkip.size}-yard skip`)}>
              Continue &#8594;
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelection;