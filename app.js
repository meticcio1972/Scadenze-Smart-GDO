// ============================================
// SCADENZE SMART GDO 2.0
// app.js
// ============================================

"use strict";

const App = {

    async avvia() {

        try {

            UI.caricamento("Avvio applicazione...");

            Storage.inizializza();

            Sessione.datiCorrenti();

            await Supabase.inizializza();

            // Attiva tutti gli eventi
            Eventi.inizializza();

            // Aggiorna dashboard
            Dashboard.aggiorna();

            // Mostra Home
            UI.home();

            // Chiude il loading
            UI.chiudiCaricamento();

            // Briefing AI
            console.log(AI.briefing());

            Registro.registraEvento({

                categoria: "SISTEMA",

                operazione: "AVVIO APP",

                livello: "SUCCESS",

                stato: "OK",

                note: "Applicazione avviata"

            });

        }

        catch (errore) {

            Registro.registraErrore(

                errore,

                "APP"

            );

            console.error(errore);

            if (typeof Notifiche !== "undefined") {

                Notifiche.errore(

                    "Errore durante l'avvio"

                );

            }

        }

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => App.avvia()

);
