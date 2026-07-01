// ============================================
// SCADENZE SMART GDO 2.0
// offerte.js
// ============================================

"use strict";

const Offerte = {

    lista: [],

    // ==========================
    // CARICA
    // ==========================

    carica(lista = []) {

        this.lista = Utils.clona(lista);

    },

    // ==========================
    // TUTTE
    // ==========================

    tutte() {

        return this.lista;

    },

    // ==========================
    // AGGIUNGI
    // ==========================

    aggiungi(offerta = {}) {

        const record = {

            id: Utils.generaId(),

            codice: "",

            descrizione: "",

            reparto: "",

            prezzoNormale: 0,

            prezzoOfferta: 0,

            sconto: 0,

            quantita: 0,

            dataCreazione: new Date().toLocaleString(),

            dataInizio: "",

            dataFine: "",

            operatore: "",

            puntoVendita: "",

            priorita: "NORMALE",

            stato: "ATTIVA",

            note: "",

            ...offerta

        };

        this.lista.unshift(record);

        Registro.registraEvento({

            categoria: "OFFERTE",

            operazione: "NUOVA OFFERTA",

            livello: "SUCCESS",

            codice: record.codice,

            descrizione: record.descrizione,

            reparto: record.reparto,

            note: "Offerta inserita"

        });

    },

    // ==========================
    // CERCA
    // ==========================

    cerca(codice) {

        return this.lista.find(

            o => o.codice === codice

        );

    },

    // ==========================
    // ELIMINA
    // ==========================

    elimina(id) {

        this.lista = this.lista.filter(

            o => o.id !== id

        );

    },

    // ==========================
    // ATTIVE
    // ==========================

    attive() {

        return this.lista.filter(

            o => o.stato === "ATTIVA"

        );

    },

    // ==========================
    // SCADUTE
    // ==========================

    scadute() {

        return this.lista.filter(

            o => o.stato === "SCADUTA"

        );

    },

    // ==========================
    // TOTALI
    // ==========================

    totale() {

        return this.lista.length;

    },

    totaleAttive() {

        return this.attive().length;

    },

    totaleScadute() {

        return this.scadute().length;

    },

    // ==========================
    // SVUOTA
    // ==========================

    svuota() {

        this.lista = [];

    }

};
