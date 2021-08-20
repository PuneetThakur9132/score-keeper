const p1Button = document.querySelector('#p1Button'); // selecting p1Button
const p2Button = document.querySelector('#p2Button');// selecting p2 Button
const reset = document.querySelector('#Reset'); // selecting reset Button

const p1Display = document.querySelector('#p1Display') // selecting p1Display
const p2Display = document.querySelector('#p2Display') // selecting p2Display
const winningScoreSelect = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver  = false;

p1Button.addEventListener('click',function(){
  
    if(!isGameOver){
        p1score += 1;
        if(p1score === winningScore){
            isGameOver = true;
            p1Display.classList.add('win');
            p2Display.classList.add('loose');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1score;
         
    }
})

p2Button.addEventListener('click',function(){
  
    if(!isGameOver){
        p2score += 1;
        if(p2score === winningScore){
            isGameOver = true;
            p2Display.classList.add('win');
            p1Display.classList.add('loose');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2score;
         
    }
})

winningScoreSelect.addEventListener('change',function(){

    winningScore = parseInt(this.value);
    resetButton();
})


reset.addEventListener('click',resetButton)

function resetButton(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1Display.classList.remove('win','loose')
    p2Display.classList.remove('win','loose')
    p1Button.disabled = false;
    p2Button.disabled = false;
}



