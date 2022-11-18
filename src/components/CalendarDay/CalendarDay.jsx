import React from 'react';
import { useSelector } from 'react-redux'
import './CalendarDay.scss';
import CalendarDayTime from './CalendarDayTime/CalendarDayTime';
import axios from 'axios'

const SetTime = (active) => {
  axios
    .put('https://times-a9e35-default-rtdb.europe-west1.firebasedatabase.app/times.json', active)
    .catch(() => {
      alert('Не удалось обновить');
    });
  }
const CalendarDay = ({ day, id }) => {
  const timess = useSelector(state => state.times.times);
  console.log(timess[0])
  return (
    <div className='calendar_day'>
      <p className='calendar_day_header' >{day}</p>
      <div className='container_day_time'>
        {
          timess[0]?.map((time) => {
            if (id === time.dayId) {
              return <CalendarDayTime key={time.id} time={time} id={time.id} active={time.active} />;
            }
            else {
              return null
            }
          })
        }
      <button onClick={() => {SetTime(timess[0])}}>SAVE</button>
      </div>
    </div>
  )

}

export default CalendarDay