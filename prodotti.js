// ============================================
// SCADENZE SMART GDO 2.0
// prodotti.js
// ============================================

"use strict";

let prodotti = [];

const Prodotti = {

    lista: [],

    // ==========================
    // CARICA
    // ==========================

    carica(lista = []) {

        this.lista = Utils.clona(lista);

        this.aggiornaGiorni();

    },

    // ==========================
    // RESTITUISCE TUTTI
    // ==========================

    tutti() {

        return this.lista;

    },

    // ==========================
    // CERCA PER CODICE
    // ==========================

    trova(codice) {

        return this.lista.find(

            p => p.codice === codice

        );

    },

    // ==========================
    // AGGIUNGI
    // ==========================

    aggiungi(prodotto) {

        this.lista.push(prodotto);

    },

    // ==========================
    // ELIMINA
    // ==========================

    elimina(codice) {

        this.lista = this.lista.filter(

            p => p.codice !== codice

        );

    },

    // ==========================
    // MODIFICA SCADENZA
    // ==========================

    modificaScadenza(codice, nuovaData) {

        const prodotto =

            this.trova(codice);

        if (!prodotto) return false;

        prodotto.scadenza = nuovaData;

        prodotto.giorni =

            Utils.giorniAllaScadenza(

                nuovaData

            );

        return true;

    },

    // ==========================
    // AGGIORNA GIORNI
    // ==========================

    aggiornaGiorni() {

        this.lista.forEach(prodotto => {

            prodotto.giorni =

                Utils.giorniAllaScadenza(

                    prodotto.scadenza

                );

        });

    },

    // ==========================
    // FILTRO GIORNI
    // ==========================

    filtra(min, max) {

        return this.lista.filter(p =>

            p.giorni >= min &&

            p.giorni <= max

        );

    },

    // ==========================
    // SCADUTI
    // ==========================

    scaduti() {

        return this.lista.filter(

            p => p.giorni < 0

        );

    },

    // ==========================
    // CERCA
    // ==========================

    cerca(testo) {

        testo = testo.toLowerCase();

        return this.lista.filter(p =>

            p.codice.includes(testo) ||

            p.descrizione

                .toLowerCase()

                .includes(testo)

        );

    },

    // ==========================
    // TOTALE
    // ==========================

    totale() {

        return this.lista.length;

    }

};
