const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let buttonText = buttons[i].innerText;
        decideKey(buttonText);
        buttonAnimation(buttonText);
    });
}

window.onkeypress = (evt) => {
    decideKey(evt.key);
    buttonAnimation(evt.key);
}

function decideKey(key) {
    switch(key) {
        case "w": 
            playAudio('./sounds/tom-1.mp3');
            break;
        case "a": 
            playAudio('./sounds/tom-2.mp3');
            break;
        case "s": 
            playAudio('./sounds/tom-3.mp3');
            break;
        case "d": 
            playAudio('./sounds/tom-4.mp3');
            break;
        case "j": 
            playAudio('./sounds/snare.mp3');
            break;
        case "k": 
            playAudio('./sounds/crash.mp3');
            break;
        case "l": 
            playAudio('./sounds/kick-bass.mp3');
            break;
    }
}

function playAudio(audio) {
    var sound = new Audio(audio);
    sound.play();
}

var buttonAnimation = (key) => {
    var pressedButton = document.querySelector("." + key);
    pressedButton.classList.add('pressed');
    setTimeout(() => {
        pressedButton.classList.remove('pressed');
    }, 50);
}