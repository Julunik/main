// const GameLogo = document.getElementById("ikona");
// const icons = ["krpg3_SCALED.png", "krpg3_classic.png", "krpg3_dsc.png"];
// GameLogo.src = "grafika_mrpg/"+icons[Math.floor(Math.random() * 3)];
function Kliknieto(){ console.log("KLIKNIĘTO!"); }

fetch("latest.json")
    .then(response => {
        if (!response.ok) throw new Error("Unable to download JSON");
        return response.json();
    })
    .then(data => {
        document.getElementById("mrpg_android_download").href = data.androidLatest;
    })
    .catch(error => {
        console.error(error);
    });

console.log("Wersja strony: 10");