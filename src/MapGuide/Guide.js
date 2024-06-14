import React, { useState } from 'react';
import '../style/MapGuide/Guide.css';

function Guide() {
  const [activeSection, setActiveSection] = useState('facility');
  const facilityItems = ['화장실', '엘레베이터', '에스컬레이터'];
  const storeItems = ['91', 'Ninety One', '쥬씨', '용용선생'];

  return (
    <div className="guide-container">
      <div className="title-row">
        <div
          className={`facility-title ${
            activeSection === 'facility' ? 'active' : 'inactive'
          }`}
          onClick={() => setActiveSection('facility')}>
          편의시설
        </div>
        <div
          className={`guide-title ${
            activeSection === 'guide' ? 'active' : 'inactive'
          }`}
          onClick={() => setActiveSection('guide')}>
          매장안내
        </div>
      </div>
      <div className="content-row">
        {activeSection === 'facility' && (
          <FacilityContent items={facilityItems} />
        )}
        {activeSection === 'guide' && <FacilityContent items={storeItems} />}
      </div>
    </div>
  );
}

function FacilityContent(props) {
  return (
    <div className="facility-content">
      {props.items.map((item, index) => (
        <div className="facility-item" key={index}>
          {item}
          <span className="logospace">
            <img src="/icon/locpin.png" alt="loc" width="30" height="20" />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Guide;
