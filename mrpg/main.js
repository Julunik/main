const GameLogo = document.getElementById("ikona");
const icons = ["krpg3_SCALED.png", "krpg3_classic.png", "krpg3_dsc.png"];
function Kliknieto(){ GameLogo.src = "grafika_mrpg/"+icons[Math.floor(Math.random() * 3)]; }
console.log("Wersja strony: 8");