//Seleziono il button a cui aggiungere l event listener
const btn = document.getElementById('btn');

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
                    
                    //Al click lo sfondo cambia in giallo e stampo il numero del box scelto in console.log
                    //Aggiungo "toggle" = se la classe c'è, la toglie. Se non c'è, la aggiunge.
                    newBox.classList.toggle("bg-yellow");
                    
                }
            );
        }
    }
);