let esqueleto="off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let botonSonido = new Audio ('sound/botonbailar.mp3');
let botonAudio = new Audio('sound/audio.mp3');

function bailar(){
    if(esqueleto =="off"){
        esqueleto="on"
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        console.log("On");
    }else{
        esqueleto="off"
        esqueletoStop.classList.remove("on")
        console.log("Off");
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        })
    }
}