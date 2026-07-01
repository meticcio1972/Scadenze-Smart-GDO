// ============================================
// SCADENZE SMART GDO 2.0
// ricerca.js
// ============================================

"use strict";

const Ricerca = {

    // ==========================
    // TESTO LIBERO
    // ==========================

    testo(testo) {

        if (!testo) return Prodotti.tutti();

        testo = testo.toLowerCase();

        return Prodotti.tutti().filter(p =>

            p.codice.toLowerCase().includes(testo) ||

            p.descrizione.toLowerCase().includes(testo)

        );

    },

    // ==========================
    // CODICE
    // ==========================

    codice(codice) {

        return Prodotti.tutti().filter(

            p => p.codice === codice

        );

    },

    // ==========================
    // REPARTO
    // ==========================

    reparto(reparto) {

        return Prodotti.tutti().filter(

            p => p.reparto === reparto

        );

    },

    // ==========================
    // SCADENZE
    // ==========================

    giorni(min, max) {

        return Prodotti.tutti().filter(

            p => p.giorni >= min &&
                 p.giorni <= max

        );

    },

    // ==========================
    // SCADUTI
    // ==========================

    scaduti() {

        return Prodotti.scaduti();

    },

    // ==========================
    // OFFERTE
    // ==========================

    offerte() {

        return Offerte.attive();

    },

    // ==========================
    // MULTIFILTRO
    // ==========================

    filtra(filtro = {}) {

        let risultati = Prodotti.tutti();

        if (filtro.reparto) {

            risultati = risultati.filter(

                p => p.reparto === filtro.reparto

            );

        }

        if (filtro.min !== undefined &&
            filtro.max !== undefined) {

            risultati = risultati.filter(

                p => p.giorni >= filtro.min &&
                     p.giorni <= filtro.max

            );

        }

        if (filtro.testo) {

            const testo = filtro.testo.toLowerCase();

            risultati = risultati.filter(

                p =>

                p.codice.includes(testo) ||

                p.descrizione
                    .toLowerCase()
                    .includes(testo)

            );

        }

        return risultati;

    }

};
