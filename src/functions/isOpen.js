
//Function to check if a shop is open i.e. that the current time falls within the opening time
export default function isOpen(openTimes) {
    const dateNow = new Date();
    const dayNow = dateNow.getDay() === 0 ?  6 : dateNow.getDay() -1; // A number: 0 = Mon, 1 = Tue etc
    const timeNow = dateNow.toLocaleTimeString("en-GB").slice(0, 5); //time in format: hh:mm

    console.log(openTimes[0])
    //Check if shop open today, return false if not
    if (!openTimes[dayNow].open) return false;

    //Check if current time falls between todays opening hours
    return (
      openTimes[dayNow].open < timeNow && openTimes[dayNow].close > timeNow
    );
}