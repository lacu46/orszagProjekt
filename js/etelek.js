

let e=""
for (const item of etelekTomb) {
    e+=`
        <div class="col-sm-6">
            <div class="kartya">
                <p class="text-center cimecske">${item.nev}</p>
                <p><img class="img-fluid kep" src="kepek/${item.kep}" alt=""></p>
                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>

    `
}
document.getElementById("foDiv").innerHTML=e

for (const item of etelekTomb) {
    i += `
        <div class="col-sm-6">
            <div class="kartya">
                <p class="text-center cimecske">${item.nev}</p>
                <p><img class="img-fluid kep" src="kepek/${item.kep}" alt=""></p>
                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>
    `;
}

document.getElementById("foDiv").innerHTML = i;