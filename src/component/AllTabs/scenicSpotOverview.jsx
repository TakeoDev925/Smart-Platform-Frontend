import React, { useState } from 'react'
import CameraView from '../CameraView'
import InfoCard from '../InfoCard'
import { Map, Marker, ZoomControl, MapTypeControl } from 'react-bmapgl'
import WeatherIcon from '../../assets/png/weather.png'
import mapStyleJson from '../../data/custom_map_config.json'
import json from '../../data/scenicOverviewList.json'
import styles from './styles'

const ScenicSpotOverview = () => {
  const [selectIndex, setSelectIndex] = useState(null)
  return (
    <div style={styles.mapContainer}>
      <Map
        style={{ height: '87vh', width: '100%' }}
        mapStyleV2={{ styleJson: mapStyleJson }}
        center={{ lng: 125.9501002, lat: 41.7296937 }}
        zoom={15}
        heading={0}
        tilt={40}
        enableScrollWheelZoom
      >
        {json.map((d, index) => (
          <Marker
            key={d.id}
            enableDragging
            position={{ lng: d.lng, lat: d.lat }}
            onClick={() => setSelectIndex(index === selectIndex ? null : index)}
          />
        ))}
        <ZoomControl />
        <MapTypeControl />
      </Map>

      {selectIndex !== null && (
        <div style={styles.infoWrapper}>
          <CameraView cameras={json[selectIndex].cameras} />
          <InfoCard {...json[selectIndex]} />
        </div>
      )}
    </div>
  )
}
export default ScenicSpotOverview
