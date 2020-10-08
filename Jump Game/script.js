var character  =
document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    /* only add animate class if it hasn't 
       been added, to avoid spam by user.
    */
    if(character.classList.contains("animate")) {
        return
    }
    character.classList.add("animate");
    
    /* 
        after animation is done, remove
        the animation class.
    */
    setTimeout(() => {
        character.classList.remove("animate");
    },500);
}

/*
    Hit detection. If they are on top of
    each other, you lose.
*/
var checkDead = setInterval(function() {
    /* 
        get top position of character
    */
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    /* characterTop will check whether they
        have jumped 20px, meaning they have
        not jumped over the entire block
    */
    if(blockLeft<20 && blockLeft>0 && characterTop>=130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You LOSE!");
    }
}, 10);