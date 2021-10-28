// Rappel des types de données
let string = "Chaine de caractère";
let number = "25";
let boolean = true;
let maVariable; // type undefined

// Tableaux toujours avec des []
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "samia",
    age: 31,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nico",
    age: 33,
    technos: ["php", "React", "NodeJs"],
    admin: false,
  },
];

// console.log(data[2].pseudo);

//----------------------------------------------------------
// Les structures de controle
//----------------------------------------------------------
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //Valeur si faux
}

//While
let w = 0;

while (w < 10) {
  w++;
  //   console.log(`La valeur de w est de : ${w}`);
}

// Do While
let i = 0;
do {
  i++;
  //   console.log(i);
} while (i < 5);
// Les boucles for
for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li>`;
}

// on déclare la valeur de i  ( i = 0;) | jusqu'ou on boucle ( i < data.length) | on incrémente i si la condition 2 n'est pas remplie (i++)
for (i = 0; i < data.length; i++) {
  //   console.log(data[i]);
  //   document.body.innerHTML += `<h2> ${data[i].pseudo} </h2>`;
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "purple";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
//---------------------------------------------------------
// Méthode String
let string2 = "Javascript est un langage orienté objet";

// console.log(eval(parseInt("1") + 2));
// console.log(parseInt("42"));
// console.log(isNaN(string2));
// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage")); // retourne au -1 si il ne connait pas le terme

// let newString = string2.slice(2);
// let newString = string2.slice(5, 17); ne garde les caractères compris que entre les deux chiffres
// console.log(newString);

// console.log(string2.split(" ")); permet de couper une chaine de caractère

// console.log(string2.toLowerCase()); permet de tout mettre en minuscule
// console.log(string2.toUpperCase()); permet de tout mettre en majuscule

// console.log(string2.replace("Javascript", "PHP")); remplace un terme par un autre

//-----------------------------------------------------------
//Méthodes Numbers
//-----------------------------------------------------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1)); donne le nombre avec première chiffre après la virgule
// console.log(parseInt("43")); donne le nombre même écrit en string
// console.log(parseInt(numberString)); donne juste le nombre avant la virgule
// console.log(parseFloat(numberString)); donne le nombre avec la virgule

//Méthodes Math

// console.log(Math.PI);
// console.log(Math.round(4.5)); arrondi a l'entier
// console.log(Math.floor(4.9)); arrondi à l'entier le plus bas
// console.log(Math.ceil(4.1));  arrondi à l'entier le plus haut

// console.log(Math.floor(Math.random() * 50));

//-------------------------------------------------------------
// Méthodes Arrays
//-------------------------------------------------------------
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join("-"));
