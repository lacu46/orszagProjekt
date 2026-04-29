

let sz=""
for (const item of termeszetTomb) {
    sz+=`
        <div class="col-sm-6">
            <div class="kartya">
                <p class="text-center cimecske">${item.nev}</p>
                <p><img class="img-fluid kep" src="kepek/${item.kep}" alt=""></p>
                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>

    `
}
document.getElementById("foDiv").innerHTML=sz





