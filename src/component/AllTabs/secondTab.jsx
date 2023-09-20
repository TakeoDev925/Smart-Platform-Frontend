import React from 'react'
import { Map, Marker, ZoomControl, MapTypeControl } from 'react-bmapgl'
import mapStyleJson from '../../data/custom_map_config.json'
import styles from './styles'


const SecondTab = () => {
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
        <Marker
          enableDragging
          position={{ lng: 41.75132087236431, lat: 125.97105520510028 }}
          onClick={() => console.log('33')}
        />
      </Map>
    </div>
  )
}
export default SecondTab
