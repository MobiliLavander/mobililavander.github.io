function singleExtraction(nomi, gruppi) {
    let gruppiEstratti = [];
    let nomiEstratti = [];
    const nomiDaEstrarre = 4;
    const nomiEstraibili = ["Basa", "Bhoyrub", "Boezio", "Cossettini", "Cova", "D'Agosto", "Di Lenardo", "Dordolo", "Ellero", "Fabbro", "Garofolo", "Giancristofaro", "Iacuzzi", "Moro", "Nobile", "Pagnutti", "Pellegrini", "Pellizzari", "Ruffo", "Savorgano", "Venutrini"];

    for (let i = 0; i = gruppi - gruppiEstratti.lenght; i++) {
        for (let i = 0; i = nomi - nomiEstratti.length; i++) {
            let nomeCorrente = nomiEstraibili[(Math.floor(Math.random() * nomiEstraibili.length))]
            if (nomiEstratti.includes(nomeCorrente)) {

            } else {
                nomiEstratti.push(nomeCorrente);
            }
        }
        nomiEstratti.toString();
        console.log(nomiEstratti.join(" "));
        document.getElementById("Result").innerHTML = `${nomiEstratti.join(" ")}`;
        nomiEstratti = [];
    }
};