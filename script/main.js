let destaque = document.getElementById("destaque");
let imagem1 = document.getElementById("imagem1");
let imagem2 = document.getElementById("imagem2");
let imagem3 = document.getElementById("imagem3");
let imagem4 = document.getElementById("imagem4");
let buttonMinus = document.getElementById("button-minus");
let buttonPlus = document.getElementById("button-plus");
let quantidade = 0;
let buttonQuantidade = document.getElementById("button-quantidade");

// trocar a foto em destaque
function trocaDestaque (src) {
    destaque.setAttribute('src', src );
}

imagem1.addEventListener ("click", function() {trocaDestaque("./images/image-product-1.jpg");});
imagem2.addEventListener ("click", function() {trocaDestaque("./images/image-product-2.jpg");});
imagem3.addEventListener ("click", function() {trocaDestaque("./images/image-product-3.jpg");});
imagem4.addEventListener ("click", function() {trocaDestaque("./images/image-product-4.jpg");});

// mudar as quantidades
