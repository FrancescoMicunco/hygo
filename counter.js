let todayDate = new Date();
//data di partenza (20 luglio 2021)
let todaySecond = 9676800 + (todayDate.getSeconds() * 60 * todayDate.getHours())
console.log(todaySecond)
let co2 = document.getElementById("co2")
console.log(co2)
let euri = document.getElementById("euri")
let litri = document.getElementById("litri")
setInterval(() => {
    console.log('today second', todaySecond += 1)
    let counterCo2 = todaySecond * 32.4;
    console.log('counter Co2', Math.floor(counterCo2))
    let counterEuri = todaySecond * 0.00705 * 60;
    let counterLitri = todaySecond * 0.0176 * 60;
    co2.innerText = Math.floor(counterCo2)
    euri.innerText = `${Math.floor(counterEuri)}`
    litri.innerText = `${Math.floor(counterLitri)}`
}, 1000);

console.log(setInterval)