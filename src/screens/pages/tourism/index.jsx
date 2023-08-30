import React, { useState } from "react"
import Header from "../../../component/Header";
import WeatherTrends from "../../../component/AllTabs/weatherTrends";
import SecondTab from "../../../component/AllTabs/secondTab";

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Bg from "../../../assets/png/bg.png";
import SpinLogo from "../../../component/SpinLogo";
import Line1 from "../../../assets/png/line1_1.png";
import Line2 from "../../../assets/png/line2.png";
import ScenicSpotOverview from "../../../component/AllTabs/scenicSpotOverview";
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';

function Tourism() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  const showTabView = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <WeatherTrends/>;
      case 6:
        return <ScenicSpotOverview/>;
      default:
        return <SecondTab/>;;
    }
  }
  
  return (
    <div class="w-full h-full">
      <img
        src={Bg}
        class="w-full h-full"
        alt="logo"
      />
      <div class="flex flex-col absolute top-0 left-0 w-full h-full">
        <Header title="智慧旅游"/>
        <div class="flex w-full mt-[40px] px-10 items-center justify-between">
          <div class="flex w-1/3 px-10 items-center justify-between">
            <button class={`text-white text-[15px] ${tabIndex === 0 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(0)}>全域客流</button>
            <button class={`text-white text-[15px] ${tabIndex === 1 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(1)}>游客画像</button>
            <button class={`text-white text-[15px] ${tabIndex === 2 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(2)}>舆情专题</button>
            <button class={`text-white text-[15px] ${tabIndex === 3 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(3)}>旅游产品专题</button>
          </div>
          <div class="flex w-1/3 px-10 items-center justify-between">
            <button class={`text-white text-[15px] ${tabIndex === 4 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(4)}>经营专题</button>
            <button class={`text-white text-[15px] ${tabIndex === 5 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(5)}>消费专题</button>
            <button class={`text-white text-[15px] ${tabIndex === 6 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(6)}>景区概况</button>
            <button class={`text-white text-[15px] ${tabIndex === 7 ? "opacity-100" : "opacity-30"}`} onClick={() => handleChangeIndex(7)}>文博数据监测</button>
          </div>
        </div>
        <div class="flex w-full mt-4">
          {showTabView(tabIndex)}     
        </div>
      </div>
    </div>
  );
}



export default Tourism;

