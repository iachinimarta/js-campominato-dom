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
                    
                    //Imposto una condizione per non stampare due volte lo stesso numero del box nella console.log
                    if (!newBox.classList.contains('bg-yellow')) {
                        console.log('Hai selezionato il numero: ' + i);
                    }

                    //Se nell array delle bombe è presente un numero uguale a un numero di un box
                    if (bombs.includes(i)) {
                        console.log("BOOM");
                        newBox.classList.add("check-bomb");
                    } else {
                        //Altrimenti lo sfondo cambia in giallo e stampo il numero del box scelto in console.log
                        //Con "toggle" = se la classe c'è, la toglie. Se non c'è, la aggiunge.
                        newBox.classList.toggle("bg-yellow");
                    }
                }
            );
        }      
    }
);

