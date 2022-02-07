let {readFile, writeFile} = require ('fs');

readFile("arquivos.txt", "utf8",(error,text) => {
    if(error) {
        throw error;
    } else {
        console.log(text);
    }
});

writeFile("arquivos.txt", "Texto escrito por write file", (error) => {
    if(error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!");
    }
});