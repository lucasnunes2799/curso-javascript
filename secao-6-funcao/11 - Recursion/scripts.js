function retornarNumeroPar(n) {
    if(n%2==0) {
        console.log("N agora é par: " + n);
    } else {
        console.log(n);
        retornarNumeroPar(n-1);
    }
}

retornarNumeroPar(33);
retornarNumeroPar(93);
retornarNumeroPar(507);