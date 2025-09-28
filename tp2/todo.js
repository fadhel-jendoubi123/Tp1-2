console.log("Bienvenue dans la To-Do List complète !");

let taches = []; 
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function ajouterTache() {
  const texte = input.value.trim();
  if (texte === "") return;

  const tache = {
    id: Date.now(),       
    texte: texte,
    terminee: false
  };

  taches.push(tache);

  sauvegarderTaches();

  afficherTaches();

  input.value = "";
}

function supprimerTache(id) {
  taches = taches.filter(t => t.id !== id);
  sauvegarderTaches();
  afficherTaches();
}

function terminerTache(id) {
  const tache = taches.find(t => t.id === id);
  if (tache) {
    tache.terminee = !tache.terminee;
    sauvegarderTaches();
    afficherTaches();
  }
}

function afficherTaches() {
  taskList.innerHTML = "";

  taches.forEach(tache => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tache.texte;
    if (tache.terminee) span.classList.add("completed");
    li.appendChild(span);

    const actions = document.createElement("div");
    actions.className = "actions";


    const terminerBtn = document.createElement("button");
    terminerBtn.textContent = "✔";
    terminerBtn.onclick = () => terminerTache(tache.id);
    actions.appendChild(terminerBtn);
    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "🗑";
    supprimerBtn.onclick = () => supprimerTache(tache.id);
    actions.appendChild(supprimerBtn);

    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

function sauvegarderTaches() {
  localStorage.setItem("taches", JSON.stringify(taches));
}

function chargerTaches() {
  const data = localStorage.getItem("taches");
  if (data) {
    taches = JSON.parse(data);
    afficherTaches();
  }
}

addBtn.addEventListener("click", ajouterTache);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    ajouterTache();
  }
});

chargerTaches();

function viderListe() {
  taches = [];
  sauvegarderTaches();
  afficherTaches();
}