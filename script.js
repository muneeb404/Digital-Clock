const clock = document.getElementById("clock");


function showTime(){

    let current = new Date().toLocaleTimeString([], {hour12: true});
    current = current.toUpperCase();
    document.getElementById("clock").innerText = current;
    // console.log(current);

};
setInterval(showTime, 1000);
