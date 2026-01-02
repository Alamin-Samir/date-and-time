$(document).ready(function () {

    setInterval(function () {

        let now = new Date();

        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();

        $("#datetime").text(date + " " + time);

    }, 1000);

});
