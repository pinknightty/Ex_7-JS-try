const form = document.getElementById('form');
const letterA = document.getElementById('a');
const letterB = document.getElementById('b');
const msgPos = document.getElementById('msg-positiva');
const msgNeg = document.getElementById('msg-negativa');


 function isBhigherThanA(letterA, letterB) {

    return letterB > letterA;

 }

 form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarNumeros = isBhigherThanA(letterA.valueAsNumber, letterB.valueAsNumber);
        if (validarNumeros) {
            msgPos.style.display = 'block';
            letterA.value = '';
            letterB.value = '';
        }
 })

 letterB.addEventListener('keyup', function () {
    let validarNumeros = isBhigherThanA(letterA.valueAsNumber, letterB.valueAsNumber);
    if (!validarNumeros) {
        msgNeg.style.display = 'block';
        msgPos.style.display = 'none';
    } else {
        msgNeg.style.display = 'none';
    }

 })
