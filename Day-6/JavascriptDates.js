function getDayName(dateString) {
    let dayName;
    // Write your code here
    var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date(dateString)

    dayName = day_names[date.getDay()]
    return dayName;
}
