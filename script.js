const d = new Date();

let days = new Date().getDate();

let months = d.getMonth() + 1;
let years = d.getFullYear();
let newBtn = document.createElement("button");
newBtn.setAttribute('id', 'tryAgain');
var newContent = document.createTextNode("Try another date");
newBtn.appendChild(newContent);

let inDay = document.getElementById('day');
let inMonth = document.getElementById('month');
let inYear = document.getElementById('year');
inDay.addEventListener("focus", () => {
    inDay.value = "";
});
inMonth.addEventListener("focus", () => {
    inMonth.value = "";
});
inYear.addEventListener("focus", () => {
    inYear.value = "";
});
const reload = () => {
    location.reload();
};

let show = () => {
    let inDay = document.getElementById('day').value;
    let inMonth = document.getElementById('month').value;
    let inYear = document.getElementById('year').value;
    let btn = document.getElementById('btn');
    if (days < inDay && months < inMonth) {
        years--;
        months += 11;
        days += 30;

    } else if (months < inMonth) {
        years--;
        months += 12;
    }
    else if (days < inDay) {
        months--;
        days += 30;
    }

    days -= inDay;
    months -= inMonth;
    years -= inYear;
    document.getElementById('age').innerHTML = `you have  ${years} years , ${months} months , ${days} days `;
    document.getElementById('day').disabled = "true";
    document.getElementById('month').disabled = "true";
    document.getElementById('year').disabled = "true";
    btn.style.display = "none";
    document.body.appendChild(newBtn);
    document.getElementById('tryAgain').onclick = reload;
};

