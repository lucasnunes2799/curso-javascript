function nomeComIdade(nome,idade) {
    if (idade === undefined) {
        console.log("Seu nome é " + nome);
    } else{
        console.log("Seu nome é " + nome + "e você tem " + idade + " anos");
    }
}

nomeComIdade("João");
nomeComIdade("João", 42);