const WINDY_API_KEY = "DEIN_WINDY_API_KEY";

windyInit(
{
    key: WINDY_API_KEY,
    lat: 53.14,
    lon: 8.46,
    zoom: 6,
    overlay: "radar"
},
(windyAPI) => {

    const radarContainer =
        document.getElementById("radar");

    radarContainer.innerHTML = `
    https://embed.windy.com/embed2.html?lat=53.14&lon=8.46&zoom=6&level=surface&overlay=radar&menu=true&message=true&marker=true&calendar=now
    </iframe>`;
});

document.getElementById("wind").innerHTML = `
https://embed.windy.com/embed2.html?lat=53.14&lon=8.46&zoom=6&level=surface&overlay=wind&menu=true&message=true&marker=true&calendar=now
</iframe>
`;

function updateDWDMap(){

    const map =
        document.getElementById("dwdMap");

    map.src =
    "https://www.dwd.de/DWD/wetter/wv_allg/deutschland/bwk_bodendruck_na_ana.png?t="
    + new Date().getTime();
}

updateDWDMap();

setInterval(updateDWDMap, 3600000);
