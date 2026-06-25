function mostraStorico(codice){

    const storico = storicoModifiche[codice];
   alert(JSON.stringify(storicoModifiche));
    if(!storico || storico.length === 0){
        alert("Nessuna modifica registrata");
        return;
    }

    let testo = "";

    storico.forEach((s,i)=>{
        testo +=
        (i+1) + ") " +
        s.vecchia +
        " → " +
        s.nuova +
        "\n" +
        s.dataModifica +
        "\n\n";
    });

    alert(testo);
}
