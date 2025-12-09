/* exercice 1 */
{
    var x=20;
    let y=30;
    const pi=3.14;
    console.log(x);
    console.log(y);
    console.log(pi);

}
console.log(x);
console.log(y);
console.log(pi);
// les accolades de porté ne donne pas accés a x , y  et pi au console.log
// si on affecte a une constante on recevoit cet erreur  : Assignment to constant variable

/*exercice 2 */
//fonction somme en fleche
const sommeFleche=(a,b) => a+b;
//fonction somme en syntaxe return explicite

function sommeClassique(a,b){
    return(Number(a)+Number(b));
}
// exercice 3 
var x, y ;

const user = { name: "Noor", age: 10, city: "Tunis" };

x= user.name;
y=user.age;
console.log(x); 
console.log(y); 
// exercice 4 
A=[1 , 2, 3];
B=[4 , 5 ,6];
C=[...A,...B];

console.log(C);
const user1 = { name: "noor", age: 10, city: "Tunis" };

const copyUser1 = { ...user1 };

copyUser1.age = 15;

console.log("Objet original:", user1);      
console.log("Copie modifiée:", copyUser1);   

// exercice 5
const livre={
    titre:"Book",
    auteur:"Charles",
    annee : "2025",
     // méthode qui retourne une phrase descriptive
  getInfo() {
    return `${this.titre}, écrit par ${this.auteur} en ${this.annee}.`;
  }
};


console.log(livre.getInfo());

// exercice 6

class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }
  getMention() {
    if (this.note >= 16) return "Très bien";
    if (this.note >= 14) return "Bien";
    if (this.note >= 10) return "Passable";
    return "Échec";
  }
}
const etudiants = [
   new Etudiant("Noor", 17),
  new Etudiant("Ali", 13),
  new Etudiant("Sara", 8)
];

etudiants.forEach(et => {
console.log`${et.nom} : ${et.getMention()}`);  
}
// exercice 7
const notes = [12, 5, 17, 9, 20];

const moyenne = notes.reduce((acc, val) => acc + val, 0) / notes.length;
console.log("moyenne :", moyenne);

const notesDesc = [...notes].sort((a, b) => b - a);
console.log("tri décroissant :", notesDesc);
const notesFiltrees = notes.filter(note => note >= 10);
console.log("notes >= 10 :", notesFiltrees);

// exercice 8
const wait = (ms) => new Promise(res => setTimeout(res, ms));

console.log("Début");

wait(2000).then(() => {
  console.log("Fin (après 2 secondes)");
});
// exercice 9 
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    console.log("Titres des 5 premiers posts :");
    posts.slice(0, 5).forEach(post => {
      console.log("-", post.title);
    });
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
  }
}
getPosts();


