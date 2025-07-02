

async function countries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population");
        // if (!response.ok) {
        //     throw new Error(`API Error: ${response.status}`);
        // }
        const data = await response.json();
        // if (!Array.isArray(data)) {
        //     throw new Error("Data is not an array");
        // }
        console.log("fetched data", data);


        const countriesList = document.getElementById("countries");
        data.forEach(country => {
            const div = document.createElement("div");

            const countryName = document.createElement("h1");
            countryName.textContent = country.name.common;
            div.appendChild(countryName);

            const flag = document.createElement("img");
            flag.src = country.flags.svg;
            flag.alt = `Flag of ${country.name.common}`;
            flag.width = 100;
            div.appendChild(flag);

            const capital = document.createElement("h2");
            capital.textContent = `Capital: ${country.capital ? country.capital[0] : "N/A"}`;
            div.appendChild(capital);

            const population = document.createElement("p");
            population.textContent = `Population: ${country.population.toLocaleString()}`;
            div.appendChild(population);

            countriesList.appendChild(div);
        });
    }
    catch (error) {
        console.error("Error fetching countries:", error);
    }

}
countries();