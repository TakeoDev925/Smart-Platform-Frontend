import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress'
import styles from './styles'

function PercentAvatar (props) {
  return (
    <div style={styles.layout}>
      <CircularProgress
        determinate
        value={props.value}
        sx={{ '--CircularProgress-size': '80px', color: '#347eed' }}
      >
        {props.value}{props.unit}
      </CircularProgress>
      <label style={styles.title}>{props.title}</label>
    </div>
  )
}

export default PercentAvatar
