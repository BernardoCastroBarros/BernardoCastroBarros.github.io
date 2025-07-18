const API_KEY = "b35c92dd05c5684c2ca9d6f7b6021b97";

async function buscarClima() {
  const cidade = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.cod !== 200) {
      document.getElementById("resultado").innerText = "Erro ao buscar dados!";
      return;
    }

    const clima = {
      cidade: dados.name,
      temperatura: dados.main.temp,
      umidade: dados.main.humidity,
      condicao: dados.weather[0].description
    };

    // Verifica condição climática extrema
    const extremos = [clima].filter(c =>
      c.temperatura > 35 || c.temperatura < 5
    );

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p><strong>Cidade:</strong> ${clima.cidade}</p>
      <p><strong>Temperatura:</strong> ${clima.temperatura}°C</p>
      <p><strong>Umidade:</strong> ${clima.umidade}%</p>
      <p><strong>Condição:</strong> ${clima.condicao}</p>
    `;

    if (extremos.length > 0) {
      resultadoDiv.innerHTML += `<p style="color:red"><strong>⚠ Condição climática extrema!</strong></p>`;
    }

  } catch (erro) {
    console.error("Erro na requisição:", erro);
    document.getElementById("resultado").innerText = "Erro ao obter dados.";
  }
}
