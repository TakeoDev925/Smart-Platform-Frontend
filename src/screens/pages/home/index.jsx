import React, {  } from "react"
import Bg from "../../../assets/png/bg.png";
import SpinLogo from "../../../component/SpinLogo";
import Map from "../../../assets/png/map.png";
import TopBg from "../../../assets/png/topbg.png";
import Lbx from "../../../assets/png/lbx.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goTourism = () => {
    navigate("/tourism");
  }

  return (
    <div class="w-full h-full bg-gradient-to-r from-[#F8FAFB] to-[#EDF5FF] align-middle justify-center">
      <img
        src={Bg}
        class="w-full h-full absolute top-0 left-0"
        alt="logo"
      />
      <img
        src={TopBg}
        class="w-full h-[60px] absolute top-0 left-0"
        alt="topbg"
      />
      <label class="w-full h-[70px] absolute top-0 left-0 font-bold text-[30px] mt-3 text-white">管理系統</label>
        
      <div class="flex w-full h-[460px] justify-center items-center mt-[300px] absolute">
        <div class="w-[100px] "></div>
        <SpinLogo />
        <button
          class="w-[100px] h-[100px] mt-[100px] rounded-full font-extrabold text-[20px] text-[#002dd1] hover:text-[#f29701] border-2 border-[rgba(0,45,209,0.8)] shadow-[inset_0_0px_12px_rgba(0,45,209,0.8)] hover:border-[rgba(242,151,18,0.8)] hover:shadow-[inset_0_0px_12px_rgba(242,151,18,0.8)]"
          onClick={goTourism}
          name='tourism'
        >
          智慧旅游
        </button>
      </div>
      
    </div>
  );
}

export default Home;

