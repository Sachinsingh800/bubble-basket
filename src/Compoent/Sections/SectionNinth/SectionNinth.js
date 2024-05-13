import React, { useState, useRef, useEffect } from "react";
import style from "./SectionNinth.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import design from "../../Images/Grape Leaf.png"
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';

function SectionNinth() {
  const [name, setName] = useState("NAME");
  const [email, setEmail] = useState("EMAIL");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPerson, setShowPerson] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);


  const personRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dateRef.current &&
        !dateRef.current.contains(event.target) &&
        showDate
      ) {
        setShowDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ showDate]);

  const handleToggle = () => {
    setShowPerson(!showPerson);
  };

  const handleToggleTime = () => {
    setShowTime(!showTime);
  };

  const handleToggleDate = () => {
    setShowDate(!showDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, selectedDate });
    // You can add your form submission logic here
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSelect = (date) => {
    setSelectedDate(date);
    setShowDate(false);
  };

  return (
    <div className={style.main}>
      <div className={style.right_top_design}>
        <img src={design} alt="Luxury Basket" />
      </div>
      <div className={style.left_top_design}>
        <img src={design} alt="Luxury Basket" />
      </div>
      <div className={style.heading_box}>
        <p>
          <span />
          SUBSCRIBE
          <span />
        </p>
        <h2>SIGN UP FOR OUR NEWS LETTER</h2>
      </div>

      <form className={style.container} onSubmit={handleSubmit}>
        <div className={style.option_container} >
          <label >
            <PersonOutlinedIcon />
            <input required type="text" value={name} onChange={(e)=>handleName(e)}/>
          </label>
        </div>

        <div className={style.option_container}>
          <label  >
            <EmailIcon />
            <input className={style.email} required type="email" value={email} onChange={(e)=>handleEmail(e)}/>
          </label>
        </div>

        <div className={style.option_container} ref={dateRef}>
          <label onClick={handleToggleDate} className={style.date_lable}>
            <CakeIcon />
            {selectedDate.toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </label>
          {showDate && (
            <div className={style.date_box}>
              <Calendar
                date={selectedDate}
                onChange={handleSelect}
                minDate={new Date()}
              />
            </div>
          )}
        </div>
        <button className={style.summit_btn} type="submit">SUMMIT →</button>
      </form>
    </div>
  );
}

export default SectionNinth;
