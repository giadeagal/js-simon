// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
docuPrint("printer", "<h1>Simon Game</h1>")
alert("Tieni bene a mente questi numeri:\n\n" + getRandList(1, 100, 5));

// FUNZIONI ++++++++++
function getRandNum(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
};

function getRandList(x, y, a) {
    while (a > y) {
        y = a;
    }
    var list = [];
    while (list.length < a) {
        var randomNum = getRandNum(x, y);
        if (!list.includes(randomNum)) {
            list.push(randomNum);
        }
    } return list
}

function docuPrint(x, y) {
    document.getElementById(x).innerHTML = y;
}