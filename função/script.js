let elemento = document.getElementById("figura")
let troca = document.getElementById("imagem")
let texto = document.getElementById("msg")

function mensagem(){
    texto.innerHTML = "Aprendendo sobre eventos!!" ;
    alert ("Aprendendo sobre eventos!!");
    elemento.style.backgroundColor = "#000";
    elemento.style.color = "#00f";
}

function mostrarimg1(){
    troca.setAttribute("scr","imagens/download.jpeg");
    texto.innerHTML = "imagem 1"
}

function mostrarimg2(){
    troca.setAttribute("scr","imagens/download.jpeg");
    texto.innerHTML = "imagem 2"
}

elemento.addEventListener("click", mensagem);
troca.addEventListener("mouseover", mostrarimg1);
troca.addEventListener("mouseout", mostrarimg2);

document.addEventListener("keydown", function (event){
    let  tecla = event.keyCode;
    if(tecla == 37) {
        px -= 10;
        elemento.style.left = px + "px";
    }else if(tecla == 38){
    py -=10;
    elemento.style.top = py +"px";
    }else if(tecla == 39){
    px +=10;
    elemento.style.left = px + "px";
    }else if (tecla == 40){
    py += 10;
    elemento.style.top = py + "px";
    }

    })

