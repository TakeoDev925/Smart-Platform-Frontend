import React from "react";
import Map from "../../assets/png/map.png";
import Lbx from "../../assets/png/lbx.png";

function SpinLogo(props) {
  return (
    <div
      class="flex w-[500px] h-[500px] items-center justify-center"
    >
      <img
          src={Map}
          class="flex w-[360px] h-[360px]"
          alt="map"
        />
        <img
          src={Lbx}
          class="flex w-[500px] h-[500px] absolute animate-waving-hand"
          alt="lbx"
        />
    </div>
  );
}



export default SpinLogo;

