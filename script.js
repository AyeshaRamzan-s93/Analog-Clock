
//setInterval is JS function that runs code repeadtedly after a fixed interval of time
//Date is built-in object used to work with dates and times---contains current time from computer

setInterval(() => {
    d = new Date();

    console.log(d.toDateString());

    hour = d.getHours();             //(0 - 23)
    minute = d.getMinutes();         //(0 - 59)    
    second= d.getSeconds();          //(0 - 59)

    hrotation = (hour % 12) * 30 + minute/2;      // %12 to convert 24 hour format to 12 hour format
    mrotation = 6 * minute;
    srotation = 6 * second;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000)


// There are 60 minutes on a clock.
// A full circle is 360 degrees.
// Each minute = 360 / 60 = 6 degrees.
// IT rotates the minute hand.

// Same logic as minutes.
// 60 seconds = full circle.
// Each second = 6 degrees.
// it rotates the second hand.