// ============================================
// SCADENZE SMART GDO 2.0
// dashboard.js
// ============================================

"use strict";

const Dashboard = {

    aggiorna() {

        document.querySelector(".scaduti").innerHTML =
            "⚫ Scaduti<br><strong>" +
            Prodotti.scaduti().length +
            "</strong>";

        document.querySelector(".g3").innerHTML =
            "🔴 Entro 3 giorni<br><strong>" +
            Prodotti.filtra(0,3).length +
            "</strong>";

        document.querySelector(".g7").innerHTML =
            "🟠 Entro 7 giorni<br><strong>" +
            Prodotti.filtra(4,7).length +
            "</strong>";

        document.querySelector(".g10").innerHTML =
            "🟡 Entro 10 giorni<br><strong>" +
            Prodotti.filtra(8,10).length +
            "</strong>";

        document.querySelector(".g15").innerHTML =
            "🟢 Entro 15 giorni<br><strong>" +
            Prodotti.filtra(11,15).length +
            "</strong>";

        document.querySelector(".totale").innerHTML =
            "📦 Totale Referenze<br><strong>" +
            Prodotti.totale() +
            "</strong>";

    }

};
