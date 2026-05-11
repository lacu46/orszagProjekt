const kulturaTomb = [


    {
        nev: "Kínai újév 🎆",
        leiras: "A legfontosabb kínai ünnep, amelyet lampionokkal, sárkánytánccal és tűzijátékkal ünnepelnek.",
        kep: "kultura2.jpg"
    },

    {
        nev: "Tea kultúra 🍵",
        leiras: "A tea Kínában több ezer éves hagyomány. A teaszertartás a nyugalom és tisztelet jelképe.",
        kep: "kultura3.jpg"
    },

    {
        nev: "Kalligráfia ✍️",
        leiras: "A kínai írás művészi formája, ahol az írás nem csak kommunikáció, hanem művészet is.",
        kep: "kultura4.jpg"
    }

    

];



let k = "";

for (const item of kulturaTomb) {

    k += `
        <div class="col-12 col-md-6 col-lg-4">

            <div class="kartya">

                <p class="text-center cimecske">${item.nev}</p>

                <p>
                    <img class="img-fluid kep" src="kepek/${item.kep}" alt="">
                </p>

                <p class="leirasSzoveg">${item.leiras}</p>

            </div>

        </div>
    `;
}

document.getElementById("foDiv").innerHTML = k;