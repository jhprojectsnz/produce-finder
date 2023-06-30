import "./open-hours-form.css";
import { useState } from "react";

//Change to a more specfic map key

export default function OpenHoursform() {
  const [openDaysOfWeek, setOpenDaysOfWeek] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  //Not sure if the approach below is ok? better to include all logic within setState?
  const handleCheckChange = (day) => {
    //create a copy of openDays object and update the day for which the checkbox is clicked
    const updatedOpenDays = { ...openDaysOfWeek };
    updatedOpenDays[day] = !openDaysOfWeek[day];
    //update state openDays using the new modified object
    setOpenDaysOfWeek(updatedOpenDays);
  };

  const times = [
    "12:00 am",
    "12:30 am",
    "1:00 am",
    "1:30 am",
    "2:00 am",
    "2:30 am",
    "3:00 am",
    "3:30 am",
    "4:00 am",
    "4:30 am",
    "5:00 am",
    "5:30 am",
    "6:00 am",
    "6:30 am",
    "7:00 am",
    "7:30 am",
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm",
    "8:30 pm",
    "9:00 pm",
    "9:30 pm",
    "10:00 pm",
    "10:30 pm",
    "11:00 pm",
    "11:30 pm",
  ];

  return (
    <div className="open-hours-form">
      {Object.keys(openDaysOfWeek).map((day) => (
        <div className="openhours-day-container" key={day}>
          <p>{day}</p>
          <input
            type="checkbox"
            id={`custom-checkbox-${day}`}
            className="openhours-checkbox"
            name={day}
            value={day}
            checked={openDaysOfWeek.day}
            onChange={() => handleCheckChange(day)}
          />
          {openDaysOfWeek[day] && (
            <div className="open-times-container">
              <select>
                <option value="">Open</option>
                {times.map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </select>
              <span>-</span>
              <select>
                <option value="">Close</option>
                {times.map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// const daysOfWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   //An array of equal length to filters which tracks the checked state of each filter
//   const [checkedState, setCheckedState] = useState(
//     new Array(filters.length).fill(false)
//   );

//   function handleCheckChange() {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );
//     setCheckedState(updatedCheckedState);
//   }
