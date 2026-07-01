// ============================================
// SCADENZE SMART GDO 2.0
// config.js
// Configurazione generale
// ============================================

"use strict";

const Config = {

    app: {

        nome: "Scadenze Smart GDO",

        versione: "2.0",

        build: "001",

        ambiente: "Produzione"

    },

    azienda: {

        nome: "",

        insegna: "",

        partitaIVA: "",

        indirizzo: "",

        telefono: "",

        email: ""

    },

    puntoVendita: {

        id: "",

        nome: "",

        citta: "",

        provincia: "",

        direttore: ""

    },

    utente: {

        id: "",

        nome: "",

        ruolo: ""

    },

    impostazioni: {

        lingua: "it",

        tema: "light",

        formatoData: "dd/MM/yyyy",

        aggiornamentoAutomatico: true,

        backupAutomatico: true,

        notifiche: true

    },

    ai: {

        attiva: false,

        suggerimenti: true,

        prioritaAutomatiche: true,

        analisiReport: true

    },

    supabase: {

        attivo: false,

        sincronizzazioneAutomatica: true

    }

};
