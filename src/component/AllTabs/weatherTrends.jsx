import React, { useState } from "react";
import Select from 'react-select';
import json from '../../data/weatherList.json';
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { Bar } from 'react-chartjs-2';

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses, pieArcClasses } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Bg from "../../assets/png/bg.png";
import SpinLogo from "../../component/SpinLogo";
import Line1 from "../../assets/png/line1_1.png";
import Line2 from "../../assets/png/line2_1.png";
import Icon1 from "../../assets/png/icon1.png";
import Icon2 from "../../assets/png/icon2.png";
import Icon3 from "../../assets/png/icon3.png";
import Icona from "../../assets/png/icona.png";
import Iconb from "../../assets/png/iconb.png";
import Iconbg from "../../assets/png/iconbg.png";
import Iconc from "../../assets/png/iconc.png";
import Icond from "../../assets/png/icond.png";
import Icone from "../../assets/png/icone.png";
import Iconf from "../../assets/png/iconf.png";
import NumberAvatar from "../numberAvatar";
import PercentAvatar from "../percentAvatar";
import WeatherIcon from "../../assets/png/weather.png";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
];

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];


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
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div class="flex flex-row w-full justify-between h-[900px]">
        <div class="flex flex-col w-1/3">
          <div class="w-full mb-6">
            <div class="flex p-6">
              <div class="flex  flex-col">
                <label class="flex text-white text-[18px] font-bold">天气趋势</label>
                <img
                  src={Line1}
                  class="w-[90px] h-[4px]"
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[380px] h-[13px] mt-[15px] -ml-0 "
                alt="line1"
              />
            </div>
            <div class="flex flex-col w-full pl-6 pr-20">
              <div class="flex flex-row items-center ">
                <div class="flex flex-row w-[140px] justify-between">
                  <label class="text-white">天气图标</label>
                  <img
                    src={WeatherIcon}
                    class="w-[30px] h-[30px] object-scale-down"
                    alt="weatherIcon"
                  />
                </div>
                <div class="flex flex-row w-[140px] justify-between ml-20">
                  <label class="text-white">湿度</label>
                  <label class="text-white">70 °F</label>
                </div>
              </div>
              <div class="flex flex-row items-center mt-4">
                <div class="flex flex-row w-[140px] justify-between">
                  <label class="text-white">实时温度</label>
                  <label class="text-white">92 %</label>
                </div>
                <div class="flex flex-row w-[140px] justify-between ml-20">
                  <label class="text-white">风向</label>
                  <label class="text-white">NNE</label>
                </div>
              </div>
              <div class="flex flex-row items-center mt-4">
                <div class="flex flex-row w-[140px] justify-between">
                  <label class="text-white">风级</label>
                  <label class="text-white">7.5 mph</label>
                </div>
                <div class="flex flex-row w-[140px] justify-between ml-20">
                  <label class="text-white">雨</label>
                  <label class="text-white">4.5</label>
                </div>
              </div>
              <div class="flex flex-row items-center mt-4">
                <div class="flex flex-row w-[140px] justify-between">
                  <label class="text-white">雪</label>
                  <label class="text-white">0</label>
                </div>
                <div class="flex flex-row w-[140px] justify-between ml-20">
                  <label class="text-white">降水机会</label>
                  <label class="text-white">91%</label>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mb-6 mr-40">
            <div class="flex p-6">
              <div class="flex  flex-col">
                <label class="flex text-white text-[18px] font-bold">近一年客流趋势</label>
                <img
                  src={Line1}
                  class="w-[150px] h-[4px]"
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[320px] h-[13px] mt-[15px] -ml-0"
                alt="line1"
              />
            </div>
            <div class="flex flex-col w-full pl-6 pr-10">
              <div class="flex flex-row">
                <NumberAvatar icon={Icona} value={1860} />
                <NumberAvatar class="ml-10" icon={Iconb} value={860} />
              </div>
              <div class="flex flex-row my-4">
                <NumberAvatar icon={Iconc} value={300} />
                <NumberAvatar class="ml-10" icon={Icond} value={240} />
              </div>
              <div class="flex flex-row">
                <NumberAvatar icon={Icone} value={1240} />
                <NumberAvatar class="ml-10" icon={Iconf} value={1991} />
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-1/3 items-center justify-center">
          <SpinLogo />
        </div>

        <div class="w-1/3">
          <div class="w-full mb-6 items-end">
            <div class="flex p-6 items-center justify-end">
              <div class="flex  flex-col">
                <label class="flex text-white text-[18px] font-bold">实时客流</label>
                <img
                  src={Line1}
                  class="w-[90px] h-[4px]"
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[380px] h-[10px] mt-[15px] -ml-0 "
                alt="line1"
              />
            </div>
            <div class="flex flex-col w-full px-6 items-end pr-10">
              <div class="flex flex-row justify-between w-[420px]">
                <PercentAvatar title="就诊人数" value={60} />
                <PercentAvatar title="触发次数" value={14} />
                <PercentAvatar title="触发卡数" value={33} />
              </div>
              <div class="flex flex-row justify-between w-[420px] mt-4">
                <PercentAvatar title="去重卡数" value={30} />
                <PercentAvatar title="报卡时间" value={84} />
                <PercentAvatar title="迟报漏报" value={28} />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full mb-6 items-end">
            <div class="flex p-6 items-center justify-end">
              <div class="flex  flex-col">
                <label class="flex text-white text-[18px] font-bold">出游目的地排行</label>
                <img
                  src={Line1}
                  class="w-[150px] h-[4px]"
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[320px] h-[10px] mt-[15px] -ml-0 "
                alt="line1"
              />
            </div>
            <div class="flex w-[520px] px-6 justify-end -mt-2">
              <div class="flex flex-col w-full ">
                <div class="flex flex-row justify-between border-b border-[#347eed] pb-2">
                  <label class="text-white w-1/3 text-left">发病统计</label>
                  <label class="text-white w-1/4 text-left">甲类</label>
                  <label class="text-white w-1/4 text-left">乙类</label>
                  <label class="text-white w-1/4 text-left">丙类</label>
                </div>
                <div class="flex flex-row justify-between border-b border-[#347eed] py-2">
                  <label class="text-white w-1/3 text-left">发病数（万）</label>
                  <div class="flex flex-row w-1/4 items-center">
                    <label class="flex text-white text-left">0.03</label>
                    <BsArrowDown color="#02deff" size={12} />
                    <label class="flex text-[#02deff] text-left text-[12px]">0.01%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center">
                    <label class="flex text-white text-left">163.00</label>
                    <BsArrowUp color="red" size={12} />
                    <label class="flex text-[red] text-left text-[12px]">8.6%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center">
                    <label class="flex text-white text-left">127.5</label>
                    <BsArrowUp color="red" size={12} />
                    <label class="flex text-[red] text-left text-[12px]">14.1%</label>
                  </div>
                </div>
                <div class="flex flex-row justify-between py-2">
                  <label class="text-white w-1/3 text-left">发病率（%）</label>
                  <div class="flex flex-row w-1/4 items-center">
                    <label class="flex text-white text-left">0.4</label>
                    <BsArrowDown color="#02deff" size={12} />
                    <label class="flex text-[#02deff] text-left text-[12px]">0.02%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center">
                    <label class="flex text-white text-left">100</label>
                    <BsArrowUp color="red" size={12} />
                    <label class="flex text-[red] text-left text-[12px]">2.4%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center">
                    <label class="flex text-white text-left">81.5</label>
                    <BsArrowUp color="red" size={12} />
                    <label class="flex text-[red] text-left text-[12px]">14.1%</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full mb-6 items-end">
            <div class="flex p-6 items-center justify-end">
              <div class="flex  flex-col">
                <label class="flex text-white text-[18px] font-bold">客流来源排名TOP5</label>
                <img
                  src={Line1}
                  class="w-[150px] h-[4px]"
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[320px] h-[10px] mt-[15px] -ml-0 "
                alt="line1"
              />
            </div>
            <div class="flex w-[620px] px-6 justify-end -mt-2">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: '北京', color: 'tomato' },
                      { id: 1, value: 15, label: '重庆' },
                      { id: 2, value: 20, label: '上海' },
                      { id: 3, value: 20, label: '天津' },
                      { id: 4, value: 20, label: '安庆' },
                    ],
                    innerRadius: 35,
                    outerRadius: 80,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 140,
                    cy: 100,
                    color: 'red'
                  },
                ]}
                sx={{
                  [`& .${pieArcClasses.faded}`]: {
                    fill: 'tomato',
                  },
                }}
                // colors={['red', 'blue', 'red', 'green', 'gray']}               
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>


      {/* <div class="flex flex-row w-full bg-yellow-200 justify-between h-[250px]">
        <div class="w-full bg-gray-200">
          sdfds4
        </div>
        <div class="w-full bg-blue-200">
          sdfds5
        </div>
        <div class="w-full bg-red-200">
          sdfds6
        </div>
      </div> */}
    </div>
  );
};
export default WeatherTrends;

