import React, { useState, useEffect } from "react";
import style from "./AboutUsSectionThird.module.css"

function AboutUsSectionThird() {
  const [counts, setCounts] = useState({
    countries: 0,
    casesByDay: 0,
    labels: 0,
    collaborations: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        // Stop the count at the particular numbers
        const newCounts = {
          countries: prevCounts.countries < 107 ? prevCounts.countries + 5 : 107,
          casesByDay: prevCounts.casesByDay < 2136 ? prevCounts.casesByDay +50 : 2136,
          labels: prevCounts.labels < 3285 ? prevCounts.labels + 50 : 3285,
          collaborations: prevCounts.collaborations < 138 ? prevCounts.collaborations + 5 : 138
        };
        return newCounts;
      });
    }, 100); // Interval in milliseconds (1000ms = 1 second)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className={style.main}>
      <div>
        <h2>{counts.countries}</h2>
        <p>Countries</p>
      </div>
      <div>
        <h2>{counts.casesByDay}</h2>
        <p>Cases by day</p>
      </div>
      <div>
        <h2>{counts.labels}</h2>
        <p>Labels</p>
      </div>
      <div>
        <h2>{counts.collaborations}</h2>
        <p>Collaborations</p>
      </div>
    </div>
  );
}

export default AboutUsSectionThird;
