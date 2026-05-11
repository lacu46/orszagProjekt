let e = "";

etelekTomb.forEach((item, index) => {

    e += `
        <div class="col-12 col-md-6 col-lg-4">

            <div class="kartya">

                <p class="text-center cimecske">
                    ${item.nev}
                </p>

                <p>
                    <img 
                    class="img-fluid kep"
                    src="kepek/${item.kepek[0]}"
                    data-index="${index}"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal">
                </p>

                <p class="leirasSzoveg">
                    ${item.leiras}
                </p>

            </div>

        </div>
    `;
});

document.getElementById("foDiv").innerHTML = e;



// MODAL KÉPEK BETÖLTÉSE
document.addEventListener("click", function(e){

    if(e.target.classList.contains("kep")){

        let index = e.target.dataset.index;

        let kepek = etelekTomb[index].kepek;

        let kepekHTML = "";

        kepek.forEach((kep, i) => {

            kepekHTML += `
                <div class="carousel-item ${i == 0 ? "active" : ""}">
                    <img src="kepek/${kep}" class="d-block w-100">
                </div>
            `;
        });

        document.getElementById("carouselInner").innerHTML = kepekHTML;

        document.querySelector(".modal-title").innerText =
            etelekTomb[index].nev;
    }

});