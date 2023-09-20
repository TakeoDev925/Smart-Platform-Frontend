import React, { useState } from 'react'
import CameraView from '../CameraView'
import InfoCard from '../InfoCard'
import { Map, Marker, ZoomControl, MapTypeControl } from 'react-bmapgl'
import mapStyleJson from '../../data/custom_map_config.json'
import markJson from '../../data/scenicOverviewList.json'
import styles from './styles'

const ScenicSpotOverview = () => {
  const [selectIndex, setSelectIndex] = useState(null)

  const onClose = () => {
    setSelectIndex(null);
  }
  const onClickMark = (index) => {
    setSelectIndex(index === selectIndex ? null : index)
  }
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
        {markJson.map((d, index) => (
          <Marker
            key={d.id}
            enableDragging
            position={{ lng: d.lng, lat: d.lat }}
            onClick={() => onClickMark(index)}
          />
        ))}
        <ZoomControl />
        <MapTypeControl />
      </Map>

      {selectIndex !== null && (
        <div style={styles.infoWrapper}>
          <CameraView cameras={markJson[selectIndex].cameras} onClose={onClose}/>
          <InfoCard {...markJson[selectIndex]} />
        </div>
      )}
    </div>
  )
}
export default ScenicSpotOverview
