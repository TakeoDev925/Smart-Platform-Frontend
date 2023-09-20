import React from 'react'
import styles from './styles'

function InfoCard ({ data, name, description }) {
  return (
    <div style={styles.layout}>
      <label style={styles.name}>{name}</label>
      <div style={styles.innerContainer}>
        <span style={styles.numberText}>旅游人数: {Math.ceil(Math.random() * 10000 + 5000) }人</span>
        <span style={styles.description}>{description}</span>
      </div>
    </div>
  )
}

export default InfoCard
