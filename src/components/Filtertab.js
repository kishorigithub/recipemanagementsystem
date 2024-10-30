import React, { useState } from 'react';
import Socialicon from './Socialicons';
import Vegitariantab from './Vegitariantab';
import Quickeasy from './Quickeasy';
import Popular from './Popular';


const Filtertab = () => {
  const [activeTab, setActiveTab] = useState('VEGETARIAN');

  // Function to set the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'VEGETARIAN' ? 'active' : ''}`}
          onClick={() => handleTabClick('VEGETARIAN')}
        >
          VEGETARIAN
        </div>
        <div
          className={`tab ${activeTab === 'QUICK+EASY' ? 'active' : ''}`}
          onClick={() => handleTabClick('QUICK+EASY')}
        >
          QUICK+EASY
        </div>
        <div
          className={`tab ${activeTab === 'POPULAR' ? 'active' : ''}`}
          onClick={() => handleTabClick('POPULAR')}
        >
          POPULAR
        </div>
      </div>

      {/* Conditional rendering of content based on the active tab */}
      <div className="tab-content">
        {activeTab === 'VEGETARIAN' && <div><Vegitariantab/></div>}
        {activeTab === 'QUICK+EASY' && <div><Quickeasy/></div>}
        {activeTab === 'POPULAR' && <div><Popular/></div>}
      </div>
    </div>
  );
};

export default Filtertab;
