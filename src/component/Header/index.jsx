import React from "react";
import TopBg from "../../assets/png/topbg.png";

function Header(props) {
  return (
    <div
      class={`flex items-center justify-center w-full ${props.class}`}
    >
      <img
        src={TopBg}
        class="w-full h-[60px] absolute top-0"
        alt="topbg"
      />
      <label class="font-bold text-[30px] text-white absolute top-2">{props.title}</label>
    </div>
  );
}



export default Header;

