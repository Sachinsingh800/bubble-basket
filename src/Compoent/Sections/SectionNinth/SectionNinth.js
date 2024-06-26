import React, { useState, useRef, useEffect } from "react";
import style from "./SectionNinth.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import design1 from "../../Images/Leaf 1.webp";
import design2 from "../../Images/Leaf 2.webp";
import { sendSubscribtion } from "../../Apis/Apis";

function SectionNinth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDate, setShowDate] = useState(false);
  // name,email,dateOfBirth
  const dateRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDate = () => {
    setShowDate(!showDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: name,
        email: email,
        dob: selectedDate,
      };
      const response = await sendSubscribtion(data);
      alert(response.message);
      // Reset all fields after successful submission
      setName("");
      setEmail("");
      setSelectedDate(null);
    } catch (error) {
      alert("already register");
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSelect = (date) => {
    // Check if user is 18 or older
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    if (age >= 18) {
      setSelectedDate(date);
    } else {
      alert("You must be at least 18 years old to subscribe.");
    }
    setShowDate(false);
  };

  return (
    <div className={style.main}>
      <div className={style.right_top_design}>
        <img
          src={design1}
          alt="Luxury Bubble Basket"
          title="Luxury Bubble Basket"
          loading="lazy"
          width="auto"
          height="auto"
        />
      </div>
      <div className={style.left_top_design}>
        <img
          src={design2}
          alt="Luxury Bubble Basket"
          title="Luxury Bubble Basket"
          loading="lazy"
          width="auto"
          height="auto"
        />
      </div>
      <div className={style.heading_box}>
        <p>
          <span />
          SUBSCRIBE
          <span />
        </p>
        <h2>SIGN UP FOR OUR NEWSLETTER</h2>
      </div>

      <form className={style.container} onSubmit={handleSubmit}>
        <div className={style.option_container}>
          <label>
            <PersonOutlinedIcon />
            <input
              required
              type="text"
              value={name}
              placeholder="NAME"
              onChange={handleName}
            />
          </label>
        </div>

        <div className={style.option_container}>
          <label>
            <EmailIcon />
            <input
              className={style.email}
              required
              type="email"
              value={email}
              placeholder="EMAIL"
              onChange={handleEmail}
            />
          </label>
        </div>

        <div className={style.option_container} ref={dateRef}>
          <label onClick={handleToggleDate} className={style.date_label}>
            <CakeIcon />
            {selectedDate ? (
              selectedDate.toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            ) : (
              <span className={style.date_lable}>Date Of Birth</span>
            )}
          </label>
          {showDate && (
            <div className={style.date_box}>
              <Calendar
                date={selectedDate || new Date()}
                onChange={handleSelect}
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))} // Set max date to 18 years ago
              />
            </div>
          )}
        </div>
        <button className={style.submit_btn} type="submit">
          SUBMIT →
        </button>
      </form>
    </div>
  );
}

export default SectionNinth;
