const Node={
    canvas:document.getElementById("gameCanvas"),
    scoreDisplay:document.getElementById("score"),
    gameOverMessage:document.getElementById("gameOver")

};

const GameState={

    snake:[{x:10,y:10}],
    direction:{x:1,y:0},
    food:{x:15,y:15},
    bigFood:null,
    score:0,
    regularFoodEaten:0,
    bigFodValue:1000,
    speed:100,
    blinkState:true,
    bigFoodBlinkInterval: null,
    gameInterval: null,

};

const funcE={

getSpeed:()=>{

    let userSpeed=prompt("Enter the speed of the snake (in miliseconds,e.g.,100 for fast, 200 for slow");
    GameState.speed=Math.max(50,Math.min(500,parseInt(userSpeed)))
},

drawSnake:()=>{
    const ctx=NodeE.canvas.getContext("2d");
    ctx.fillRect(0,0,NodeE.canvas.width,NodeE.canvas.height);

    for (let i=0; i < GameState.snake.length; i++){
    ctx.fillStyle=(i===0)?"blue":"lightblue";

    ctx.fillRect(
        GameState.snake[i].x * 20,
        GameState.snake[i].y * 20,
        18 - 2,
        18 - 2
    );

    }
},

drawFood:()=>{
    
    ctx.fillRect(
        GameState.food[i].x * 20,
        GameState.food[i].y * 20,
        18 - 2,
        18 - 2
    );
},

update:()=>{},

generateFood:()=>{},

spawnBigFood:()=>{},

startBigFoodBlink:()=>{},

changeDirection:()=>{},

gameLoop:()=>{},

startGame:()=>{},






}