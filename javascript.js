function elapsed_time_timer() {
    var end_of_the_summer = new Date('2024-08-31');
    var now = new Date();
    var how_much = now - end_of_the_summer;

	var days = Math.floor(how_much / 86400000); // milisecunde intr.o zi
	var hours = Math.floor((how_much % 86400000) / 3600000); // milisecunde intr.o ora
	var minutes = Math.floor((how_much % 3600000) / 60000); // milisecunde intr.un minut
	var seconds = Math.floor((how_much % 60000) / 1000); // 1000 milisecunde intr.o secunda

document.getElementById("timer").innerText =
 days + " zile, " + hours + " ore, " + minutes + " minute, " + seconds + " secunde";
}
setInterval(elapsed_time_timer, 1000);





window.onload = function() {
    if (window.location.pathname.includes('janghinel.html')) {
        alert("Nimeni nu a fost ranit in videoclipurile de mai jos.");
    }
};
