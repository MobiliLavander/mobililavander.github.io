


function singleExtraction(nomi, gruppi) {
    const result = document.getElementById('Result');
    let nomiGruppo = [];
    let nomiEstratti = [];
    let nomiDaEscludere = [];
    const nomiDaEstrarre = 4;
    const nomiEstraibili = ["Basa", "Boezio", "Cova", "D'Agosto", "Di Lenardo", "Dordolo", "Ellero", "Fabbro", "Garofolo", "Giancristofaro", "Iacuzzi", "Moro", "Nobile", "Pagnutti", "Pellegrini", "Pellizzari", "Piasentier", "Ruffo", "Savorgano", "Venutrini"];

    //if ((nomi * gruppi) > (nomiEstraibili.length - nomiDaEscludere.length)) return alert('Error!');
    //console.log(`Estrazione fatta su: ${nomiEstraibili.length} persone, per ${gruppi} gruppi, composti da ${nomi} persone ognuno.`)
    //Crezione Gruppi
    for (let i = 0; i < gruppi; i++) {
        //Creazione singolo gruppo
        for (let i = 0; i = nomi - nomiGruppo.length; i++) {
            //Estrazione
            let nomeCorrente = nomiEstraibili[(Math.floor(Math.random() * nomiEstraibili.length))]
            //Controllo per nomi dobbi
            if (nomiEstratti.includes(nomeCorrente)) {

            } else {
                nomiEstratti.push(nomeCorrente);
                nomiGruppo.push(nomeCorrente);
            }
        }
        //Converting array into string
        nomiGruppo.toString();
        console.log(nomiGruppo.join(" "));
        //Adding results to the webpage
        let p = document.createElement("p");
        p.innerHTML = `${(i + 1) + " " + nomiGruppo.join(" ")}`
        nomiGruppo = [];
        result.appendChild(p);
    }
    nomiEstratti = [];
};