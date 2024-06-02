document.addEventListener('DOMContentLoaded', () => {
    const pokemonContainer = document.getElementById('pokemon-container');

    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            const pokemonName = data.name;
            const pokemonImage = data.sprites.front_default;
            const pokemonHeight = data.height;
            const pokemonWeight = data.weight;
            const pokemonTypes = data.types.map(typeInfo => typeInfo.type.name).join(', ');

            pokemonContainer.innerHTML = `
                <h1>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                <img src="${pokemonImage}" alt="${pokemonName}">
                <p><strong>Height:</strong> ${pokemonHeight} decimetres</p>
                <p><strong>Weight:</strong> ${pokemonWeight} hectograms</p>
                <p><strong>Types:</strong> ${pokemonTypes}</p>
            `;
        })
        .catch(error => {
            pokemonContainer.innerHTML = `<p>Ocurrió un error al cargar los datos del Pokémon.</p>`;
            console.error('Error:', error);
        });
});