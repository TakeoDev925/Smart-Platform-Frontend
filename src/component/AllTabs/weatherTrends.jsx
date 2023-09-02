import React from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import SpinLogo from "../../component/SpinLogo";
import Line1 from "../../assets/png/line1_1.png";
import Line2 from "../../assets/png/line2_1.png";
import Icona from "../../assets/png/icona.png";
import Iconc from "../../assets/png/iconc.png";
import Icone from "../../assets/png/icone.png";
import Iconf from "../../assets/png/iconf.png";
import NumberAvatar from "../numberAvatar";
import PercentAvatar from "../percentAvatar";
import WeatherIcon from "../../assets/png/weather.png";
import styles from './styles'

const chartSetting = {
  yAxis: [
    {
      label: '(名)',
    },
  ],
  width: 500,
  height: 300,
  margin: {
    top: 50,
  },
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 15px)',
      color: 'yellow'
    },
    [`.${axisClasses.bottom} .${axisClasses.stroke}`]: {
      transform: 'translate(0px, 5px)',
      color: 'red'
    },
  },
  viewBox: {
    width: 5
  }
};

const dataset = [
  {
    shanghai: 5900,
    erdaojiang: 5700,
    meihekou: 8600,
    jian: 2100,
    tonghua: 3100,
    month: '1月',
  },
  {
    shanghai: 7000,
    erdaojiang: 5200,
    meihekou: 7800,
    jian: 9800,
    tonghua: 4100,
    month: '2月',
  },
  {
    shanghai: 4700,
    erdaojiang: 5300,
    meihekou: 1060,
    jian: 4100,
    tonghua: 7500,
    month: '3月',
  },
  {
    shanghai: 5400,
    erdaojiang: 6600,
    meihekou: 9200,
    jian: 7300,
    tonghua: 3100,
    month: '4月',
  },
  {
    shanghai: 5700,
    erdaojiang: 6900,
    meihekou: 9200,
    jian: 9900,
    tonghua: 8100,
    month: '5月',
  },
  {
    shanghai: 6000,
    erdaojiang: 6300,
    meihekou: 10300,
    jian: 12400,
    tonghua: 3100,
    month: '6月',
  },
  {
    shanghai: 5900,
    erdaojiang: 6000,
    meihekou: 10500,
    jian: 3190,
    tonghua: 8100,
    month: '7月',
  },
  {
    shanghai: 6500,
    erdaojiang: 6000,
    meihekou: 10600,
    jian: 2490,
    tonghua: 3333,
    month: '8月',
  },
  {
    shanghai: 5100,
    erdaojiang: 5100,
    meihekou: 9500,
    jian: 13100,
    tonghua: 3100,
    month: '9月',
  },
  {
    shanghai: 6000,
    erdaojiang: 6500,
    meihekou: 9700,
    jian: 5500,
    tonghua: 3100,
    month: '10月',
  },
  {
    shanghai: 6700,
    erdaojiang: 6400,
    meihekou: 7600,
    jian: 4800,
    tonghua: 3100,
    month: '11月',
  },
  {
    shanghai: 6100,
    erdaojiang: 7000,
    meihekou: 10300,
    jian: 2500,
    tonghua: 5100,
    month: '12月',
  },
];

const valueFormatter = (value) => `${value}人`;

const WeatherTrends = () => {
  return (
    <div style={styles.layout}>
      {/* <div class="flex flex-row w-full justify-between h-[900px]"> */}
        <div style={styles.container1}>
          <div style={styles.itemWrap2}>
            <div style={styles.subTitleWrapView1}>
              <div style={styles.subTitleLineWrapView1}>
                <label style={styles.subTitleLineWrapLabel1}>天气趋势</label>
                <img
                  src={Line1}
                  style={styles.subTitleLineWrapImage1}
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                style={styles.subTitleLineWrapImage2}
                alt="line1"
              />
            </div>
            <div style={styles.subTitleWrapView2}>
              <div style={styles.subWeatherCateogryItemView1}>
                <div style={styles.subWeatherCateogryItem1}>
                  <label style={{color: 'white'}}>天气图标</label>
                  <img
                    src={WeatherIcon}
                    style={styles.subWeatherCateogryItemWeatherIcon}
                    alt="weatherIcon"
                  />
                </div>
                <div  style={styles.subWeatherCateogryItem2}>
                  <label style={{color: 'white'}}>湿度</label>
                  <label style={{color: 'white'}}>70 °F</label>
                </div>
              </div>
              <div style={styles.subWeatherCateogryItemView2}>
                <div style={styles.subWeatherCateogryItem1}>
                  <label style={{color: 'white'}}>实时温度</label>
                  <label style={{color: 'white'}}>92 %</label>
                </div>
                <div style={styles.subWeatherCateogryItem2}>
                  <label style={{color: 'white'}}>风向</label>
                  <label style={{color: 'white'}}>NNE</label>
                </div>
              </div>
              <div style={styles.subWeatherCateogryItemView2}>
                <div style={styles.subWeatherCateogryItem1}>
                  <label style={{color: 'white'}}>风级</label>
                  <label style={{color: 'white'}}>7.5 mph</label>
                </div>
                <div style={styles.subWeatherCateogryItem2}>
                  <label style={{color: 'white'}}>雨</label>
                  <label style={{color: 'white'}}>4.5</label>
                </div>
              </div>
              <div style={styles.subWeatherCateogryItemView2}>
                <div style={styles.subWeatherCateogryItem1}>
                  <label style={{color: 'white'}}>雪</label>
                  <label style={{color: 'white'}}>0</label>
                </div>
                <div style={styles.subWeatherCateogryItem2}>
                  <label style={{color: 'white'}}>降水机会</label>
                  <label style={{color: 'white'}}>91%</label>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mb-6 mr-40" style={styles.itemWrap2}>
            <div class="flex p-6" style={styles.subTitleWrapView1}>
              <div class="flex  flex-col" style={styles.subTitleLineWrapView1}>
                <label style={styles.subTitleLineWrapLabel1}>游客来访方式</label>
                <img
                  src={Line1}
                  style={{width: 130, height: 4}}
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                style={{width: 340, height: 13, marginTop: 12}}
                alt="line1"
              />
            </div>
            <div class="flex flex-col w-full pl-6 pr-10" style={styles.subTitleWrapView3}>
              <div class="flex flex-row" style={{flexDirection: 'row', display: 'flex'}}>
                <NumberAvatar icon={Icona} value={18600} />
                <NumberAvatar class="ml-10" icon={Iconf} value={8600} />
              </div>
              <div class="flex flex-row my-4" style={{display: 'flex', flexDirection: 'row', marginTop: 16,}}>
                <NumberAvatar icon={Iconc} value={3000} />
                <NumberAvatar class="ml-10" icon={Icone} value={2400} />
              </div>
            </div>
          </div>
          <div class="w-full mb-6 mr-40" style={styles.itemWrap2}> 
            <div class="flex p-6" style={styles.subTitleWrapView1}>
              <div class="flex  flex-col" style={styles.subTitleLineWrapView1}>
                <label style={styles.subTitleLineWrapLabel1}>近一年客流趋势</label>
                <img
                  src={Line1}
                  class="w-[150px] h-[4px]"
                  style={{width: 150, height: 4}}
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[320px] h-[13px] mt-[15px] -ml-0"
                style={{width: 320, height: 13, marginTop: 12}}
                alt="line1"
              />
            </div>
            <div class="flex flex-col w-full pl-6 pr-10" style={styles.subTitleWrapView3}>
              <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                  { dataKey: 'shanghai', label: '上海', valueFormatter, color: '#19ffe9' },
                ]}
                {...chartSetting}
              />
            </div>
          </div>
        </div>
        <div class="flex w-1/3 items-center justify-center" style={styles.container2}>
          <SpinLogo />
        </div>

        <div class="w-1/3" style={styles.container1}>
          <div class="w-full mb-6 items-end" style={styles.itemWrap3}>
            <div class="flex p-6 items-center justify-end" style={styles.subTitleWrapView1}>
              <div class="flex  flex-col" style={styles.subTitleLineWrapView1}>
                <label class="flex text-white text-[18px] font-bold" style={styles.subTitleLineWrapLabel1}>实时客流</label>
                <img
                  src={Line1}
                  class="w-[90px] h-[4px]"
                  style={{width: 90, height: 4}}
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[380px] h-[10px] mt-[15px] -ml-0 "
                style={{width: 380, height: 10, marginTop: 15,}}
                alt="line1"
              />
            </div>
            <div class="flex flex-col w-full px-6 items-end pr-10" style={styles.subWeatherCateogryItemView3}>
              <div class="flex flex-row justify-between w-[420px]" style={styles.subWeatherCateogryItemSubView1}>
                <PercentAvatar title="客流指数" value={60} />
                <PercentAvatar title="比较平日" value={14} />
                <PercentAvatar title="平均速度" value={33} />
              </div>
              <div class="flex flex-row justify-between w-[420px] mt-4" style={styles.subWeatherCateogryItemSubView2}>
                <PercentAvatar title="拥堵里程" value={30} />
                <PercentAvatar title="来往客流" value={84} />
                <PercentAvatar title="规划人流" value={28} />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full mb-6 items-end" style={styles.itemWrap3}>
            <div class="flex p-6 items-center justify-end" style={styles.subTitleWrapView1}>
              <div class="flex  flex-col" style={styles.subTitleLineWrapView1}>
                <label class="flex text-white text-[18px] font-bold" style={styles.subTitleLineWrapLabel1}>出游目的地排行</label>
                <img
                  src={Line1}
                  class="w-[150px] h-[4px]"
                  style={{width: 150, height: 4}}
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[320px] h-[10px] mt-[15px] -ml-0 "
                style={{width: 320, height: 10, marginTop: 15}}
                alt="line1"
              />
            </div>
            <div class="flex w-[520px] px-6 justify-end -mt-2" style={styles.subWeatherCateogryItemView4}>
              <div class="flex flex-col w-full " style={styles.subWeatherCateogryItemSubView3}>
                <div class="flex flex-row justify-between border-b border-[#347eed] pb-2" style={styles.subWeatherCateogryTableItemSubView1}>
                  <label class="text-white w-1/3 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle1}>目的地</label>
                  <label class="text-white w-1/4 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle2}>人数（万）</label>
                  <label class="text-white w-1/4 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle2}>地市</label>
                  <label class="text-white w-1/4 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle2}>省级</label>
                </div>
                <div class="flex flex-row justify-between border-b border-[#347eed] py-2" style={styles.subWeatherCateogryTableItemSubView1}>
                  <label class="text-white w-1/3 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle1}>张家界张家界</label>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">12.3</label>
                    <BsArrowUp color="red" size={12} />
                    <label class="flex text-[red] text-left text-[12px]" style={styles.smallPercentValueUpText}>0.1%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">張家界市</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">湖南省</label>
                  </div>
                </div>
                <div class="flex flex-row justify-between border-b border-[#347eed] py-2" style={styles.subWeatherCateogryTableItemSubView1}>
                  <label class="text-white w-1/3 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle1}>九寨沟九寨沟</label>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">12.1</label>
                    <BsArrowDown color="#02deff" size={12} />
                    <label class="flex text-[#02deff] text-left text-[12px]" style={styles.smallPercentValueDownText}>0.2%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">九寨沟县</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">四川省</label>
                  </div>
                </div>
                <div class="flex flex-row justify-between py-2" style={styles.subWeatherCateogryTableItemSubView2}>
                  <label class="text-white w-1/3 text-left" style={styles.subWeatherCateogryTableItemSubViewTitle1}>拉萨拉萨</label>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">11.8</label>
                    <BsArrowDown color="#02deff" size={12} />
                    <label class="flex text-[#02deff] text-left text-[12px]" style={styles.smallPercentValueDownText}>0.3%</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">會城市</label>
                  </div>
                  <div class="flex flex-row w-1/4 items-center" style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                    <label class="flex text-white text-left">陝西省</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full mb-6 items-end" style={styles.itemWrap3}>
            <div class="flex p-6 items-center justify-end" style={styles.subTitleWrapView1}>
              <div class="flex  flex-col" style={styles.subTitleLineWrapView1}>
                <label class="flex text-white text-[18px] font-bold" style={styles.subTitleLineWrapLabel1}>客流来源排名TOP5</label>
                <img
                  src={Line1}
                  class="w-[170px] h-[4px]"
                  style={{width: 170, height: 4}}
                  alt="line1"
                />
              </div>
              <img
                src={Line2}
                class="w-[300px] h-[10px] mt-[15px] -ml-0 "
                style={{width: 300, height: 10, marginTop: 15}}
                alt="line1"
              />
            </div>
            <div class="flex w-[620px] px-6 justify-end -mt-2" style={styles.subWeatherCateogryItemView4}>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 100, label: '北京', color: 'tomato' },
                      { id: 1, value: 50, label: '重庆' },
                      { id: 2, value: 40, label: '上海' },
                      { id: 3, value: 30, label: '天津' },
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
      {/* </div> */}


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

