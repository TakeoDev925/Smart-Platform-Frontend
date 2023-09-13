import React, { useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Map, Marker, ZoomControl, MapTypeControl } from 'react-bmapgl'
import mapStyleJson from '../../data/custom_map_config.json'
import Line1 from '../../assets/png/line1_1.png'
import Line2 from '../../assets/png/line2_1.png'
import Icona from '../../assets/png/icona.png'
import Iconc from '../../assets/png/iconc.png'
import Icone from '../../assets/png/icone.png'
import Iconf from '../../assets/png/iconf.png'
import NumberAvatar from '../numberAvatar'
import PercentAvatar from '../percentAvatar'
import WeatherIcon from '../../assets/png/weather.png'
import markJson from '../../data/scenicOverviewList.json'
import styles from './styles'


const option1 = {
  title: {
    text: '+ 吉林通化',
    textStyle: {
      color: 'white',
      backgroundColor: 'red'
    },
    textAlign: 'left',
    padding: [5, 180]
  },
  xAxis: {
    name: '(月)',
    nameTextStyle: {
      color: 'white'
    },
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    axisLabel: {
      textStyle: {
        color: 'white'
      }
    }
  },
  yAxis: {
    name: '(名)',
    // nameLocation: 'middle',
    nameTextStyle: {
      color: 'white'
    },
    type: 'value',
    axisLabel: {
      textStyle: {
        color: 'white'
      }
    }
  },
  series: [
    {
      data: [
        1200, 2000, 1500, 800, 1070, 1010, 1300, 2350, 780, 1790, 1110, 830
      ],
      type: 'bar'
    }
  ]
}

const categories = {
  category: '性别',
  data: [
    '通化葡萄酒有限公司',
    '靖宇陵園',
    '通化玉皇山公園',
    '長迷宮溶洞',
    '五女峰國家森林公園'
  ]
} 
 
const options = {
  legend: {
    orient: 'vertical',
    x: 'left',
    data: categories.data,
    textStyle: { color: 'white' }
  },
  series: [
    {
      type: 'pie',
      radius: ['30%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
        fontSize: 12,
      },
      itemStyle: {
        borderRadius: 2
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 30,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: categories.data.map(d => ({
        value: Math.ceil(Math.random() * 10000 + 2000),
        name: d
      }))
    }
  ]
}

const WeatherTrends = () => {

  return (
    <div style={styles.layout}>
      <div style={styles.container1}>
        <div style={styles.itemWrap2}>
          <div style={styles.subTitleWrapView1}>
            <div style={styles.subTitleLineWrapView1}>
              <label style={styles.subTitleLineWrapLabel1}>天气趋势</label>
              <img
                src={Line1}
                style={styles.subTitleLineWrapImage1}
                alt='line1'
              />
            </div>
            <img
              src={Line2}
              style={styles.subTitleLineWrapImage2}
              alt='line1'
            />
          </div>
          <div style={styles.subTitleWrapView2}>
            <label style={styles.subWeatherLocationLabel}>+ 吉林通化</label>
            <div style={styles.subWeatherCateogryItemView1}>
              <div style={styles.subWeatherCateogryItem1}>
                <label style={{ color: 'white' }}>天气图标</label>
                <img
                  src={WeatherIcon}
                  style={styles.subWeatherCateogryItemWeatherIcon}
                  alt='weatherIcon'
                />
              </div>
              <div style={styles.subWeatherCateogryItem2}>
                <label style={{ color: 'white' }}>实时温度</label>
                <label style={{ color: 'white' }}>60 °F</label>
              </div>
            </div>
            <div style={styles.subWeatherCateogryItemView2}>
              <div style={styles.subWeatherCateogryItem1}>
                <label style={{ color: 'white' }}>湿度</label>
                <label style={{ color: 'white' }}>92 %</label>
              </div>
              <div style={styles.subWeatherCateogryItem2}>
                <label style={{ color: 'white' }}>风向</label>
                <label style={{ color: 'white' }}>NNE</label>
              </div>
            </div>
            <div style={styles.subWeatherCateogryItemView2}>
              <div style={styles.subWeatherCateogryItem1}>
                <label style={{ color: 'white' }}>风级</label>
                <label style={{ color: 'white' }}>1.5 mph</label>
              </div>
              <div style={styles.subWeatherCateogryItem2}>
                <label style={{ color: 'white' }}>雨</label>
                <label style={{ color: 'white' }}>4.5</label>
              </div>
            </div>
            <div style={styles.subWeatherCateogryItemView2}>
              <div style={styles.subWeatherCateogryItem1}>
                <label style={{ color: 'white' }}>雪</label>
                <label style={{ color: 'white' }}>0</label>
              </div>
              <div style={styles.subWeatherCateogryItem2}>
                <label style={{ color: 'white' }}>降水概率</label>
                <label style={{ color: 'white' }}>91%</label>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.itemWrap2}>
          <div style={styles.subTitleWrapView1}>
            <div style={styles.subTitleLineWrapView1}>
              <label style={styles.subTitleLineWrapLabel1}>游客来访方式</label>
              <img src={Line1} style={{ width: 130, height: 4 }} alt='line1' />
            </div>
            <img
              src={Line2}
              style={{ width: 340, height: 13, marginTop: 12 }}
              alt='line1'
            />
          </div>
          <div style={styles.subTitleWrapView3}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <NumberAvatar
                icon={Icona}
                title='今日旅游人数'
                value={Math.ceil(Math.random() * 10000 + 5000)}
              />
              <NumberAvatar
                icon={Iconf}
                title='宣传当地景点'
                value={Math.ceil(Math.random() * 10000 + 5000)}
              />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', marginTop: 16 }}
            >
              <NumberAvatar
                icon={Iconc}
                title='举办节日'
                value={Math.ceil(Math.random() * 10000 + 5000)}
              />
              <NumberAvatar
                icon={Icone}
                title='推广当地活动和企业'
                value={Math.ceil(Math.random() * 10000 + 5000)}
              />
            </div>
          </div>
        </div>
        <div style={styles.itemWrap2}>
          <div style={styles.subTitleWrapView1}>
            <div style={styles.subTitleLineWrapView1}>
              <label style={styles.subTitleLineWrapLabel1}>
                近一年客流趋势
              </label>
              <img src={Line1} style={{ width: 150, height: 4 }} alt='line1' />
            </div>
            <img
              src={Line2}
              style={{ width: 320, height: 13, marginTop: 12 }}
              alt='line1'
            />
          </div>
          <div style={styles.subTitleWrapView4}>
            <ReactEcharts
              option={option1}
              style={{ height: '300px', width: '500px' }}
              title={'SSSS@@'}
            />
          </div>
        </div>
      </div>
      <div style={styles.container2}>
        <Map
          style={{ height: '100%', width: '100%' }}
          mapStyleV2={{ styleJson: mapStyleJson }}
          center={{ lng: 125.9501002, lat: 41.7296937 }}
          zoom={14}
          heading={0}
          tilt={40}
          enableScrollWheelZoom
        >
          {markJson.map((d, index) => (
          <Marker
            key={d.id}
            enableDragging
            position={{ lng: d.lng, lat: d.lat }}
            onClick={() => console.log('clicked')}
          />
        ))}
        </Map>
      </div>

      <div style={styles.container3}>
        <div style={styles.itemWrap3}>
          <div style={styles.subTitleWrapView1}>
            <div style={styles.subTitleLineWrapView1}>
              <label style={styles.subTitleLineWrapLabel1}>实时客流</label>
              <img src={Line1} style={{ width: 90, height: 4 }} alt='line1' />
            </div>
            <img
              src={Line2}
              style={{ width: 380, height: 10, marginTop: 15 }}
              alt='line1'
            />
          </div>
          <div style={styles.subWeatherCateogryItemView3}>
            <div style={styles.subWeatherCateogryItemSubView1}>
              <PercentAvatar
                title='客流指数'
                value={Math.ceil(Math.random() * 100)}
                unit='%'
              />
              <PercentAvatar
                title='比较平日'
                value={Math.ceil(Math.random() * 100)}
                unit='%'
              />
              <PercentAvatar
                title='平均速度'
                value={Math.ceil(Math.random() * 10)}
                unit='km/h'
              />
            </div>
            <div style={styles.subWeatherCateogryItemSubView2}>
              <PercentAvatar
                title='拥堵里程'
                value={Math.ceil(Math.random() * 100)}
                unit='%'
              />
              <PercentAvatar
                title='来往客流'
                value={Math.ceil(Math.random() * 100)}
                unit='%'
              />
              <PercentAvatar
                title='规划人流'
                value={Math.ceil(Math.random() * 100)}
                unit='%'
              />
            </div>
          </div>
        </div>
        <div style={styles.itemWrap3}>
          <div style={styles.subTitleWrapView1}>
            <div style={styles.subTitleLineWrapView1}>
              <label style={styles.subTitleLineWrapLabel1}>
                出游目的地排行
              </label>
              <img src={Line1} style={{ width: 150, height: 4 }} alt='line1' />
            </div>
            <img
              src={Line2}
              style={{ width: 320, height: 10, marginTop: 15 }}
              alt='line1'
            />
          </div>
          <div style={styles.subWeatherCateogryItemView4}>
            <div style={styles.subWeatherCateogryItemSubView3}>
              <div style={styles.subWeatherCateogryTableItemSubView1}>
                <label style={styles.subWeatherCateogryTableItemSubViewTitle1}>
                  目的地
                </label>
                <label style={styles.subWeatherCateogryTableItemSubViewTitle3}>
                  當地地區
                </label>
              </div>
              <div style={styles.subWeatherCateogryTableItemSubView1}>
                <label style={styles.subWeatherCateogryTableItemSubViewTitle1}>
                  1. 通化葡萄酒有限公司
                </label>
                <div style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                  <label>134002 吉林省 通化市 東昌區前興路28號</label>
                </div>
              </div>
              <div style={styles.subWeatherCateogryTableItemSubView1}>
                <label style={styles.subWeatherCateogryTableItemSubViewTitle1}>
                  2. 靖宇陵園
                </label>
                <div style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                  <label>134000 吉林省 通化市 東昌區靖宇路23號</label>
                </div>
              </div>
              <div style={styles.subWeatherCateogryTableItemSubView2}>
                <label style={styles.subWeatherCateogryTableItemSubViewTitle1}>
                  3. 通化玉皇山公園
                </label>
                <div style={styles.subWeatherCateogryTableItemSubViewTitle2}>
                  <label>134001 吉林省 通化市 東昌區柳泉路8號</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.itemWrap3}>
          <div style={styles.subTitleWrapView1}>
            <div style={styles.subTitleLineWrapView1}>
              <label style={styles.subTitleLineWrapLabel1}>
                景区实时客流排行TOP5
              </label>
              <img src={Line1} style={{ width: 210, height: 4 }} alt='line1' />
            </div>
            <img
              src={Line2}
              style={{ width: 260, height: 10, marginTop: 15 }}
              alt='line1'
            />
          </div>
          <div style={styles.subWeatherCateogryItemView4}>
            <div style={styles.categoryWrapper}>
              <div style={styles.categoryChartWrapperView}>
                <ReactEcharts
                  option={options}
                  style={{ width: '600px', height: '200px', marginLeft: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WeatherTrends
