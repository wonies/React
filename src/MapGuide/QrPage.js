import React from "react";
import LocSearch from "./LocSearch";
import AdvertiseQR from "../Fix/AdvertiseQR";
import DropDown from "./Dropdown";
import MapLocation from "./MapLocation";
import Guide from "./Guide";

function QrPage() {
  return (
    <div>
      <LocSearch />
      <AdvertiseQR />
      <DropDown />
      <MapLocation />
      <Guide />
    </div>
  );
}

export default QrPage;
