// ============================================
// SCADENZE SMART GDO 2.0
// ai.js
// Assistente Intelligente
// ============================================

"use strict";

const AI = {

    attiva: true,

    // ==========================
    // BRIEFING GIORNALIERO
    // ==========================

    briefing() {

        return {

            data: new Date().toLocaleDateString(),

            scaduti: Prodotti.scaduti().length,

            entro3: Prodotti.filtra(0,3).length,

            entro7: Prodotti.filtra(4,7).length,

            offerte: Offerte.totaleAttive(),

            suggerimenti: this.suggerimenti()

        };

    },

    // ==========================
    // SUGGERIMENTI
    // ==========================

    suggerimenti() {

        const lista = [];

        if (Prodotti.scaduti().length > 0) {

            lista.push(

                "Controllare immediatamente i prodotti già scaduti."

            );

        }

        if (Prodotti.filtra(0,3).length > 20) {

            lista.push(

                "Valutare offerte sui prodotti in scadenza."

            );

        }

        if (Offerte.totaleAttive() === 0) {

            lista.push(

                "Nessuna offerta attiva."

            );

        }

        return lista;

    },

    // ==========================
    // PRIORITA'
    // ==========================

    priorita() {

        if (Prodotti.scaduti().length > 0)

            return "CRITICA";

        if (Prodotti.filtra(0,3).length > 10)

            return "ALTA";

        if (Prodotti.filtra(4,7).length > 10)

            return "MEDIA";

        return "BASSA";

    },

    // ==========================
    // ANALISI
    // ==========================

    analizza() {

        return {

            prodotti: Prodotti.totale(),

            offerte: Offerte.totale(),

            eventi: Registro.totale(),

            priorita: this.priorita()

        };

    },

    // ==========================
    // DOMANDE (placeholder)
    // ==========================

    domanda(testo) {

        Registro.registraEvento({

            categoria: "AI",

            operazione: "DOMANDA",

            livello: "INFO",

            note: testo

        });

        return "Funzione disponibile nella prossima versione.";

    }

};
