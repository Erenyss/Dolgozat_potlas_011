/*
* File: app.js
*Author: Lieszkofszki Norbert
*Copyright: 2024, Lieszkofszki Norbert
*Group: Szoft 1/I/N
*Date: 2024-03-14
* Github: https://github.com/Erenyss
* Licenc: GNU GPL
*/

const axisA = document.querySelector("#input_a")
const axisB = document.querySelector("#input_b")
const axisC = document.querySelector("#input_c")
const terfogInput = document.querySelector("#Terfog")
const calcButton = document.querySelector("#calcButton")


calcButton.addEventListener('click', ()=>{startCalc()})

function startCalc(){
    const A = Number(axisA.value)
    const B = Number(axisB.value)
    const C = Number(axisC.value)
    const terfog = calcTerfog(A,B,C)
    console.log("Térfogat: " + terfog)
    terfogInput.value = terfog
}

function calcTerfog(axisA,axisB,axisC){

    const calculated = (((4/3) * Math.PI) * axisA * axisB * axisC)

    return calculated
}