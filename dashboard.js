// ===============================
// DASHBOARD.JS
// Aggiornamento contatori
// ===============================

function aggiornaDashboard() {

    let scaduti = 0;
    let g3 = 0;
    let g7 = 0;
    let g10 = 0;
    let g15 = 0;

    prodotti.forEach(p => {

        if (p.giorni < 0)
            scaduti++;

        else if (p.giorni <= 3)
            g3++;

        else if (p.giorni <= 7)
            g7++;

        else if (p.giorni <= 10)
            g10++;

        else if (p.giorni <= 15)
            g15++;

    });

    document.querySelector(".scaduti").innerHTML =
        "⚫ Scaduti<br><strong>" + scaduti + "</strong>";

    document.querySelector(".g3").innerHTML =
        "🔴 Entro 3 giorni<br><strong>" + g3 + "</strong>";

    document.querySelector(".g7").innerHTML =
        "🟠 Entro 7 giorni<br><strong>" + g7 + "</strong>";

    document.querySelector(".g10").innerHTML =
        "🟡 Entro 10 giorni<br><strong>" + g10 + "</strong>";

    document.querySelector(".g15").innerHTML =
        "🟢 Entro 15 giorni<br><strong>" + g15 + "</strong>";

    document.querySelector(".offerta").innerHTML =
        "🔵 Offerta<br><strong>" + offerte.length + "</strong>";

    document.querySelector(".totale").innerHTML =
        "📦 Totale Referenze<br><strong>" +
        prodotti.length +
        "</strong>";
}
