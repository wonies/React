import React from 'react';
import '../style/MapGuide/LocSearch.css';

function LocSearch() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="search-menu">
          <img
            src="/icon/purple_btn.png"
            alt="search-menu"
            width="25"
            height="25"
          />
        </div>
        <div className="title">현재 위치는 힐스테이트 A동 1층</div>
        <div className="menu-icon">
          <img src="/icon/menubar.png" alt="menu-bar" width="30" height="30" />
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="찾는 곳을 입력해주세요" />
        <img
          src="/icon/readglass.png"
          alt="search-bar"
          width="30"
          height="30"
        />
      </div>
    </div>
  );
}

export default LocSearch;
