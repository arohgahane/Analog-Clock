// 12hr = 306deg
// 1hr = 360/12 = 30deg
// h hours = 30h deg
// h hours = 30h+ m/2

// minute
// 60min = 30deg
// 1min = 30/60= 1/2deg
// m mins = (1/2)m deg

// 60min = 360deg
// 1min =360/60 = 6deg
// m min = 6m deg

// 60sec = 360deg
// 1sec = 360/60 = 6deg
// s secs = 6s deg

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


// write clock rotation code here
function displayTime(){
    let date = new Date();

    // console.log(date);
    // Get Hr, min, sec from Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // calcaulate rotation here 

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000); //1000ms = 1sec