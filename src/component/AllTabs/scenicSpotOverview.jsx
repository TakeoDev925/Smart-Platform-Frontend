import React, { useState } from "react";
import SpinLogo from "../../component/SpinLogo";
import CameraView from "../CameraView";
// import { Map, Marker, ZoomControl, MapTypeControl } from 'react-bmapgl';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
import json from '../../data/scenicOverviewList.json';

const ScenicSpotOverview = () => {
  const [selectIndex, setSelectIndex] = useState(null);

  return (
    <div className="flex w-full h-full">
      <Map style={{ height: 500, width: 500 }} center={{lng: 116.402544, lat: 39.928216}} zoom="11">
        <Marker position={{lng: 116.402544, lat: 39.928216}} />
        <NavigationControl /> 
        <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
      </Map>
      <span>Dsd</span>
    </div>
  );
};
export default ScenicSpotOverview;

