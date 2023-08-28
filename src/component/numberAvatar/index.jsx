import React from "react";
import Iconbg from "../../assets/png/iconbg.png";

function NumberAvatar(props) {
  return (
    <div class={`flex flex-row w-[180px] items-center ${props.class}`}>
      <div class="flex items-center justify-center h-[70px]">
        <img
          src={Iconbg}
          class="w-[60px] h-[60px] "
          alt="Iconbg"
        />
        <img
          src={props.icon}
          class="w-[45px] h-[35px] absolute object-scale-down"
          alt={props.icon}
        />
      </div>
      <div class="flex flex-col ml-3 justify-center">
        <label class="flex text-white opacity-50 mt-1">今日就诊人数</label>
        <div class="flex flex-row items-center -mt-2">
          <label class="flex text-[#61ddb1] font-DS-DIGI text-[28px] font-semibold ">{props.value}</label>
          <label class="flex text-white ml-2 text-[14px]">人</label>
        </div>
      </div>
    </div>
  )
}

export default NumberAvatar;

