import React from 'react';
import LocSearch from './LocSearch';
import Advertise from '../Fix/Advertise';
import DropDown from './Dropdown';
import MapLocation from './MapLocation';
import Guide from './Guide';

function QrPage() {
  return (
    <div>
      <LocSearch />
      <Advertise />
      <DropDown />
      <MapLocation />
      <Guide />
    </div>
  );
}

export default QrPage;
