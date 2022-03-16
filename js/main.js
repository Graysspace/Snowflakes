
// Set Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create Array
let snowflakes = [];

// Set Start Snowflakes
createRandomBubbleArray(100);


// Draw Function
requestAnimationFrame(draw);
function draw() {
    background("black");

    for (let i=0; i < snowflakes.length; i++) {
        moveSnow(snowflakes[i]);
        drawSnow(snowflakes[i]);
    }

    requestAnimationFrame(draw);
}

// Use left and right arrow keys to add and remove snowflakes
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { 
        // Right Arrow
        // Add a new random bubble
        addSnow();
    } else if (event.keyCode === 37) {
        // Left Arrow - Remove the Last Bubble
        snowflakes.pop();
    }
}
function addSnow() {
    snowflakes.push(newSnow());
}

