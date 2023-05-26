// ex1

let timeout = setTimeout(function(){
    alert("Hello World!");
}, 42000);

// ex2

let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let secondes = date.getSeconds();

console.log(date)

let intervalId = setInterval(alert(date), 42000);

// ex3

let times = [1, 2, 3];

setTimeout(() => {
  console.log(times[0]);// Affiche le délai du premier setTimeout
  
  setTimeout(() => {
    console.log(times[1]);// Affiche le délai du deuxième setTimeout
    
    setTimeout(() => {
      console.log(times[2]);// Affiche le délai du troisième setTimeout
    }, times[2] * 1000);// Utilise le délai du troisième setTimeout en secondes
    
  }, times[1] * 1000);// Utilise le délai du deuxième setTimeout en secondes
  
}, times[0] * 1000);// Utilise le délai du premier setTimeout en secondes

// ex4

let numbers = [32, 43, 56, 24, 78, 42];
let index = 0;

// Définition de la fonction d'affichage
function displayNumber() {
  // Vérifie si l'index est inférieur à la longueur du tableau
  if (index < numbers.length) {
    // Affiche le nombre correspondant à l'index actuel
    console.log(numbers[index]);
    // Incrémente l'index pour passer au prochain nombre du tableau
    index++;
  } else {
    // Arrête le processus en affichant un message lorsque nous arrivons à la fin du tableau
    clearInterval(interval);
  }
}

// Appelle la fonction d'affichage toutes les secondes (1000 millisecondes)
const interval = setInterval(displayNumber, 1000);
