// ============================================
// SCADENZE SMART GDO 2.0
// sessione.js
// ============================================

"use strict";

const Sessione = {

    dati: {

        idSessione: Utils.generaId(),

        dataAvvio: new Date().toLocaleString(),

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

        reparto: {

            id: "",

            nome: ""

        },

        dispositivo: {

            tipo: "",

            nome: "",

            sistema: "",

            versioneApp: Config.app.versione

        },

        csv: {

            ultimoImport: "",

            prodottiImportati: 0

        },

        sincronizzazione: {

            ultima: "",

            stato: "NON ESEGUITA"

        },

        backup: {

            ultimo: "",

            stato: "NESSUNO"

        },

        ai: {

            attiva: false,

            ultimoReport: ""

        }

    },

    datiCorrenti() {

        return this.dati;

    },

    impostaUtente(utente) {

        this.dati.utente = utente;

    },

    impostaPuntoVendita(pv) {

        this.dati.puntoVendita = pv;

    },

    impostaReparto(reparto) {

        this.dati.reparto = reparto;

    },

    aggiornaImport(prodotti) {

        this.dati.csv.ultimoImport = new Date().toLocaleString();

        this.dati.csv.prodottiImportati = prodotti;

    },

    aggiornaBackup() {

        this.dati.backup.ultimo = new Date().toLocaleString();

        this.dati.backup.stato = "OK";

    },

    aggiornaSync() {

        this.dati.sincronizzazione.ultima = new Date().toLocaleString();

        this.dati.sincronizzazione.stato = "OK";

    },

    chiudi() {

        Registro.registraEvento({

            categoria: "SISTEMA",

            operazione: "CHIUSURA SESSIONE",

            livello: "INFO",

            note: "Sessione terminata"

        });

    }

};
