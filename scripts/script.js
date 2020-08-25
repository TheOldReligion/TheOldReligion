var pokusu = 0;

function ahoj(parametr) {
    alert('Programovani' + parametr);
}

let aktualniCas = new Date();
aktualniCas.getDate

function ukazCas() {
    pokusu = pokusu + 1
    let aktualniCas = new Date();
    let hodin = 'Hodin:' + aktualniCas.getHours();
    let minut = 'Minut:' + aktualniCas.getMinutes();
    let vterin = 'Vterin:' + aktualniCas.getSeconds();
    let spojenyCas = hodin + '<br />' + minut + '<br />' + vterin;
    document.getElementById('hodiny').innerHTML = spojenyCas;
}

