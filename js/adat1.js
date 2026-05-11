const bekezdesek = [
    "Kína a világ egyik legősibb és legnagyobb országa.",
    "Híres a Nagy Falról és a Tiltott Városról.",
    "Modern városai és hagyományai együtt jelennek meg.",
    "Ez az oldal turistáknak mutatja be az országot."
];

let szoveg = `
    <h1>Kína 🇨🇳</h1>
`;

for (const b of bekezdesek) {
    szoveg += `<p>${b}</p>`;
}

szoveg += `<div id="idojaras" class="mt-4"></div>`;

document.getElementById("foDiv").innerHTML = szoveg;



// 🕒 Peking idő
function pekingiIdo() {
    return new Date().toLocaleTimeString("hu-HU", {
        timeZone: "Asia/Shanghai"
    });
}



// 🌤️ FETCH
fetch("https://api.open-meteo.com/v1/forecast?latitude=39.9&longitude=116.4&current_weather=true")
.then(res => res.json())
.then(data => {

    const idojarasDiv = document.getElementById("idojaras");

    if (!idojarasDiv) return;

    idojarasDiv.innerHTML = `
        <div class="alert alert-info text-center shadow">
            <h4>🌤️ Peking élő adatai</h4>
            <hr>

            <p>🌡️ Hőmérséklet: <strong>${data.current_weather.temperature}°C</strong></p>

            <p>🕒 Idő: <strong id="ora">${pekingiIdo()}</strong></p>
        </div>
    `;

    setInterval(() => {
        const ora = document.getElementById("ora");
        if (ora) ora.innerText = pekingiIdo();
    }, 1000);

})
.catch(err => {
    document.getElementById("idojaras").innerHTML =
        `<div class="alert alert-danger">Nem sikerült betölteni az időjárást 😢</div>`;
});