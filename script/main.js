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
let buttonQuantidade = document.getElementById("quantidade");
let carrinhoVazio = document.getElementById("carrinho-vazio");
let produtoCarrinho = document.getElementById("produto-carrinho");
let valorCarrinho = document.getElementById("valor-carrinho");
let lixeiraCarrinho = document.getElementById("lixeira-carrinho");
let buttonCart = document.getElementById("button");

// trocar a foto em destaque
function trocaDestaque (numImagem) {
    destaque.setAttribute('src', `./images/image-product-${numImagem}.jpg`);
}

// passar foto anterior e próxima
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

// mudar a quantidade
function trocaQuantidade() {
    buttonQuantidade.innerText = quantidade;
}

// aumentar ou diminuir quantidade
function maisQuantidade() {
    if(quantidade < 9) {
        quantidade++;
        trocaQuantidade();
    }
}

function menosQuantidade() {
    if(quantidade > 0) {
        quantidade--;
        trocaQuantidade();
    }
}

// carrinho
function colocarCarrinho() {
    if(quantidade > 0) {
        carrinhoVazio.style.display = "none";
        produtoCarrinho.style.display = "block";
        valorCarrinho.innerText = `R$125,00 x ${quantidade} = ${125.00 * quantidade}`;
    }
}

function limparCarrinho() {
    carrinhoVazio.style.display = "block";
    produtoCarrinho.style.display = "none";    
}


imagem1.addEventListener ("click", function() {trocaDestaque(1);});
imagem2.addEventListener ("click", function() {trocaDestaque(2);});
imagem3.addEventListener ("click", function() {trocaDestaque(3);});
imagem4.addEventListener ("click", function() {trocaDestaque(4);});
previous.addEventListener ("click", function() {previousImagem()});
next.addEventListener ("click", function() {nextImagem()});
buttonPlus.addEventListener ("click", function() {maisQuantidade()});
buttonMinus.addEventListener ("click", function() {menosQuantidade()});
buttonCart.addEventListener ('click', function() {colocarCarrinho()});
lixeiraCarrinho.addEventListener ('click', function() {limparCarrinho()});