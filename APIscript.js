        const wait = (ms) => new Promise(res => setTimeout(res, ms));

        function exercice8() {
            const output = document.getElementById('output8');
            output.innerHTML = 'Début';
            
            console.log("Début");
            
            wait(2000).then(() => {
                console.log("Fin (après 2 secondes)");
                output.innerHTML = 'Début<br>Fin (après 2 secondes)';
            });
        }

        async function getPosts() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const posts = await response.json();
                console.log("Titres des 5 premiers posts :");
                posts.slice(0, 5).forEach(post => {
                    console.log("-", post.title);
                });
                return posts.slice(0, 5);
            } catch (error) {
                console.error("Erreur lors du fetch :", error);
                throw error;
            }
        }

        async function exercice9() {
            const output = document.getElementById('output9');
            output.innerHTML = 'Chargement...';
            
            try {
                const posts = await getPosts();
                
                let html = 'Titres des 5 premiers posts :<br>';
                posts.forEach(post => {
                    html += `- ${post.title}<br>`;
                });
                
                output.innerHTML = html;
            } catch (error) {
                output.innerHTML = `Erreur : ${error.message}`;
            }
        }