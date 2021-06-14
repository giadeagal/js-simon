// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
docuPrint("printer", "<h1>Simon Game</h1>");

// INPUT**********
var simonList = getRandList(1, 100, 5);
alert("Tieni bene a mente questi numeri:\n\n" + simonList);


// ELABORAZIONE**********

var counter = 30;
var countdown = setInterval(function(){
  docuPrint("text", counter);
  counter--;
  if (counter <= 0) {
    clearInterval(countdown);
    var checked = memoCheck(simonList);
    var loseText = " Non ti sei ricordato nessuno dei " + simonList.length + " numeri indicati" +  ", le risposte corrette erano: " + simonList;
    var winText = "Complimenti! Ti sei ricordato tutti e " +  simonList.length + "i numeri indicati! (" + simonList + ")";
    var halfWinText = "Ti sei ricordato " + checked.length + " numeri su " + simonList.length + ", ecco la lista completa : " + simonList;
    if (checked.length == 0) {
        docuPrint("text", loseText);
    } else if (checked.length == simonList.length) {
        docuPrint("text", winText);
    } else {
        docuPrint("text", halfWinText);
    }
  } 
}, 1000);


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

function memoCheck(a) {
    x = [];
    var askNum;
    console.log(a)
    for (var i = 0; i < a.length; i++) {
        askNum = parseInt(prompt("inserisci uno dei numeri da ricordare"));
        if (a.includes(askNum)) {
            x.push(askNum);
        }
    } return x;
}