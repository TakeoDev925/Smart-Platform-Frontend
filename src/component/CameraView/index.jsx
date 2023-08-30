import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

function CameraView({ cameras }) {
  const [selectIndex, setSelectIndex] = useState(0);
  const [isCameraList, setIsCameraList] = useState(false);

  useEffect(() => {
    setSelectIndex(0);
  }, [cameras]);

  if (!cameras[selectIndex]) return <></>;
  return (
    <Draggable>
      <div class="flex items-center w-[300px] h-[200px]">
        <label class="flex text-white mt-1">{cameras[selectIndex].name}</label>
        {isCameraList && (
          <div class="overflow-auto absolute top-[36px] right-[10px] h-[250px]">
            {cameras.map((c, index) => (
              <div
                class="bg-[#438be9] mr-[5px] cursor-pointer mb-[10px]"
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
        )}
      </div>
    </Draggable>
  )
}

export default CameraView;

