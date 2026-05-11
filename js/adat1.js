const bekezdesek = [
    "Kína a világ egyik legősibb és legnagyobb országa.",
    "Híres a Nagy Falról és a Tiltott Városról.",
    "Modern városai és hagyományai együtt jelennek meg.",
    "Ez az oldal turistáknak mutatja be az országot."
  ];
  
  let szoveg = "<h1>Kína 🇨🇳</h1>";
  
  for (const b of bekezdesek) {
      szoveg += `<p>${b}</p>`;
  }
  
  
  szoveg += `<div id="idojaras" class="mt-3"></div>`;
  
 
  document.getElementById("foDiv").innerHTML = szoveg;
  
  
  fetch("https://api.open-meteo.com/v1/forecast?latitude=39.9&longitude=116.4&current_weather=true")
  .then(res => res.json())
  .then(data => {
      document.getElementById("idojaras").innerHTML =
      `<div class="alert alert-info">
          🌡️ Aktuális hőmérséklet Pekingben: ${data.current_weather.temperature}°C
      </div>`;
  });