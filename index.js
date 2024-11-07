// document.write("Hello ")

// document.querySelector("#teste")


// let elemento = document.getElementById("elemento");

// elemento.textContent = "Outra coisa";






// let textos = document.getElementsByClassName('texto');

// console.log(textos.length);
// textos[0].innerText = 'Primeiro texto modificado';





// let paragrafo = document.getElementById('paragrafo');

// paragrafo.style.color = 'blue';

// paragrafo.style.fontsize = '20px';



// 1)
// let title = document.getElementsByClassName('textos');
// title[0].innerText = "Pagina HTML";
// title[1].innerText = "descricao";
// let nome = prompt("Digite seu nome:");
// let cor = prompt("Digite a cor que você deseja em inglês:");


// title[0].innerText = `bem vindo ${nome}`  ;
// title[0].style.color = cor;

// 2)
// const botao = document.getElementById('botao');
// const reset = document.getElementById('resetar');
// let numero = document.getElementById('numeros');
// let contador=0
// botao.addEventListener('click', function() {
// contador += 1
// numero.innerText = Number(contador)
// });
// reset.addEventListener('click', function() {
// contador = 0
// numero.innerText = Number(contador)
// })

//3)
// let texto = document.getElementById('texto');
// let botao = document.getElementById('mostrar');
// let visivel = false;
 
// botao.addEventListener('click', () => {
//     visivel = !visivel;
//     texto.hidden = !visivel;
//     botao.innerText = visivel ? 'Ocultar' : 'Mostrar';
// });

// 4
// const botao = document.getElementById('botao');
// let numero = document.getElementById('numeros');
// botao.addEventListener('click', function() {
// let contador = prompt("Digite um texto")
// numero.innerText = String(contador)
// });

// 5
// let tecla = document.getElementById('texto')
// document.addEventListener('keydown', function() {
//     tecla.innerText = `Você pressionou a tecla ${event.key}`
// })

const votar = document.getElementById("voto");
const candidatoDiv = document.getElementById("candidato");
const foto = document.getElementById("foto");
const nome = document.getElementById("nome");
const confirmar = document.getElementById("confirmar");
 
let candidato1 = 0;
let candidato2 = 0;
 
votar.addEventListener('click', function () {
    let voto = prompt("Em quem você quer votar? Digite o número \nMarçal (22)\nBoulos (13)\nPara encerrar a votação, digite 'sair'");
 
    if (voto === "22") {
        foto.src = "marçal.jpg";
        nome.innerText = "Marçal";
        candidatoDiv.style.display = "block";
    } else if (voto === "13") {
        foto.src = "boulos.jpg"
        candidatoDiv.style.display = "block";
    } else if (voto === "sair") {
        alert("Votação encerrada.");
        console.log(`Votos para Marçal: ${candidato1}`);
        console.log(`Votos para Boulos: ${candidato2}`);
        candidatoDiv.style.display = "none";
    } else {
        alert("Voto nulo");
        candidatoDiv.style.display = "none";
    }
});
 
confirmar.addEventListener('click', function () {
    if (nome.innerText === "Boulos") {
        candidato1 += 1;
    } else if (nome.innerText === "Marçal") {
        candidato2 += 1;
    }
    alert("Voto confirmado!");
    candidatoDiv.style.display = "none";
});