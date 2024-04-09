import React from "react";
import style from "./SectionNinth.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

function SectionNinth() {
  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <hr />
          Visit us
          <hr />
        </p>
        <h2>TAKEATOUR</h2>
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

        <label>
          <WorkHistoryOutlinedIcon />
          <input type="date" />
        </label>

        <div className={style.para}>at</div>
        <label>
          <AccessAlarmsOutlinedIcon />
          <input type="time" />
        </label>

        <div className={style.para}>go!</div>
        <button>R E S E R V A T I O N →</button>
      </div>
    </div>
  );
}

export default SectionNinth;
