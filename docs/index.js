document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botao");
    const cancelar = document.getElementById("cancelar");
    const mensagemaleatoria = document.getElementById("mensagemaleatoria");
    const stylesheet = document.styleSheets[0]
    

});

function criarcoracoes(tipo, tempo){
    let tamanhodoelemento = document.getElementById("mensage").offsetWidth;
    let quantidade = tamanhodoelemento/16.5;
    document.getElementById(tipo).innerHTML = "";
    
    let posicaodoelemento = document.getElementById("mensage").getBoundingClientRect();
    let qualposicao;
    if(tipo === "corasub"){
        qualposicao = posicaodoelemento.bottom
    }else{
        qualposicao = posicaodoelemento.top
    }
    for(let i = 0; i < quantidade; i++){
        let corazione = document.createElement("span");
        corazione.innerHTML = "❤";
        document.getElementById(`${tipo}`).style.top = qualposicao+'px';
        document.getElementById(`${tipo}`).appendChild(corazione);
        corazione.className = `${tipo}`;
        corazione.style.setProperty("--tempo", `${(Math.random() * tempo + tempo).toFixed(2)}s`);
    }
}

function animacorao(qual,tipo){
    let elemento = document.getElementById("mensage");
    let alturaElemento = elemento.offsetHeight; 

    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    const stylesheet = styleTag.sheet;

    if(qual === "animarcorasub"){
        stylesheet.insertRule(`
            @keyframes ${qual} {
                0% { transform: translateY(0) scale(0.4); }
                100% { transform: translateY(-${alturaElemento+5}px) scale(0.9); } 
            }
        `, stylesheet.cssRules.length);
    } else {
        stylesheet.insertRule(`
            @keyframes ${qual} {
                0% { transform: translateY(0) scale(0.9); }
                100% { transform: translateY(${alturaElemento}px) scale(0.4); } 
            }
        `, stylesheet.cssRules.length);
    }

    let coracoes = document.querySelectorAll(`.${tipo}`);
    coracoes.forEach(coracao => {
        coracao.style.animation = `${qual} var(--tempo) forwards`;
    });
}

function sumircoracao(tempo, tipo){
    setTimeout(function(){
        let coracoes = document.querySelectorAll(`.${tipo}`).forEach(coracao => coracao.remove());
    }, tempo);
}

function mensagensdobotao(){
    let mensagensbotao = [
        "De novo? ",
        "Mais uma vez?",
        "Amo você ❤",
        "Eu te amo ❤",
        "Cotinuar? ❤",
        "Continuar ❤"
    ];

    return botao.innerHTML = mensagensbotao[Math.floor(Math.random() * mensagensbotao.length)];
}

let mensagens = [
  "A vida é cheia de surpresas.",
  "Nunca pare de aprender algo novo.",
  "O universo conspira a favor de quem acredita.",
  "Cada passo conta; continue caminhando.",
  "A criatividade abre portas para novos mundos.",
  "O sol sempre nasce após a noite mais escura.",
  "Desafie seus limites e se surpreenda.",
  "A mente curiosa descobre horizontes inexplorados.",
  "Que a energia positiva te acompanhe hoje.",
  "O sucesso começa com um pequeno sonho.",
  "Seja o protagonista da sua própria história.",
  "Momentos simples se transformam em eternas lembranças.",
  "Rir é o melhor remédio para os dias turbulentos.",
  "Inovar é transformar desafios em oportunidades.",
  "Cada ideia pode ser a semente de um grande projeto.",
  "A perseverança é o combustível para alcançar metas.",
  "A felicidade se esconde nas pequenas coisas do dia a dia.",
  "Nunca subestime o poder de um pensamento positivo.",
  "A imaginação é a chave para um mundo sem limites.",
  "Transforme seus desafios em degraus para o sucesso."
];

function mensagensaleatorias(){
    if(mensagens.length === 0){
        mensagens = [
            "A vida é cheia de surpresas.",
            "Nunca pare de aprender algo novo.",
            "O universo conspira a favor de quem acredita.",
            "Cada passo conta; continue caminhando.",
            "A criatividade abre portas para novos mundos.",
            "O sol sempre nasce após a noite mais escura.",
            "Desafie seus limites e se surpreenda.",
            "A mente curiosa descobre horizontes inexplorados.",
            "Que a energia positiva te acompanhe hoje.",
            "O sucesso começa com um pequeno sonho.",
            "Seja o protagonista da sua própria história.",
            "Momentos simples se transformam em eternas lembranças.",
            "Rir é o melhor remédio para os dias turbulentos.",
            "Inovar é transformar desafios em oportunidades.",
            "Cada ideia pode ser a semente de um grande projeto.",
            "A perseverança é o combustível para alcançar metas.",
            "A felicidade se esconde nas pequenas coisas do dia a dia.",
            "Nunca subestime o poder de um pensamento positivo.",
            "A imaginação é a chave para um mundo sem limites.",
            "Transforme seus desafios em degraus para o sucesso."
        ];
    }
    
   let indicealeatori = Math.floor(Math.random() * mensagens.length);
   let novamensagem = mensagens.splice(indicealeatori, 1)[0];
   const mensagemaleatoria = document.getElementById("mensagemaleatoria");

   return (
        mensagemaleatoria.innerHTML = novamensagem
   );
}

function imagemaleatoria(){
    let colecao = [
        "imgs/paisagem.jfif",
        "imgs/TesteH1.jpg",
        "imgs/TesteH33.jpg",
        "imgs/TesteV1.jpg",
        "imgs/TesteV2.jpg",
        "imgs/TesteV3.jpg"
    ]

    const imagem = document.getElementById("imagemaletoria");
    imagem.src = colecao[Math.floor(Math.random() * colecao.length)];
    
}

function butone(){
    let element = document.getElementById("mensage");
    element.style.animation = `abrir 0.5s forwards`;

    element.addEventListener("animationend", function handler(){
        element.removeEventListener("animationend", handler);
        
        criarcoracoes("corasub", 1);
        animacorao("animarcorasub", "corasub");
        sumircoracao(1200, "corasub");
    });
}

function musicaalet(){
    let musicaalet = [
        "audio/Lonely Day78.mp3",
        "audio/Aliança30.mp3",
        "audio/Aquela Saudade104.mp3",
        "audio/Disritmia14.mp3",
        "audio/Exagerado30.mp3",
        "audio/GatinhaComunista 40.mp3",
        "audio/Gaucha 61.mp3",
        "audio/MaisNinguém7.mp3",
        "audio/Melô do Amor 67.mp3",
        "audio/MeNamora77.mp3",
        "audio/O Grilo27.mp3",
        "audio/OndaandaVoce21.mp3",
        "audio/Palavras no Corpo63.mp3",
        "audio/QuemDera70.mp3",
        "audio/R U Mine 25.mp3",
        "audio/Tiroalvóro03.mp3",
        "audio/VelhaInfancia 17.mp3",
        "audio/Mr Loverman1.mp3",
        "audio/Hey Lover1.mp3",
        "audio/i love you baby 94.mp3"
    ]
    let segundos = [78, 30, 104, 14, 30, 40, 61, 7, 67, 77, 27, 21, 63,70, 25, 3, 17, 1, 1, 94]
    let indicealeatorio = Math.floor(Math.random()*musicaalet.length)
    return ([musicaalet[indicealeatorio], segundos[indicealeatorio]    ])


}

function audioalet(){
    const musicaesegundo = musicaalet();
    console.log(musicaesegundo)
    let tagdamusica = document.getElementById("musica")

    document.querySelectorAll("#musica source").forEach(source => source.remove());
    tagdamusica.volume = 1;
    let source = document.createElement("source")
    source.src = musicaesegundo[0];
    source.type = "audio/mp3"
    
    tagdamusica.appendChild(source);
    tagdamusica.load();
    tagdamusica.addEventListener("loadeddata",()=> {
        setTimeout(()=> {
            tagdamusica.currentTime = musicaesegundo[1];
            tagdamusica.play();
        },100)
    });
    console.log(tagdamusica)

}

function gradientedovolume(){
    const tagdamusica = document.getElementById("musica")
    let intervalo = setInterval(() => {
        if( tagdamusica.volume > 0.1){
            tagdamusica.volume -= 0.01
            console.log(tagdamusica.volume)
        }else{
            tagdamusica.volume = 0.1;
            clearInterval(intervalo)
        }
    }, 500);
}

botao.addEventListener('click', function(){
    
    cancelar.disabled = true;
    setTimeout(function(){
        let element = document.getElementById("mensage");
        element.style.display = "flex";

        mensagensaleatorias();

        butone();

        imagemaleatoria();
        audioalet();
        cancelar.disabled = false;
    }, 50);       
});

function sumir(){

    botao.disabled = true;
    setTimeout(() => {
        criarcoracoes("cora", 0.9);

        animacorao("animarcoracoes","cora");

        sumircoracao(900, "cora");
        let element = document.getElementById("mensage");
        element.style.display = "none";
        mensagensdobotao();
        
        gradientedovolume();
        botao.disabled = false;
    }, 50);
    

}