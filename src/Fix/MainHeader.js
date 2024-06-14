import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Fix/MainHeader.css';
import { FaArrowLeft } from 'react-icons/fa'; // FaArrowLeft 아이콘 가져오기

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <>
      <div className="main_header">
        <FaArrowLeft className="back-button" onClick={handleBackClick} />{' '}
        {/* 뒤로 가기 버튼 추가 */}
        <div className="center-content">
          <Link to="/" onClick={closeMenu}>
            <img
              className="Rogo"
              src="../../public/img/미사로고1.png" // public 폴더의 파일은 /로 시작하는 경로를 사용
              alt="HillState"
            />
          </Link>
          {/* <span className="text hide">HillState Misa</span> */}
        </div>
        <img
          className="menubtn"
          src="../../public/img/menu.png" // public 폴더의 파일은 /로 시작하는 경로를 사용
          alt="Menu"
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && <MenuContent />}
    </>
  );
}

function MenuContent() {
  return (
    <div className="wrap-menu">
      <div className="wrap-menubar">
        <div className="menubar1">
          <Link to="/search">
            <h2>매장찾기</h2>
          </Link>
        </div>
        <div>
          <h2>주차안내</h2>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
