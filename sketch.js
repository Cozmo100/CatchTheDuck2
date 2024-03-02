var splashscreen
var playerImg, player,playbutton,infobutton
var gameState="wait"

// loading assets like images sound videos etc
function preload() {
splashscreen = loadImage("INTROSCREEN.gif")
playerImg = loadImage("COWGIRLRUNNING.gif")
}


// setting up the game like creating canvas, sprites, button etc
function setup(){
createCanvas(windowWidth, windowHeight);

player=createSprite(100,height-100)
player.addImage(playerImg)


playbutton = createImg("PLAYBUTTON.png")
playbutton.position(width/4,height-500)
playbutton.size(500, 500)


infobutton = createImg("MENUBUTTON.png")
infobutton.position(width/3, height-340)
infobutton.size(500, 500)

}


// this function runs on every frame till the codes are running
function draw() {
    if (gameState == "wait") {
        background(splashscreen)
    }


    playbutton.mousePressed(() => {
        playbutton.hide()
        gameState = "level1"
    })



    if (gameState === "level1") {
        background("red")
    }

    drawSprites()


}