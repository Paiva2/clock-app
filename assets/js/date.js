export default class mainDate {
  constructor() {
    this.date = new Date();
    this.days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  }
  get _hours() {
    return this.date.getHours();
  }
  get _minutes() {
    return this.date.getMinutes();
  }
  get _seconds() {
    return this.date.getSeconds();
  }
  get _day() {
    return this.date.getDate();
  }

  get _dayName() {
    return this.days[new Date().getDay()];
  }

  get _month() {
    return this.months[new Date().getMonth()];
  }
  get _year() {
    return this.date.getFullYear();
  }
}
