import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { toggleTime } from "../../../store/timeSlice";
import './calendarDayTime.css';
import axios from 'axios'


const SetTime = (id, active) => {
  const timess = useSelector(state => state.times.times);
  axios
    .patch('https://times-a9e35-default-rtdb.europe-west1.firebasedatabase.app/times.json', {
      timess
    })
    .catch(() => {
      alert('Не удалось обновить');
    });
  }
const CalendarDayTime = ({ time, id, active }) => {
 
  const dispath = useDispatch();
  return (
    <div className='calendarDayTime'>
      {
        <span className={active ? 'dayTime active' : 'dayTime'} onClick={() => {
          dispath(toggleTime({ id }))
          
          console.log(active + 'awa')
        }}>{time.time}</span>
      }
     
    </div>
  )
}

export default CalendarDayTime;