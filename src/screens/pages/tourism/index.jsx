import React, { useState } from "react";
import Header from "../../../component/Header";
import WeatherTrends from "../../../component/AllTabs/weatherTrends";
import SecondTab from "../../../component/AllTabs/secondTab";
import ScenicSpotOverview from "../../../component/AllTabs/scenicSpotOverview";
import styles from "./styles";

function Tourism() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  const showTabView = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <WeatherTrends />;
      case 6:
        return <ScenicSpotOverview />;
      default:
        return <SecondTab />;
    }
  };

  return (
    <div style={styles.layout}>
      <Header title="智慧旅游" />
      <div style={styles.mainContainer}>
        <div style={styles.menuTabView}>
          <div
            style={
              tabIndex === 0 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(0)}
          >
            全域客流
          </div>
          <div
            style={
              tabIndex === 1 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(1)}
          >
            游客画像
          </div>
          <div
            style={
              tabIndex === 2 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(2)}
          >
            舆情专题
          </div>
          <div
            style={
              tabIndex === 3 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(3)}
          >
            旅游产品专题
          </div>
        </div>
        <div style={styles.menuTabView}>
          <div
            style={
              tabIndex === 4 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(4)}
          >
            经营专题
          </div>
          <div
            style={
              tabIndex === 5 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(5)}
          >
            消费专题
          </div>
          <div
            style={
              tabIndex === 6 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(6)}
          >
            景区概况
          </div>
          <div
            style={
              tabIndex === 7 ? styles.selectedTabView : styles.unSelectedTabView
            }
            onClick={() => handleChangeIndex(7)}
          >
            文博数据监测
          </div>
        </div>
      </div>
      <div style={styles.mainView}>{showTabView(tabIndex)}</div>
    </div>
  );
}

export default Tourism;
