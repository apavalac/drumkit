for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.classList[1]);

        buttonAnimation(this.classList[1]);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key.toUpperCase());
});

function makeSound(key) {
    console.log(key.toUpperCase());
    let audio = "tom-1.mp3";

    switch (key.toUpperCase()) {
        case "Q":
            audio = "tom-1.mp3";
            break;
        case "W":
            audio = "tom-2.mp3";
            break;
        case "E":
            audio = "tom-3.mp3";
            break;
        case "R":
            audio = "tom-4.mp3";
            break;
        case "T":
            audio = "snare.mp3";
            break;
        case "Y":
            audio = "kick-bass.mp3";
            break;
        case "U":
            audio = "crash.mp3";
            break;

        default:
            audio = "tom-1.mp3";
    }

    let sound = new Audio("sounds/" + audio);
    sound.play();
}

function buttonAnimation(key) {
    let element = document.querySelector("." + key);

    element.classList.add("pressed");

    setTimeout(function() {
        element.classList.remove("pressed")
    }, 100);

    console.log(element);
}