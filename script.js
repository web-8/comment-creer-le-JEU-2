const btnRed = document.getElementById('btn-red'); //je sélectionne et je stocke
console.log(btnRed, "bouton rouge"); //je vérifie
const btnBlue = document.getElementById('btn-blue'); //je sélectionne et je stocke
console.log(btnBlue, "bouton bleu"); //je vérifie

let titre = document.getElementById('titre');
let compteur = 0;
console.log(compteur, "compteur au démarrage");

btnRed.addEventListener('click', function(){
    console.log('cercle rouge cliqué');
    add(); //je rappelle ma fonction
});
btnBlue.addEventListener('click', function(){
    console.log('cercle bleu cliqué');
    add(); //je rappelle ma fonction
});

function add(){ 
    compteur = compteur + 1; 
    console.log(compteur, "compteur après incrémentation"); 
    titre.innerText = compteur; //je rajoute ici
}
    //pour le chronomètre

setTimeout(function(){
    btnRed.remove(); //les cercles disparaissent à la fin du jeu
    btnBlue.remove();
    console.log('fin du chronomètre !');
}, 10000); //délai en millisecondes soit




