import "./open-hours-form.css";

import React from "react";

export default function OpenHoursForm({ openTimes, dispatch }) {
  // This function is called when the open/closed check box is clicked
  function handleCheckChange(day) {
    // Create new object that contains the updated data for the day that has been clicked
    // Open times reset to an empty string
    const updatedDay = {
      [day]: { open: !openTimes[day].open, openTime: "", closeTime: "" },
    };

    // Use dispatch to send the updated day data to the reducer
    dispatch({
      type: "openTime",
      updatedDayData: updatedDay,
    });
  }

  // This function is run when a new time is selected from the open times drop down selector
  function handleSelectChange(e, day) {
    // Set a variable to the time that has just been selected
    const newTime = e.target.value;
    // Define whether this time is for opening or closing
    const openOrClose = e.target.id === "openTimeSelect" ? "open" : "close";
    // Create an updated object for the specfic day for which the open/close time has been changed
    const updatedDay =
      openOrClose === "open"
        ? {
            [day]: {
              open: true,
              openTime: newTime,
              closeTime: openTimes[day].closeTime,
            },
          }
        : {
            [day]: {
              open: true,
              openTime: openTimes[day].openTime,
              closeTime: newTime,
            },
          };

    // Use dispatch to send the updated day data to the reducer
    dispatch({
      type: "openTime",
      updatedDayData: updatedDay,
    });
  }

  // An array of times to populate the select options
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
    <div className="openhours-form">
      {Object.keys(openTimes).map((day) => (
        <div className="openhours-day-container" key={day}>
          <p>{day}</p>
          <input
            type="checkbox"
            className="openhours-checkbox"
            name={day}
            checked={openTimes[day].open}
            onChange={() => handleCheckChange(day)}
          />
          {openTimes[day].open && (
            <div className="openhours-times-container">
              <select
                id="openTimeSelect"
                onChange={(e) => handleSelectChange(e, day)}
                value={openTimes[day].openTime}
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
                value={openTimes[day].closeTime}
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
