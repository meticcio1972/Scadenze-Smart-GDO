// ============================================
// SCADENZE SMART GDO 2.0
// csv.js
// ============================================

"use strict";

const CSV = {

    importa(file) {

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (evento) => {

            try {

                const testo = evento.target.result;

                const righe = testo.split(/\r\n|\n|\r/);

                const prodotti = [];

                for (let i = 1; i < righe.length; i++) {

                    if (!righe[i].trim()) continue;

                    const colonne = righe[i].split(/\t|;|,/);

                    if (colonne.length < 3) continue;

                    const codice = colonne[0].trim();

                    const descrizione = colonne[1].trim();

                    let scadenza = colonne[2].trim();

                    const dataModificata = leggiScadenza(codice);

                    if (dataModificata) {

                        scadenza = dataModificata;

                    }

                    const giorni = Utils.calcolaGiorni(scadenza);

                    prodotti.push({

                        codice,

                        descrizione,

                        scadenza,

                        giorni

                    });

                }

                Prodotti.carica(prodotti);

                Storage.salvaProdotti(prodotti);

                Sessione.aggiornaImport(prodotti.length);

                Registro.registraEvento({

                    categoria: "CSV",

                    operazione: "IMPORTAZIONE",

                    livello: "SUCCESS",

                    stato: "OK",

                    note: `${prodotti.length} prodotti importati`

                });

                Dashboard.aggiorna();

                Notifiche.successo(

                    `${prodotti.length} prodotti importati`

                );

            }

            catch (errore) {

                Registro.registraErrore(

                    errore,

                    "CSV"

                );

                Notifiche.errore(

                    "Errore durante l'importazione CSV"

                );

            }

        };

        reader.readAsText(file);

    }

};
