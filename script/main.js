let destaque = document.getElementById("destaque");
let imagem1 = document.getElementById("imagem1");
let imagem2 = document.getElementById("imagem2");
let imagem3 = document.getElementById("imagem3");
let imagem4 = document.getElementById("imagem4");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let numImagem = 1;

let buttonMinus = document.getElementById("button-minus");
let buttonPlus = document.getElementById("button-plus");
let quantidade = 0;
let buttonQuantidade = document.getElementById("button-quantidade");

// trocar a foto em destaque
function trocaDestaque (numImagem) {
    destaque.setAttribute('src', `./images/image-product-${numImagem}.jpg`);
}

// trocar foto anterior e próxima
function nextImagem() {
    if(numImagem < 4) {
        numImagem++;
        trocaDestaque(numImagem);
    } else if(numImagem === 4) {
        numImagem = 1;
        trocaDestaque(numImagem);
    }
}

function previousImagem() {
    if(numImagem > 1) {
        numImagem--;
        trocaDestaque(numImagem);
    } else if(numImagem === 1) {
        numImagem = 4;
        trocaDestaque(numImagem);
    }
}


imagem1.addEventListener ("click", function() {trocaDestaque(1);});
imagem2.addEventListener ("click", function() {trocaDestaque(2);});
imagem3.addEventListener ("click", function() {trocaDestaque(3);});
imagem4.addEventListener ("click", function() {trocaDestaque(4);});
previous.addEventListener ("click", function() {previousImagem()});
next.addEventListener ("click", function() {nextImagem()});

// mudar as quantidades
