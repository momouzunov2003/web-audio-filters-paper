var audioContext = null;
var oscillator = null;

function startSine() {
    var button = document.getElementById("sine");

    if(button.innerText === "Синусоида старт") {
        button.innerText = "Синусоида стоп";
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        osc = audioContext.createOscillator();
        osc.type = 'sine';
        osc.frequnecy = 440;
        osc.connect(audioContext.destination);
        osc.start();
    }
    else if(button.innerText === "Синусоида стоп") {
        if(oscillator) {
            oscillator.stop();
            oscillator = null;
        }
        
        if(audioContext) {
            audioContext.close();
            audioContext = null;
        }
        button.innerText = "Синусоида старт";
    }
}

function startSquare() {
    var button = document.getElementById("square");

    if(button.innerText === "Правоъгълна старт") {
        button.innerText = "Правоъгълна стоп";
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        osc = audioContext.createOscillator();
        osc.type = 'square';
        osc.frequnecy = 440;
        var gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);
        osc.start();
    }
    else if(button.innerText === "Правоъгълна стоп") {
        if(oscillator) {
            oscillator.stop();
            oscillator = null;
        }
        
        if(audioContext) {
            audioContext.close();
            audioContext = null;
        }
        button.innerText = "Правоъгълна старт";
    }
}

function startTri() {
    var button = document.getElementById("triangle");

    if(button.innerText === "Триъгълна старт") {
        button.innerText = "Триъгълна стоп";
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        osc = audioContext.createOscillator();
        osc.type = 'triangle';
        osc.frequnecy = 440;
        osc.connect(audioContext.destination);
        osc.start();
    }
    else if(button.innerText === "Триъгълна стоп") {
        if(oscillator) {
            oscillator.stop();
            oscillator = null;
        }
        
        if(audioContext) {
            audioContext.close();
            audioContext = null;
        }
        button.innerText = "Триъгълна старт";
    }
}

function startSaw() {
    var button = document.getElementById("sawtooth");

    if(button.innerText === "Трион старт") {
        button.innerText = "Трион стоп";
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        osc = audioContext.createOscillator();
        osc.type = 'sawtooth';
        osc.frequnecy = 440;
        var gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);
        osc.start();
    }
    else if(button.innerText === "Трион стоп") {
        if(oscillator) {
            oscillator.stop();
            oscillator = null;
        }
        
        if(audioContext) {
            audioContext.close();
            audioContext = null;
        }
        button.innerText = "Трион старт";
    }
}

const navbar = document.getElementById('navbar');

document.addEventListener('mousemove', (event) => {
    if (event.clientX <= 20) {
        navbar.classList.add('show');
    } else if (event.clientX > 200) {
        navbar.classList.remove('show');
    }
});