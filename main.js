const form = document.getElementById('a');


 function isBhigherThanB() {
    let campoB = document.getElementById('b');
    if (form >= campoB) {
    return alerta ('Dados válidos, pode prosseguir')
    }

 }

/*form.addEventListener('submit', function(e){
    e.validate(isBhigherThanA);

    let campoA = document.getElementById('a');
    if (isBhigherThanA(campoA.value) === false) {
        return alert('Dados inválidos')
    }
    isBhigherThanB(campoB.value) === true
})*/





console.log(form);