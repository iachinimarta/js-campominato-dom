let end = false;

//Seleziono il button a cui aggiungere l event listener
const btn = document.getElementById('btn');

//Creo un array per le bombe
let bombs = [];

//Genero 16 numeri casuali
for (let i = 0; i < 16; i++) {
    let randomNumbers = Math.floor(Math.random() * 100 + 1);;

    //Imposto il controllo per verificare che non ci siano doppioni nell array
    while(bombs.includes(randomNumbers)){
        randomNumbers = Math.floor(Math.random() * 100 + 1);             
    }

    //Inserisco i 16 numeri nell array "bombs"
    bombs.push(randomNumbers);
}
console.log(bombs);

let score = 0;

//Aggiungo un event listner al btn
btn.addEventListener('click',
    function() {
        

        //Richiamo il container in cui voglio stampare
        const container = document.getElementById('container');

        //Imposto un blocco vuoto che mi funzionerà come un reset
        container.innerHTML = "";
        
        //Imposto un ciclo for per stampare i box fino a n 100
        for (let i = 1; i <= 100; i++) {

            //Creo un div da inserire nel container
            let newBox = document.createElement("div");

            //Aggiungo la classe box al div
            newBox.classList.add("box");

            //Inserisco il box creato in container
            container.append(newBox);

            //Inserisco all interno del box il numero della sua posizione
            newBox.append(i);

            //Aggiungo un event listener al box 
            newBox.addEventListener('click',
                function () {
                    if (end == false) {
                        newBox.classList.add("bg-yellow");
                        score++;
                        console.log("Sei a " + score + " punti!");
                        let counter = document.getElementById("counter");
                        counter.innerHTML = "Il tuo punteggio è: " + score;

                        if (bombs.includes(i)) {
                            newBox.classList.add("check-bomb");
                            console.log("BOOM!");
                            score = score - 1;
                            counter.innerHTML = "HAI PERSO! <br> Il tuo punteggio fino a qui è: " + score;
                            end = true;
                        }
                    }
                }
            );
        }      
    }
);

