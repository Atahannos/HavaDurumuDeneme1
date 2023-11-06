
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const input = document.getElementById("input");
    const sehir = document.getElementById("sehir");
    const sicaklik = document.getElementById("sicaklik");
    const durum = document.getElementById("durum");

    searchButton.addEventListener("click", function () {
        const aranan_sehir = input.value;
        if (aranan_sehir) {
            HavaDurumu(aranan_sehir);
        }
    });

    function HavaDurumu(aranan_sehir) {
        const anahtar = 'e62fd9b56d616568bf0b7cf7f3155bc3';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${aranan_sehir}&appid=${anahtar}&units=metric`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                sehir.textContent = data.name;
                sicaklik.textContent = `${data.main.temp}°C`;
                durum.textContent = data.weather[0].description;
            })
            .catch((error) => {
                console.error("Hava durumu verileri alınamadı:", error);
                sehir.textContent = "Şehir bulunamadı";
                sicaklik.textContent = ":(";
                durum.textContent = ":(";
            });
    }
});
