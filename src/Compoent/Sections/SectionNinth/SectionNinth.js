import React, { useState } from "react";
import style from "./SectionNinth.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

function SectionNinth() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <hr />
          Visit us
          <hr />
        </p>
        <h2>TAKE  AT  OUR</h2>
      </div>
      <div className={style.container}>
        <label>
          <PersonOutlinedIcon />
          <select>
            <option>1 Person</option>
            <option>2 Person</option>
            <option>3 Person</option>
          </select>
        </label>
        <div className={style.para}>for</div>

        <label htmlFor="Date" className={style.dateLabel}>
          <WorkHistoryOutlinedIcon />
          <span>{formatDate(selectedDate)}</span>
          <input
            type="date"
            value={selectedDate.toISOString().substr(0, 10)}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            id="Date"
            hidden
          />
        </label>

        <div className={style.para}>at</div>
        <label htmlFor="Time" className={style.timeLabel}>
          <AccessAlarmsOutlinedIcon />
          <span>{formatTime(selectedTime)}</span>
          <input
            type="time"
            value={selectedTime.toTimeString().substr(0, 5)}
            onChange={(e) => setSelectedTime(new Date(`2000-01-01T${e.target.value}`))}
            id="Time"
            hidden
          />
        </label>

        <div className={style.para}>go!</div>
        <button>
          R E S E R V A T I O N →
        </button>
      </div>
    </div>
  );
}

export default SectionNinth;
