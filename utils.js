// ===== UTILS =====

function calcolaGiorni(dataStringa){

    const parti = dataStringa.split("/");

    if(parti.length !== 3) return 0;

    const dataScad = new Date(
        parti[2],
        parti[1]-1,
        parti[0]
    );

    const oggi = new Date();

    oggi.setHours(0,0,0,0);

    return Math.ceil(
        (dataScad - oggi) /
        (1000*60*60*24)
    );

}
