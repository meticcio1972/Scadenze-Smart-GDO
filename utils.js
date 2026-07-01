// ============================================
// SCADENZE SMART GDO
// utils.js
// ============================================

"use strict";

const Utils = {

    oggi() {

        const oggi = new Date();

        oggi.setHours(0,0,0,0);

        return oggi;

    },

    stringaToData(dataString) {

        if(!dataString) return null;

        const parti = dataString.split("/");

        if(parti.length !== 3)
            return null;

        return new Date(

            Number(parti[2]),
            Number(parti[1])-1,
            Number(parti[0])

        );

    },

    dataToString(data){

        const giorno =
            String(data.getDate())
            .padStart(2,"0");

        const mese =
            String(data.getMonth()+1)
            .padStart(2,"0");

        const anno =
            data.getFullYear();

        return `${giorno}/${mese}/${anno}`;

    },

    giorniAllaScadenza(dataString){

        const data =
            this.stringaToData(dataString);

        if(!data) return 0;

        return Math.ceil(

            (data-this.oggi())/

            (1000*60*60*24)

        );

    },

    clonaOggetto(oggetto){

        return JSON.parse(

            JSON.stringify(oggetto)

        );

    }

};
