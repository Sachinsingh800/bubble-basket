import React, { useState } from "react";
import style from "./SectionNinth.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

function SectionNinth() {
  const [formData, setFormData] = useState({
    persons: "1 Person",
    date: new Date().toISOString().substr(0, 10),
    time: new Date().toTimeString().substr(0, 5),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (time) => {
    return time;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <hr />
          Visit us
          <hr />
        </p>
        <h2>TAKE AT OUR</h2>
      </div>
     
        <form className={style.container} onSubmit={handleSubmit}>
          <label>
            <PersonOutlinedIcon />
            <select name="persons" value={formData.persons} onChange={handleChange}>
              <option value="1 Person">1 Person</option>
              <option value="2 Persons">2 Persons</option>
              <option value="3 Persons">3 Persons</option>
            </select>
          </label>
          <div className={style.para}>for</div>

          <label htmlFor="Date" className={style.dateLabel}>
            <WorkHistoryOutlinedIcon />
            <span>{formatDate(formData.date)}</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              id="Date"
            />
          </label>

          <div className={style.para}>at</div>
          <label htmlFor="Time" className={style.timeLabel}>
            <AccessAlarmsOutlinedIcon />
            <span>{formatTime(formData.time)}</span>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              id="Time"
            />
          </label>

          <div className={style.para}>go!</div>
          <button type="submit">R E S E R V A T I O N →</button>
        </form>
     
    </div>
  );
}

export default SectionNinth;
