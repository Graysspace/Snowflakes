// Set Snowflakes for start position
function newRandomSnow() {
    return {
        x: randomInt(0, 900),
        y: randomInt(0, 600),
        r: randomInt(1, 5),
        speed: randomInt(1, 5),
        color: "white"     
    };

}

// Set snowflakes for adding and removing snowflakes
function newSnow(){
    return {
        x: randomInt(0, 900),
        y: -10,
        r: randomInt (1, 5),
        speed: randomInt(1, 5),
        color: "white"
    };
}

// Function for setting start snowflakes
function createRandomBubbleArray(total) {
    for (let n = 1; n <= total; n++) {
     snowflakes.push(newRandomSnow());
    }
    return snowflakes;

}

// Draw Snowflakes
function drawSnow(aSnow) {
    fill("white");
    circle(aSnow.x, aSnow.y, aSnow.r, "fill");
}

// Move Snowflakes
function moveSnow(aSnow) {
    aSnow.x += randomInt(-2, 2);
    aSnow.y += aSnow.speed;
    if (aSnow.y >= cnv.height) {
        aSnow.y = -10;
        aSnow.x = randomInt(0, 900);

    }
}

