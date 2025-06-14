function mostrarHora(){
    let horaAgora = new Date();
    console.log(horaAgora);
}
mostrarHora();

function caucularAreaRetangulo(largura,altura){
    let area = largura * altura;
    console.log(area);
}
caucularAreaRetangulo(5,6);

function ehPar(numero){
    if(numero % 2 == 0){
        return `O ${numero} é par`;
    }
    else{
        return `O ${numero} é impar`;
    }
}
console.log(ehPar(2));

function avaliarAluno(nome,n1,n2,n3){
    let media = (n1+n2+n3)/3;

    function verificarSituacao(media){
        if(media >= 7) return "Aprovado";
        else if(media >= 5) return "De recuperação";
        else return "Reprovado";
    }
    console.log(`Nome: ${nome}, Media: ${media}, Situação: ${verificarSituacao(media)}`);
}
avaliarAluno("Castro",9,8,7);

function conversorTemperatura(celsius){
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(`Fahrenheit: ${fahrenheit}`);
}
conversorTemperatura(40);

function gerarSenhaAleatoria(length){
    function createRandomString(length){
        let senha = "";
        for(let i = 0;i<length;i++){
            senha += RandomCaractere(i);
        }
        return senha;
    }
    function RandomCaractere(){
        const caracteres = '0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ[/]abcdefghijklmnopqrstuvwxyz';
        const n = Math.trunc(Math.random()*66);
        return caracteres[n];
    }
    return createRandomString(length);
}
console.log(gerarSenhaAleatoria(30));