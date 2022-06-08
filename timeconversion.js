// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(string) {
  const format = string.substring(8);
  let hour = string.substring(0, 2);
  const seconds = string.substring(2, 8);
  if (format == "AM") {
    if (hour == 12) {
      hour = 00;
    } else hour = hour;
  }
  if (format == "PM") {
    if (hour == 12) {
      hour = 12;
    } else hour = +hour + 12;
  }
  return hour + seconds;
}

console.log(timeConversion("11:53:00PM"));
