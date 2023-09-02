import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styles from './styles'

function InfoCard({ data, name, description }) {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    if (!data) return;
    setInfo(JSON.parse(data));
  }, [data]);

  return (
    <Draggable>
      <div style={styles.layout}>
        <label style={styles.name}>{name}</label>
        <div style={styles.innerContainer}>
          <div style={styles.description}>
            {description}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default InfoCard;

