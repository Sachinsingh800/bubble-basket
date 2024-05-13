import React, { useState, useRef, useEffect } from "react";
import style from "./SectionNinth.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import design from "../../Images/Grape Leaf.png"

function SectionNinth() {
  const [person, setPerson] = useState("person");
  const [time, setTime] = useState("6:00 am");
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
        personRef.current &&
        !personRef.current.contains(event.target) &&
        showPerson
      ) {
        setShowPerson(false);
      }

      if (
        timeRef.current &&
        !timeRef.current.contains(event.target) &&
        showTime
      ) {
        setShowTime(false);
      }

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
  }, [showPerson, showTime, showDate]);

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
    console.log("Form submitted:", { person, time, selectedDate });
    // You can add your form submission logic here
  };

  const handlePerson = (person) => {
    setPerson(person);
    setShowPerson(false);
  };
  
  const handleTime = (time) => {
    setTime(time);
    setShowTime(false);
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
          <hr />
          SUBSCRIBE
          <hr />
        </p>
        <h2>SIGN UP FOR OUR NEWS LETTER</h2>
      </div>

      <form className={style.container} onSubmit={handleSubmit}>
        <div className={style.option_container} ref={personRef}>
          <label onClick={handleToggle}>
            <PersonOutlinedIcon />
            {person}
          </label>
          {showPerson && (
            <ul className={style.option_box}>
              <li onClick={() => handlePerson("1 Person")}>1 Person</li>
              <li onClick={() => handlePerson("2 Person")}>2 Person</li>
              <li onClick={() => handlePerson("3 Person")}>3 Person</li>
              <li onClick={() => handlePerson("4 Person")}>4 Person</li>
              <li onClick={() => handlePerson("5 Person")}>5 Person</li>
              <li onClick={() => handlePerson("6 Person")}>6 Person</li>
            </ul>
          )}
        </div>

        <div className={style.para}>for</div>

        <div className={style.option_container} ref={dateRef}>
          <label onClick={handleToggleDate} className={style.date_lable}>
            <WorkHistoryOutlinedIcon />
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

        <div className={style.para}>at</div>
        
        <div className={style.option_container} ref={timeRef}>
          <label onClick={handleToggleTime}>
            <AccessAlarmsOutlinedIcon />
            {time}
          </label>
          {showTime && (
            <ul className={style.option_box}>
              <li onClick={() => handleTime("6:00 am")}>6:00 am</li>
              <li onClick={() => handleTime("7:00 am")}>7:00 am</li>
              <li onClick={() => handleTime("8:00 am")}>8:00 am</li>
              <li onClick={() => handleTime("9:00 am")}>9:00 am</li>
              <li onClick={() => handleTime("10:00 am")}>10:00 am</li>
              <li onClick={() => handleTime("11:00 am")}>11:00 am</li>
            </ul>
          )}
        </div>

        <div className={style.para}>go!</div>
        <button type="submit">R E S E R V A T I O N →</button>
      </form>
    </div>
  );
}

export default SectionNinth;
