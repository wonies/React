import React from 'react';
import Banner from 'src/Fix/MenuOpen.js';
import Ad from 'src/Fix/Advertise.js';
import NaverMap from 'src/ParkPage/NaverMap.js';
import ParkingDetail from 'src/ParkPage/ParkingDetail.js';
import MainHeader from 'src/Fix/MainHeader.js';

function Parking() {
  return (
    <div>
      <MainHeader />
      <Banner />
      <Ad />
      <NaverMap latitude={37.5637} longitude={127.19113} />
      <ParkingDetail />
    </div>
  );
}

export default Parking;
