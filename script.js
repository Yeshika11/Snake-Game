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

    ctx.fillStyle= "red";
    
    ctx.fillRect(
        GameState.food[i].x * 20,
        GameState.food[i].y * 20,
        18 - 2,
        18 - 2
    );

    if(GameState.bigFood && GameState.blinkState){

        ctx.fillStyle= "gold";
    
    ctx.fillRect(
        GameState.bigFood[i].x * 20,
        GameState.bigFood[i].y * 20,
        18 - 2,
        18 - 2
    );
    }

},


update:()=>{

const head={x:GameState.snake[0].x+GameState.direction.x,y:GameState.snake[0].y+GameState.direction.y}

if(head.x<0|| head.x>=NodeE.canvas.width/20||head.y<0||head.y>=NodeE.canvas.height/20 ||
   GameState.snake.some(segment => segment.x === head.x&& segment.y === head.y)

) {

    clearInterval(GameState.gameInterval);
    clearInterval(GameState.bigFoodBlinkInterval);
    NodeE.gameOverMessage.style.display="block";
    return;

}

if(
    head.x === GameState.food.x  &&
    head.y === GameState.food.x
   
){
    GameState.score+=1;
    GameState.regularFoodEaten++;



    if(GameState.regularFoodEaten>=5){
        funcE.spawnBigFood();
        GameState.regularFoodEaten=0;
    };

    GameState.food=funcE.generateFood();


} else if(
    GameState.bigFood &&
    head.x === GameState.bigFood.x &&
    head.y === GameState.bigFood.y
) {
    GameState.score += GameState.bigFodValue;

    clearInterval(GameState.bigFoodBlinkInterval);
    GameState.bigFood = null;
} else{
    GameState.snake.pop();
}

GameState.snake.unshift(head);

 const ctx=NodeE.canvas.getContext("2d");

 ctx.fillRect(0,0,NodeE.canvas.width,NodeE.canvas.height);


},




generateFood:()=>{

    const x= Math.floor(Math.random()* NodeE.canvas.width/20);
    const y= Math.floor(Math.random()* NodeE.canvas.height/20);
    return{x,y};

},

spawnBigFood:()=>{

GameState.bigFood=funcE.generateFood();
funcE.startBigFoodBlink();



},

startBigFoodBlink:()=>{

GameState.blinkState=true;
GameState.bigFoodBlinkInterval=setInterval(()=>{
    
    GameState.blinkState=!GameState.blinkState;
}, 300);


},

changeDirection:(event)=>{

    switch (event.key) {
        case "ArrowUp":
            if(GameState.direction.y===0)GameState.direction={x:0,y:-1};
            break;
             case "ArrowDown":
                 if(GameState.direction.y===0)GameState.direction={x:0,y:1};
                 break;

                 case "ArrowLeft":
                    if(GameState.direction.x===0)GameState.direction={x:-1,y:0};
                    break;
                    case "ArrowRight":
                       if(GameState.direction.x===0)GameState.direction={x:1,y:0};
                       break;

    }
},

gameLoop:()=>{

funcE.update();

},

startGame:()=>{

funcE.getSpeed();
GameState.snake=[{x:10, y:10}];
GameState.direction={x:1,y:0}
GameState.food=funcE.generateFood();
GameState.score=0;
GameState.regularFoodEaten=0;
GameState.bigFood=null;
NodeE.gameOverMessage.style.display="none";
GameState.gameInterval=setInterval(funcE.gameLoop,GameState.speed)



},


};


document.addEventListener("keydown", funcE.changeDirection);
funcE.startGame();