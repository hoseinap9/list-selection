const pound = document.querySelector('.weight') ;
const result = document.querySelector('.result') ;

document.querySelector(".weight").onchange = function Converter(event) {

    const kg = (event.target.value * 0.453592).toFixed(2) ;
    result.innerHTML = kg
    
}