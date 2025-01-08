// 1. Užduotis
// Pakelkite kiekvieną skaičiaus skaitmenį kvadratu ir sujunkite į vieną skaitmenį.
// Pavyzdžiai:
// 1. 23 => 2*2 3*3 => 49
// 2. 563 => 5*5 6*6 3*3 => 25369
// Sąlygos:
// Funkcija priima sveikąjį skaičių ir grąžina sveikąjį skaičių.
 
function skaiciaiKvadratu(skaicius) {
    //čia visa logika
    const stringas = skaicius.toString();
    let rezultatas = '';
    for (let i = 0; i < stringas.length; i++) {
        const skaitmuo = parseInt(stringas[i]);
        rezultatas += skaitmuo * skaitmuo;
    }
    return rezultatas;
}
 
console.log(skaiciaiKvadratu(3278)); //944964

// 2. Užduotis
// Patikrinkite, ar skaičiai masyve išdėlioti didėjimo ar mažėjimo tvarka ir grąžinkite vieną iš šių reikšmių:
// „didėjimo tvarka“ – jei masyvo skaičiai yra surūšiuoti didėjimo tvarka;
// „mažėjimo tvarka“ – jei masyvo skaičiai yra surūšiuoti mažėjimo tvarka;
// „nei didėjimo nei mažėjimo tvarka“ – kitaip.
 
// Sąlygos:
// Pateikiamas masyvas visada bus teisingas, ir visada bus tik vienas teisingas atsakymas.
 
// a. Variantas, lyginant duotą masyvą su išrūšiuotais masyvais:
function ArIrKaipIsrusiuotas(masyvas) {
    //čia visa logika
    const masyvasDid = [...masyvas].sort((a, b) => a - b);
    const masyvasMaz = [...masyvas].sort((a, b) => b - a);
    if (JSON.stringify(masyvas) === JSON.stringify(masyvasDid)) {
        return 'didėjimo tvarka';
    }
    if (JSON.stringify(masyvas) === JSON.stringify(masyvasMaz)) {
        return 'mažėjimo tvarka';
    }
    return 'nei didėjimo nei mažėjimo tvarka';
}
 
// b. Variantas, lyginant masyvo elementus tarpusavyje:
function ArIrKaipIsrusiuotas(masyvas) {
    //čia visa logika
    let did = true;
    let maz = true;
    for (let i = 0; i < masyvas.length - 1; i++) {
        if (masyvas[i] > masyvas[i + 1]) {
            did = false;
        }
        if (masyvas[i] < masyvas[i + 1]) {
            maz = false;
        }
    }
    if (did) {
        return 'didėjimo tvarka';
    }
    if (maz) {
        return 'mažėjimo tvarka';
    }
    return 'nei didėjimo nei mažėjimo tvarka';
}
 
console.log(ArIrKaipIsrusiuotas([1, 2, 3])); //didėjimo tvarka
console.log(ArIrKaipIsrusiuotas([3, 2, 1])); //mažėjimo tvarka
console.log(ArIrKaipIsrusiuotas([2, 3, 1])); //nei didėjimo nei mažėjimo tvarka