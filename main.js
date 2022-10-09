// 1 meter = 3.281 feet
// 0.3048 meter = 1 feet
// 1 liter = 0.264 gallon
// 3.7878 = 1 
// 1 kilogram = 2.204 pound
// 0.4537 = 1

const inp = document.getElementById("inp")
const btn = document.getElementById("convert-btn")
const len = document.getElementById("length")
const vol = document.getElementById("volume")
const mass = document.getElementById("mass")

btn.addEventListener("click", function() {
    let myValue = parseInt(inp.value)
    let mF = metterToFeet(myValue)
    let lG = literToGallon(myValue)
    let kP = kiloToPound(myValue)
    renderMF(mF, myValue)
    renderLG(lG, myValue)
    renderKP(kP, myValue)
})
function metterToFeet(value) {
    let numbers = []
    let num = value * 3.281
    numbers.push(num.toFixed(3))
    num = value * 0.3048
    numbers.push(num.toFixed(3));
    return numbers
}
function literToGallon(value) {
    let numbers = [];
    let num = value * 0.264;
    numbers.push(num.toFixed(3));
    num = value * 3.7878;
    numbers.push(num.toFixed(3));
    return numbers;
}
function kiloToPound(value){
    let numbers = [];
    let num = value * 2.204;
    numbers.push(num.toFixed(3));
    num = value * 0.4537;
    numbers.push(num.toFixed(3));
    return numbers;
}
function renderMF(mf, value) {
    len.textContent = `
        ${value} meters = ${mf[0]} feet | ${value} feet = ${mf[1]} meters
    `;
}
function renderLG(lg, value) {
    vol.textContent = `
        ${value} liters = ${lg[0]} gallons | ${value} gallons = ${lg[1]} liters
    `;
}
function renderKP(kp, value) {
    mass.textContent = `
        ${value} kilos = ${kp[0]} pounds | ${value} pounds = ${kp[1]} kilos
    `;
}
