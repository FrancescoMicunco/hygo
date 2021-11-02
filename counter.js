let todayDate = new Date();
//data di partenza (20 luglio 2021)
let todaySecond = 9676800 + (todayDate.getSeconds() * 60 * todayDate.getHours())
let co2 = document.getElementById("co2")
let euri = document.getElementById("euri")
let litri = document.getElementById("litri")
setInterval(() => {
    todaySecond += 1
    let counterCo2 = todaySecond * 32.4;
    let counterEuri = todaySecond * 0.00705 * 60;
    let counterLitri = todaySecond * 0.0176 * 60;
    console.log(counterEuri)
    co2.innerText = `${Math.floor(counterCo2)}`
    euri.innerText = `${Math.floor(counterEuri)}`
    litri.innerText = `${Math.floor(counterLitri)}`
}, 1000);