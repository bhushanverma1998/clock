// declaration
let hourDial = document.getElementById('hours');
let minDial = document.getElementById('min');
let secDial = document.getElementById('sec');
let digitalDiv=document.getElementById('clock-digital');

setInterval(() => {
    let time = new Date()
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let hrotation= 30*hour+min/2;
    let minrotation= 6*min;
    let secrotation= 6*sec;

    hourDial.style.transform=`rotate(${hrotation}deg)`;
    minDial.style.transform=`rotate(${minrotation}deg)`;
    secDial.style.transform=`rotate(${secrotation}deg)`;

    let unittime=hour>12?"PM":"AM";
    let newhr=hour>12?hour%10-2:hour;
    newhr=newhr<10?`0${newhr}`:newhr;
    let newSec=sec<10?`0${sec}`:sec;
    let newMin=min<10?`0${min}`:min;
    digitalDiv.innerText=`${newhr} : ${newMin} : ${newSec} : ${unittime}`;
}, 1000);