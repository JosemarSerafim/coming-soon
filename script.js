


function count() {
    var dataLimite = new Date("Nov 1,2021 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var day = dataLimite - now;

        var days = Math.floor(day / (1000 * 60 * 60 * 24));
        var hours = Math.floor((day % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((day % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((day % (1000 * 60)) / (1000));

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }, 1000);
}

count();




