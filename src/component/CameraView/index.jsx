import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styles from './styles'

function CameraView({ cameras }) {
  const [selectIndex, setSelectIndex] = useState(0);
  const [isCameraList, setIsCameraList] = useState(false);

  useEffect(() => {
    setSelectIndex(0);
  }, [cameras]);

  if (!cameras[selectIndex]) return <></>;
  return (
    <Draggable>
      <div style={styles.layout}>
        <img src={cameras[selectIndex].image} style={styles.cameraImage} alt='camera' />
        {/* <span class="flex text-white mt-1">"{cameras[selectIndex].name}"</span> */}
        {/* {isCameraList && (
          <div class="overflow-auto absolute top-[36px] right-[10px] h-[250px]" style={styles.cameraView}>
            {cameras.map((c, index) => (
              <div
                class="bg-[#438be9] mr-[5px] cursor-pointer mb-[10px]"
                style={styles.cameraSubView}
                key={c.id}
                isSelected={selectIndex === index}
                onClick={() => {
                  setSelectIndex(index);
                  setIsCameraList(false);
                }}
              >
                {c.name}
              </div>
            ))}
          </div>
        )} */}
      </div>
    </Draggable>
  )
}

export default CameraView;

