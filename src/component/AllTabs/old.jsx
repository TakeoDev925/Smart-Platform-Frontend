import React, { useState } from "react";
import Select from 'react-select';
import json from '../data/weatherList.json';
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const chartSetting = {
  yAxis: [
    {
      label: '(名)',
    },
  ],
  width: 750,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 5px)',
    },
  },
};

const dataset = [
  {
    dongchang: 5900,
    erdaojiang: 5700,
    meihekou: 8600,
    jian: 2100,
    tonghua: 3100,
    month: '一月',
  },
  {
    dongchang: 7000,
    erdaojiang: 5200,
    meihekou: 7800,
    jian: 9800,
    tonghua: 4100,
    month: '二月',
  },
  {
    dongchang: 4700,
    erdaojiang: 5300,
    meihekou: 1060,
    jian: 4100,
    tonghua: 7500,
    month: '三月',
  },
  {
    dongchang: 5400,
    erdaojiang: 6600,
    meihekou: 9200,
    jian: 7300,
    tonghua: 3100,
    month: '四月',
  },
  {
    dongchang: 5700,
    erdaojiang: 6900,
    meihekou: 9200,
    jian: 9900,
    tonghua: 8100,
    month: '五月',
  },
  {
    dongchang: 6000,
    erdaojiang: 6300,
    meihekou: 10300,
    jian: 12400,
    tonghua: 3100,
    month: '六月',
  },
  {
    dongchang: 5900,
    erdaojiang: 6000,
    meihekou: 10500,
    jian: 3190,
    tonghua: 8100,
    month: '七月',
  },
  {
    dongchang: 6500,
    erdaojiang: 6000,
    meihekou: 10600,
    jian: 2490,
    tonghua: 3333,
    month: '八月',
  },
  {
    dongchang: 5100,
    erdaojiang: 5100,
    meihekou: 9500,
    jian: 13100,
    tonghua: 3100,
    month: '九月',
  },
  {
    dongchang: 6000,
    erdaojiang: 6500,
    meihekou: 9700,
    jian: 5500,
    tonghua: 3100,
    month: '十月',
  },
  {
    dongchang: 6700,
    erdaojiang: 6400,
    meihekou: 7600,
    jian: 4800,
    tonghua: 3100,
    month: '十一月',
  },
  {
    dongchang: 6100,
    erdaojiang: 7000,
    meihekou: 10300,
    jian: 2500,
    tonghua: 5100,
    month: '十二月',
  },
];

const valueFormatter = (value) => `${value}名`;

const getArcLabel = (params) => {
  return `${params.value}名`;
};

const WeatherTrends = () => {
  const [currentDistrict, setCurrentDistrict] = useState(null);
  const [currentSubDistrict, setCurrentSubDistrict] = useState(null);

  const showWeatherIcon = (val) => {
    switch (val) {
      case "cloudy":
        return <TiWeatherCloudy />
      case "downpour":
        return <TiWeatherDownpour />
      case "sunny":
        return <TiWeatherSunny />
      case "partlysun":
        return <TiWeatherPartlySunny />
      case "snow":
        return <TiWeatherSnow />
      default:
        break;
    }
  }

  return (
    <div className="flex align-middle justify-center">
      <div class="flex flex-row w-full justify-between h-[600px]">
            <div class="w-full bg-green-200">
              <div class="flex bg-red-400 p-6">
                <div class="flex  flex-col">
                  <label class="flex text-white">天气趋势</label>
                  <img
                    src={Line1}
                    class="w-[80px] h-[4px]"
                    alt="line1"
                  />
                </div>
                <img
                  src={Line2}
                  class="w-[450px] h-[10px] mt-[15px] -ml-2 "
                  alt="line1"
                />
              </div>
            </div>
            <div class="flex w-full items-center justify-center">
              <SpinLogo />
            </div>
            <div class="w-full bg-green-200">
              sdfds3
            </div>
          </div>
          <div class="flex flex-row w-full bg-yellow-200 justify-between h-[250px]">
            <div class="w-full bg-gray-200">
              sdfds4
            </div>
            <div class="w-full bg-blue-200">
              sdfds5
            </div>
            <div class="w-full bg-red-200">
              sdfds6
            </div>
          </div>
      
    </div>
  );
};
export default WeatherTrends;

