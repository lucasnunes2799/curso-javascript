console.log("Exercicio 1: Imprimir a mensagem Hello World! usando função");

function imprimirMensagem() {
    console.log("Hello World!");
}

imprimirMensagem();

//fim exercicio

console.log("Exercicio 2: Imprimir uma mensagem da idade de uma pessoa");

function imprimeIdade(idade) {
    console.log(`Você tem ${idade} anos`);
}

imprimeIdade(55);

//fim exercicio

console.log("Exercicio 3: Utilizando função para somar dois números");

function somarDoisNumeros (a,b) {
    return a + b;
}

console.log (somarDoisNumeros(50,50));

//fim exercicio

console.log("Exercicio 4: Imprimir um número aletario delimitado");

function numeroAleatorio(num) {
    return Math.floor(Math.random() + num) + 1;
}

console.log(numeroAleatorio(10));

//fim exercicio

console.log("Exercicio 5: Uma função para separar pessoas que pode tirar a cnh dos que não pode");

function podeEntrarNaAuto(idade) {

    if(idade >= 18) {

        console.log("Pode se matricular na auto escola");
 
    } else {

        console.log("Não pode se matricular na auto escola");

    }

}

podeEntrarNaAuto(16);
podeEntrarNaAuto(25);

//fim exercicio

console.log("Exercicio 6: Descobrir se dados passados são: string, number, boolean");

function verificarTipoDado(dado) {

    if(typeof dado === 'string') {
        console.log("Este dado é uma string");
    } else if (typeof dado === 'number') {
        console.log("Este dado é um number");
    } else if (typeof dado === 'boolean') {
        console.log("Este dado é um boolean");
    }
}

verificarTipoDado(true);
verificarTipoDado(23);
verificarTipoDado("teste")

//fim exercicio

console.log("Exercicio 7: Receber um número negativo e retornar positivo");

function numeroPos(numNegativo) {
    return Math.abs(numNegativo);
}

console.log(numeroPos(-13));

//fim exercicio

console.log("Exercicio 8: Contar String e passar mensagem caso seja maior que 10 ou igual e menor que 10");

function checarTamanhoTexto(texto) {
    if(texto.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

checarTamanhoTexto("Teste");
checarTamanhoTexto("Vamos testar se funciona o tamanho");

//fim exercicio

console.log("Exercicio 9: Receber um número e outro para ser a potencia e retornar o valor");

function potencia(a,b) {
    //return Math.pow(a,b);
    return a ** b;
}

console.log(potencia(3,2));

//fim exercicio

//console.log("Exercicio 10:");

//function imprimePar(num) {
//    for(let i = num; i >= 0; i++) {
//        if(i % 2 == 0) {
//           console.log(i);
//        }
//   }
//}

//imprimePar(2);

//fim exercicio