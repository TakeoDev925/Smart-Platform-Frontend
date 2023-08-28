import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';

function PercentAvatar(props) {
  return (
    <div class={`flex flex-row items-center ${props.class}`}>
      <div class="flex flex-col items-center justify-center">
        <CircularProgress determinate value={props.value} sx={{ '--CircularProgress-size': '80px', color: '#347eed' }}>
          {props.value}%
        </CircularProgress>
        <label class="flex text-white mt-1">{props.title}</label>
      </div>
    </div>
  )
}

export default PercentAvatar;

