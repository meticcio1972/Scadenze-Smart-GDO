// ============================================
// SCADENZE SMART GDO 2.0
// dashboard.js
// ============================================

"use strict";

const Dashboard = {

    aggiorna() {

        this.aggiornaScaduti();
        this.aggiorna3Giorni();
        this.aggiorna7Giorni();
        this.aggiorna10Giorni();
        this.aggiorna15Giorni();
        this.aggiornaOfferte();
        this.aggiornaTotale();

    },

    aggiornaScaduti() {

        const totale = Prodotti.scaduti().length;

        document.querySelector(".scaduti").innerHTML =
            `⚫ Scaduti<br><strong>${totale}</strong>`;

    },

    aggiorna3Giorni() {

        const totale = Prodotti.filtra(0,3).length;

        document.querySelector(".g3").innerHTML =
            `🔴 Entro 3 giorni<br><strong>${totale}</strong>`;

    },

    aggiorna7Giorni() {

        const totale = Prodotti.filtra(4,7).length;

        document.querySelector(".g7").innerHTML =
            `🟠 Entro 7 giorni<br><strong>${totale}</strong>`;

    },

    aggiorna10Giorni() {

        const totale = Prodotti.filtra(8,10).length;

        document.querySelector(".g10").innerHTML =
            `🟡 Entro 10 giorni<br><strong>${totale}</strong>`;

    },

    aggiorna15Giorni() {

        const totale = Prodotti.filtra(11,15).length;

        document.querySelector(".g15").innerHTML =
            `🟢 Entro 15 giorni<br><strong>${totale}</strong>`;

    },

    aggiornaOfferte() {

        const totale = offerte.length;

        document.querySelector(".offerta").innerHTML =
            `🔵 Offerte<br><strong>${totale}</strong>`;

    },

    aggiornaTotale() {

        const totale = Prodotti.totale();

        document.querySelector(".totale").innerHTML =
            `📦 Totale Referenze<br><strong>${totale}</strong>`;

    }

};

// ============================================
// Compatibilità con il vecchio progetto
// ============================================

function aggiornaDashboard() {

    Dashboard.aggiorna();

}
