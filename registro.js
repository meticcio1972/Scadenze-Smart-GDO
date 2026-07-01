// ============================================
// SCADENZE SMART GDO 2.0
// registro.js
// Registro centrale eventi
// ============================================

"use strict";

const Registro = {

    lista: [],

    // ==========================
    // CARICA
    // ==========================

    carica(lista = []) {

        this.lista = Utils.clona(lista);

    },

    // ==========================
    // TUTTI GLI EVENTI
    // ==========================

    tutti() {

        return this.lista;

    },

    // ==========================
    // REGISTRA EVENTO
    // ==========================

    registraEvento(evento = {}) {

        const record = {

            id: Utils.generaId(),

            uuid: Utils.generaId(),

            sessione: "",

            timestamp: Date.now(),

            dataOra: new Date().toLocaleString(),

            categoria: "SISTEMA",

            operazione: "",

            livello: "INFO",

            stato: "OK",

            codice: "",

            descrizione: "",

            reparto: "",

            vecchiaScadenza: "",

            nuovaScadenza: "",

            pezzi: 0,

            lotto: "",

            fornitore: "",

            utente: {

                id: "",

                nome: "",

                ruolo: ""

            },

            azienda: {

                id: "",

                nome: ""

            },

            puntoVendita: {

                id: "",

                nome: ""

            },

            dispositivo: {

                tipo: "",

                nome: "",

                sistema: "",

                versioneApp: ""

            },

            origine: "APP",

            sincronizzato: false,

            dataSync: null,

            durata: 0,

            note: "",

            errore: null,

            versione: 1,

            ...evento

        };

        this.lista.unshift(record);

    },

    // ==========================
    // REGISTRA ERRORE
    // ==========================

    registraErrore(errore, categoria = "SISTEMA") {

        this.registraEvento({

            categoria,

            operazione: "ERRORE",

            livello: "ERROR",

            stato: "KO",

            errore: errore,

            note: errore?.message || ""

        });

    },

    // ==========================
    // CERCA PER CODICE
    // ==========================

    cerca(codice) {

        return this.lista.filter(

            e => e.codice === codice

        );

    },

    // ==========================
    // FILTRA CATEGORIA
    // ==========================

    filtraCategoria(categoria) {

        return this.lista.filter(

            e => e.categoria === categoria

        );

    },

    // ==========================
    // FILTRA OPERAZIONE
    // ==========================

    filtraOperazione(operazione) {

        return this.lista.filter(

            e => e.operazione === operazione

        );

    },

    // ==========================
    // FILTRA REPARTO
    // ==========================

    filtraReparto(reparto) {

        return this.lista.filter(

            e => e.reparto === reparto

        );

    },

    // ==========================
    // SOLO ERRORI
    // ==========================

    errori() {

        return this.lista.filter(

            e => e.livello === "ERROR"

        );

    },

    // ==========================
    // SOLO SUCCESSI
    // ==========================

    successi() {

        return this.lista.filter(

            e => e.livello === "SUCCESS"

        );

    },

    // ==========================
    // TOTALE
    // ==========================

    totale() {

        return this.lista.length;

    },

    // ==========================
    // SVUOTA
    // ==========================

    svuota() {

        this.lista = [];

    }

};
