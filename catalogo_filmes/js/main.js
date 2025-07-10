function getClassificacaoColor(classificacao) {
    if (classificacao <= 14) return 'verde';
    if (classificacao < 18) return 'amarelo';
    return 'vermelho';
}

function criarEstrelas(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function preencherCatalogo() {
    const catalogo = document.getElementById('catalogo');

    data.forEach(filme => {
        const card = document.createElement('div');
        card.className = 'filme-card';

        const imagem = document.createElement('img');
        imagem.src = filme.figura;
        imagem.alt = filme.titulo;

        const conteudo = document.createElement('div');
        conteudo.className = 'conteudo';

        const titulo = document.createElement('h3');
        titulo.textContent = filme.titulo;

        const resumo = document.createElement('p');
        resumo.textContent = filme.resumo;

        const classificacao = document.createElement('span');
        classificacao.textContent = `Classificação: ${filme.classificacao}`;
        classificacao.className = `classificacao ${getClassificacaoColor(filme.classificacao)}`;

        const generos = document.createElement('p');
        generos.textContent = `Gêneros: ${filme.generos.join(', ')}`;

        const elenco = document.createElement('p');
        elenco.textContent = `Elenco: ${filme.elenco.join(', ')}`;

        const opinioes = document.createElement('div');
        opinioes.innerHTML = '<strong>Opiniões:</strong><br>';
        filme.opinioes.forEach(op => {
            const opElement = document.createElement('p');
            opElement.innerHTML = `<span class="estrelas">${criarEstrelas(op.rating)}</span> - ${op.descricao}`;
            opinioes.appendChild(opElement);
        });

        const titulosParecidos = document.createElement('div');
        titulosParecidos.className = 'titulos-parecidos';
        if (filme.titulosSemelhantes.length > 0) {
            const semelhantes = filme.titulosSemelhantes.map(id => {
                const similar = data.find(f => f.id === id);
                return similar ? similar.titulo : '';
            }).join(', ');
            titulosParecidos.textContent = `Títulos parecidos: ${semelhantes}`;
        } else {
            titulosParecidos.textContent = 'Títulos parecidos: Nenhum';
        }

        conteudo.appendChild(titulo);
        conteudo.appendChild(resumo);
        conteudo.appendChild(classificacao);
        conteudo.appendChild(generos);
        conteudo.appendChild(elenco);
        conteudo.appendChild(opinioes);
        conteudo.appendChild(titulosParecidos);

        card.appendChild(imagem);
        card.appendChild(conteudo);

        catalogo.appendChild(card);
    });
}

preencherCatalogo();