function timeTo24h(time) {
    const [timeNumbers, timeLetters] = time.split(" ");
    const [hours, minutes] = timeNumbers.split(':');
    let hoursInt = parseInt(hours);

    
    if (hoursInt != 12) {
        hoursInt = timeLetters.toLowerCase() === 'am' ? hoursInt : hoursInt + 12
    } else {
        hoursInt = timeLetters.toLowerCase() === 'am' ? 0 : hoursInt
    }
    
    return `${hoursInt.toString().padStart(2, '0')}:${minutes}`
}


//Function to check if a shop is open i.e. that the current time falls within the opening time
export default function isOpen(openTimes) {
    const dateNow = new Date();
    const dayNow = dateNow.toLocaleDateString("en-US", {weekday:"long"})
    // const dayNow = dateNow.getDay() === 0 ?  6 : dateNow.getDay() -1; // A number: 0 = Mon, 1 = Tue etc
    const timeNow = dateNow.toLocaleTimeString("en-GB").slice(0, 5); //time in format: hh:mm

    //Check if shop open today, return false if not
    if (!openTimes[dayNow].open) return false;


    //convert open and close times to 24 hour time
    const openToday = timeTo24h(openTimes[dayNow].openTime)
    const closeToday = timeTo24h(openTimes[dayNow].closeTime)

    //Check if current time falls between todays opening hours
    return (
      openToday < timeNow && closeToday > timeNow
    );
}