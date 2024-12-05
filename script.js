//pega o hamburguer
var character = document.getElementById("character");
//pega a boca
var block = document.getElementById("block");
//contador
var counter = 0;
//função pra pular
function jump() {
    //if da animação do hamburguer pulando
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}
//var pra ver se perdeu o jogo
var checkDead = setInterval(function () {
    //hitbox do hamburguer
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 3 && blockLeft > -20 && characterTop >= 130) {
        //mensagem de colisão e velocidade da boca
        block.style.animation = "none";
        alert("Perdeu. Pontuação adquirida: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 0.8s infinite linear";
    } else {
        //contador de pontos
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);