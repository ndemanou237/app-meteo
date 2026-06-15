const apiKey = "8a2fc3a00a2d9e2bb034190717c689a9";

const cityInput = document.getElementById("city");
const search = document.getElementById("search");
const responseDiv = document.getElementById("response");

search.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) {
        response.innerHTML = "<p>Veuillez entrer une ville.</p>";
        return;
    }

    try {
        responseDiv.innerHTML = "<p>Chargement...</p>";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            responseDiv.innerHTML = `<p>Ville introuvable.</p>`;
            return;
        }

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        responseDiv.innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡️ Température : ${temperature} °C</p>
            <p>☁️ Description : ${description}</p>
        `;
    } catch (error) {
        responseDiv.innerHTML = "<p>Une erreur est survenue.</p>";
        console.error(error);
    }
});