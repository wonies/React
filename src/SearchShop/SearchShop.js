import React from 'react';
import 'src/style/SearchShop/SearchShop.css';
import MainHeader from 'src/Fix/MainHeader.js';
import MainFooter from 'src/Fix/MainFooter.js';
import Banner from 'src/Fix/MenuOpen.js';
import Ad from 'src/Fix/Advertise.js';
import hillstateImage from '/img/hillstateA1.svg'; // 경로를 실제 파일 위치로 수정
import blogImage from '/img/blog.png'; // 블로그 이미지 파일 import

function searchshop() {
  return (
    <div>
      <MainHeader />
      <Banner />
      <Ad />
      <div className="Changefont">
        <p>현재 계신곳은 힐스테이트 A동 1층입니다.</p>
        <p>91MiSA 는 힐스테이트 B동 1층에 있습니다.</p>
      </div>
      <div className="ImageContainer">
        <img src={hillstateImage} alt="Hillstate" />
      </div>
      <div className="BlogLink">
        <a
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="HomepageLink">
          <img src={blogImage} alt="Blog" className="HomepageIcon" />
          <span className="BlogText">블로그 바로가기</span>
        </a>
      </div>
      <MainFooter />
    </div>
  );
}

export default searchshop;
