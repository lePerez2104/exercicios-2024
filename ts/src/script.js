// // Botão de Ver Mais (show-more)                        
function verMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("ver_mais");
    var btnLeiaMais = document.querySelector(".btn-show-more");

    var pontosDisplayStyle = window.getComputedStyle(pontos).getPropertyValue('display');

    if (pontosDisplayStyle === 'none') {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "ver mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = " ";
    }
}

// Fórum de Discussão
let buttonsResposta = document.querySelectorAll('.thread button');

for(let i = 0; i < buttonsResposta.length; i++) 
{
    buttonsResposta[i].addEventListener('click',()=>{
        let respostas = document.querySelectorAll('.respostas');
        respostas[i].style.display = "block";
    })
}

let forms = document.querySelectorAll('form');

for(let i = 0; i < forms.length; i++) 
{
    forms[i].addEventListener('submit',(e)=>{
        e.preventDefault();
        let conteudo = document.querySelectorAll('textarea')[i];
        forms[i].insertAdjacentHTML('beforebegin', '<p>'+conteudo.value+'</p>')
        conteudo.value = "";
    })
}

function mostrarFormulario() {
    var conteudoBox = document.getElementById("conteudo_box");
    var form = document.getElementById("form");

    conteudoBox.innerHTML = form.innerHTML;
}


function topicoCriado() {
    var formulario = document.getElementById("formulario");
    var topicoEnviado = document.getElementById("topicoEnviado");

    formulario.innerHTML = topicoEnviado.innerHTML;
}

function retornarFormulario() {
    mostrarFormulario();
}

function exibirRespostas() {
    var cardPergunta = document.getElementById('card_pergunta');
    var cardRespondido = document.getElementById('answered-topic');
    cardPergunta.style.display = "none"
    cardRespondido.style.display = "flex"
}