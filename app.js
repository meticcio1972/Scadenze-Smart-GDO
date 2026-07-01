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

            Dashboard.aggiorna();

            UI.home();

            AI.briefing();

            Registro.registraEvento({

                categoria: "SISTEMA",

                operazione: "AVVIO APP",

                livello: "SUCCESS",

                stato: "OK"

            });

        }

        catch (errore) {

            Registro.registraErrore(

                errore,

                "APP"

            );

            Notifiche.errore(

                "Errore durante l'avvio"

            );

        }

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => App.avvia()

);
