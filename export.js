function esportaVisualizzati(){
alert("Da esportare: " + prodottiVisualizzati.length);
  
    if(prodottiVisualizzati.length === 0){
        alert("Nessun prodotto da esportare");
        return;
    }

    let csv =
    "Codice;Prodotto;Scadenza;Giorni\n";

    prodottiVisualizzati.forEach(p => {

        csv +=
        p.codice + ";" +
        p.descrizione + ";" +
        p.scadenza + ";" +
        p.giorni + "\n";

    });

    const blob = new Blob(
        [csv],
        {
            type:"text/csv;charset=utf-8;"
        }
    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "Scadenze_GDO.csv";

    link.click();

    alert(
        prodottiVisualizzati.length +
        " prodotti esportati"
    );
}
