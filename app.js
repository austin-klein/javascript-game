const startBtn = document.getElementById('start');
const checkBtn = document.getElementById('check');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
let sound1 = document.getElementById('sound1');
let sound2 = document.getElementById('sound2');
let seq = [];
let playerSeq = [];
let arrayCheck = [];
let isPlayersTurn = false;
let canCheck = false;
let count = 1;

    one.addEventListener('click', () => {
 
     if(isPlayersTurn === true){
         sound2.play();
        playerSeq.push(1);
        console.log(playerSeq);
     }
    })
    two.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(2);
        console.log(playerSeq);
     }
    })
    three.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(3);
        console.log(playerSeq);
     }
    })
    four.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(4);
        console.log(playerSeq);
     }
    })
    five.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(5);
        console.log(playerSeq);
     }
    })
    six.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(6);
        console.log(playerSeq);
     }
    })
    seven.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(7);
        console.log(playerSeq);
     }
    })
    eight.addEventListener('click', () => {
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(8);
        console.log(playerSeq);
     }
    })
    nine.addEventListener('click', () => { 
     if(isPlayersTurn === true){
        sound2.play();
        playerSeq.push(9);
        console.log(playerSeq);
     }
    });

    checkBtn.addEventListener('click', () => {
        canCheck = true;
        console.log('calling check');
        check();
    });
 

startBtn.addEventListener('click', () => {
    start();
    startBtn.style.display = 'none';
    checkBtn.style.display = 'inherit';
});

function start(){
    for(let i = 0; i < 10; i++){
        seq.push(Math.ceil(Math.random() * 9))
    }
    console.log(seq);

    compTurn();
}

function compTurn(){
    
    let i = 0;                  
    function myLoop() {       
      setTimeout(function() {   
        switch(seq[i]){
            case 1: one.style.background='red';
            sound1.play();
            setTimeout(() => {
                one.style.background='rgba(128, 128, 128, 0.5)'
            }, 1000);
            break;
            case 2: two.style.background='rgb(0, 255, 0)';
            sound1.play();
            setTimeout(() => {
             two.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 3: three.style.background='rgb(0, 0, 255)';
            sound1.play();
            setTimeout(() => {
             three.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 4: four.style.background='rgb(255, 255, 0)';
            sound1.play();
            setTimeout(() => {
             four.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 5: five.style.background='rgb(255, 255, 255)';
            sound1.play();
            setTimeout(() => {
             five.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 6: six.style.background='rgb(255, 0, 255)';
            sound1.play();
            setTimeout(() => {
             six.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 7: seven.style.background='rgb(0, 255, 255)';
            sound1.play();
            setTimeout(() => {
             seven.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 8: eight.style.background='rgb(255, 166, 0)';
            sound1.play();
            setTimeout(() => {
             eight.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break;
            case 9: nine.style.background='rgb(0, 51, 0)';
            sound1.play();
            setTimeout(() => {
             nine.style.background='rgba(128, 128, 128, 0.5)'
         }, 1000);
            break; 
        }
        i++;                   
        if (i < count) {          
          myLoop();             
        }  else {
            setTimeout(() => {
                console.log('test')
                one.style.background = null;
                two.style.background = null;
                three.style.background = null;
                four.style.background = null;
                five.style.background = null;
                six.style.background = null;
                seven.style.background = null;
                eight.style.background = null;
                nine.style.background = null;
                playerTurn();
            }, 2000);
        
        }           
      }, 1300)
    }
    
    myLoop();  

}

function playerTurn() {
    isPlayersTurn = true;
    one.classList.add('hover1');
    one.classList.add('active1');
    two.classList.add('hover2');
    two.classList.add('active2');
    three.classList.add('hover3');
    three.classList.add('active3');
    four.classList.add('hover4');
    four.classList.add('active4');
    five.classList.add('hover5');
    five.classList.add('active5');
    six.classList.add('hover6');
    six.classList.add('active6');
    seven.classList.add('hover7');
    seven.classList.add('active7');
    eight.classList.add('hover8');
    eight.classList.add('active8');
    nine.classList.add('hover9');
    nine.classList.add('active9');

}



function check(){
    isPlayersTurn = false;
    one.classList.remove('hover1');
    one.classList.remove('active1');
    two.classList.remove('hover2');
    two.classList.remove('active2');
    three.classList.remove('hover3');
    three.classList.remove('active3');
    four.classList.remove('hover4');
    four.classList.remove('active4');
    five.classList.remove('hover5');
    five.classList.remove('active5');
    six.classList.remove('hover6');
    six.classList.remove('active6');
    seven.classList.remove('hover7');
    seven.classList.remove('active7');
    eight.classList.remove('hover8');
    eight.classList.remove('active8');
    nine.classList.remove('hover9');
    nine.classList.remove('active9');
    
    if (canCheck === true){
    for(let i = 0; i < count; i++){
        if(seq[i] === playerSeq[i]){
            arrayCheck.push('');
            console.log('array check', arrayCheck);
        } else {
            console.log('bad');
        }
    }
}

    if (arrayCheck.length === count && playerSeq.length === count) {
        console.log('next turn')
        playerSeq = [];
        arrayCheck = [];
        canCheck = false;
        count++;
        compTurn();

    } else {
       alert('game over');
       location.reload();
    }
}








