import React from 'react';
import leftPad from "left-pad";

export default function Timecode({ milliseconds }) {
  const min = Math.floor(milliseconds / 1000 / 60) + '';
  const sec = Math.floor((milliseconds / 1000) - (min * 60)) + '';
  const ms = Math.floor(milliseconds - (sec * 1000) - (min * 60 * 1000)) + '';

  const formatedTime = `${leftPad(min, 2, 0)}:${leftPad(sec, 2, 0)}:${leftPad(ms, 3, 0).slice(0, 3)}`;

  return (
    <span className='timecode'>
      {formatedTime}
    </span>
  );
}
