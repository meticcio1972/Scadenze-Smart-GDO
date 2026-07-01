// ============================================
// SCADENZE SMART GDO 2.0
// scadenze.js
// ============================================

"use strict";

let scadenzeModificate = Storage.caricaScadenze();

// ==========================
// AGGIORNA SCADENZA
// ==========================

function aggiornaScadenza(codice, nuovaData) {

    scadenzeModificate[codice] = nuovaData;

    Storage.salvaScadenze(scadenzeModificate);

}

// ==========================
// RECUPERA SCADENZA
// ==========================

function leggiScadenza(codice) {

    return scadenzeModificate[codice] || null;

}

// ==========================
// ELIMINA SCADENZA
// ==========================

function eliminaScadenza(codice) {

    delete scadenzeModificate[codice];

    Storage.salvaScadenze(scadenzeModificate);

}

// ==========================
// TUTTE LE SCADENZE
// ==========================

function tutteLeScadenze() {

    return scadenzeModificate;

}
