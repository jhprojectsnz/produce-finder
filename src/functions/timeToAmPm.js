export default function timeToAmPm(time) {
    let [hours, minutes] = time.split(':');
    const ampm = hours >=12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; //convert 00 to 12 am

    return `${hours}:${minutes} ${ampm}`
}