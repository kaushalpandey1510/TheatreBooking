var today = new Date();
var element = document.getElementById("date").innerHTML = today.toDateString();

var hour = today.getHours();
var greet = "";
if (hour >= 18) {
    greet === " Good Evening";
} else if (hour >= 12 && hour < 18) {
    greet === " Good Afternoon";
} else {
    greet === " Good Morning";
}

document.getElementById("greets").innerHTML = greet;
