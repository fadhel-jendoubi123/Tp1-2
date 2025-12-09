        let taches = [];
        console.log("Bienvenue dans l'application de gestion de tâches !");

        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        const searchInput = document.getElementById('searchInput');
        const clearAllBtn = document.getElementById('clearAllBtn');
        const totalCount = document.getElementById('totalCount');
        const activeCount = document.getElementById('activeCount');
        const completedCount = document.getElementById('completedCount');

        function ajouterTache() {
            const texte = taskInput.value.trim();
            
            if (texte === '') {
                alert('Veuillez entrer une tâche !');
                return;
            }

            const nouvelleTache = {
                id: Date.now(),
                texte: texte,
                terminee: false
            };

            taches.push(nouvelleTache);
            taskInput.value = '';
            
            sauvegarderTaches();
            afficherTaches();
        }

        function supprimerTache(id) {
            taches = taches.filter(tache => tache.id !== id);
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

        function afficherTaches(filtreRecherche = '') {
            taskList.innerHTML = '';

            const tachesFiltrees = taches.filter(tache => 
                tache.texte.toLowerCase().includes(filtreRecherche.toLowerCase())
            );

            if (tachesFiltrees.length === 0) {
                taskList.innerHTML = '<div class="empty-message">Aucune tâche à afficher</div>';
            } else {
                tachesFiltrees.forEach(tache => {
                    const li = document.createElement('li');
                    li.className = 'task-item';

                    const span = document.createElement('span');
                    span.className = 'task-text';
                    if (tache.terminee) {
                        span.classList.add('completed');
                    }
                    span.textContent = tache.texte;

                    const completeBtn = document.createElement('button');
                    completeBtn.className = 'task-btn complete-btn';
                    completeBtn.textContent = tache.terminee ? '↩️' : '✓';
                    completeBtn.onclick = () => terminerTache(tache.id);

                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'task-btn delete-btn';
                    deleteBtn.textContent = '✕';
                    deleteBtn.onclick = () => supprimerTache(tache.id);

                    li.appendChild(span);
                    li.appendChild(completeBtn);
                    li.appendChild(deleteBtn);
                    taskList.appendChild(li);
                });
            }

            mettreAJourStats();
        }

        function mettreAJourStats() {
            const total = taches.length;
            const terminees = taches.filter(t => t.terminee).length;
            const enCours = total - terminees;

            totalCount.textContent = total;
            activeCount.textContent = enCours;
            completedCount.textContent = terminees;
        }

        function sauvegarderTaches() {
            const tachesJSON = JSON.stringify(taches);
            localStorage.setItem('taches', tachesJSON);
        }

        function chargerTaches() {
            const tachesJSON = localStorage.getItem('taches');
            if (tachesJSON) {
                taches = JSON.parse(tachesJSON);
                afficherTaches();
            }
        }

        function toutSupprimer() {
            if (taches.length === 0) {
                alert('Aucune tâche à supprimer !');
                return;
            }

            if (confirm('Voulez-vous vraiment supprimer toutes les tâches ?')) {
                taches = [];
                sauvegarderTaches();
                afficherTaches();
            }
        }

        addBtn.addEventListener('click', ajouterTache);

        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                ajouterTache();
            }
        });

        searchInput.addEventListener('input', (e) => {
            afficherTaches(e.target.value);
        });

        clearAllBtn.addEventListener('click', toutSupprimer);

        chargerTaches();
