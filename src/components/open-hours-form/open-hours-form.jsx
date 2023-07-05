import "./open-hours-form.css";
import { useState } from "react";

//Change to a more specfic map key

export default function OpenHoursform() {
  const [openDaysOfWeek, setOpenDaysOfWeek] = useState({
    Monday: { open: false, openTime: "", closeTime: "" },
    Tuesday: { open: false, openTime: "", closeTime: "" },
    Wednesday: { open: false, openTime: "", closeTime: "" },
    Thursday: { open: false, openTime: "", closeTime: "" },
    Friday: { open: false, openTime: "", closeTime: "" },
    Saturday: { open: false, openTime: "", closeTime: "" },
    Sunday: { open: false, openTime: "", closeTime: "" },
  });

  console.log("render");

  //Not sure if the approach below is ok? better to include all logic within setState?
  function handleCheckChange(day) {
    //create a copy of openDays object and update the day for which the checkbox is clicked
    const updatedOpenDays = { ...openDaysOfWeek };
    updatedOpenDays[day].open = !openDaysOfWeek[day].open;
    //update state openDays using the new modified object
    setOpenDaysOfWeek(updatedOpenDays);
  }

  function handleSelectChange(e, day) {
    //set a variable to the time that has just been selected
    const newTime = e.target.value;
    //define whether this time is for open or close
    //variable below might be a bit vague? Doesn't check for 'openTimeSelect' id, just sets 'close' as a default
    const openOrClose = e.target.id === "openTimeSelect" ? "open" : "close";
    //create a updated version of the entry for the specfic day for which the open/close time has been changed
    const newOpenTimes =
      openOrClose === "open"
        ? {
            [day]: {
              open: true,
              openTime: newTime,
              closeTime: openDaysOfWeek[day].closeTime,
            },
          }
        : {
            [day]: {
              open: true,
              openTime: openDaysOfWeek[day].openTime,
              closeTime: newTime,
            },
          };
    //update the state object with the new version of the updated day
    setOpenDaysOfWeek((prev) => {
      return { ...prev, ...newOpenTimes };
    });
  }

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
            checked={openDaysOfWeek[day].open}
            onChange={() => handleCheckChange(day)}
          />
          {openDaysOfWeek[day].open && (
            <div className="open-times-container">
              <select
                id="openTimeSelect"
                onChange={(e) => handleSelectChange(e, day)}
                value={openDaysOfWeek[day].openTime}
              >
                <option value="">Open</option>
                {times.map((time) => (
                  <option value={time} key={`open-${time}`}>
                    {time}
                  </option>
                ))}
              </select>
              <span>{" - "}</span>
              <select
                id="closeTimeSelect"
                value={openDaysOfWeek[day].closeTime}
                onChange={(e) => handleSelectChange(e, day)}
              >
                <option value="">Close</option>
                {times.map((time) => (
                  <option value={time} key={`close-${time}`}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
