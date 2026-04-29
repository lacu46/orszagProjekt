

let n=""
for (const item of nevezetessegekTomb) {
    n+=`
        <div class="col-12 col-md-8 col-lg-8">
            <div class="kartya">
                <p class="text-center cimecske">${item.nev}</p>
                <p><img class="img-fluid kep" src="kepek/${item.kep}" alt=""></p>
                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>

    `
}
document.getElementById("foDiv").innerHTML=n