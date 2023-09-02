import React from "react";
import Iconbg from "../../assets/png/iconbg.png";
import styles from './styles'

function NumberAvatar(props) {
  return (
    <div class={`flex flex-row w-[180px] items-center ${props.class}`} style={styles.layout}>
      <div class="flex items-center justify-center h-[70px]" style={styles.avatarView}>
        <img
          src={Iconbg}
          style={{width: 60, height: 60}}
          alt="Iconbg"
        />
        <img
          src={props.icon}
          class="w-[45px] h-[35px] absolute object-scale-down"
          style={styles.avatarIconImage}
          alt={props.icon}
        />
      </div>
      <div class="flex flex-col ml-3 justify-center" style={styles.numberAvatarTextView}>
        <label class="flex text-white opacity-50 mt-1" style={styles.numberAvatarTextTitle}>今日旅游人数</label>
        <div class="flex flex-row items-center -mt-2" style={styles.numberAvatarTextSubView}>
          <label class="flex text-[#61ddb1] font-DS-DIGI text-[28px] font-semibold " style={styles.numberAvatarTextSubValue}>{props.value}</label>
          <label class="flex text-white ml-2 text-[14px]" style={styles.numberAvatarTextSubValue1}>人</label>
        </div>
      </div>
    </div>
  )
}

export default NumberAvatar;

