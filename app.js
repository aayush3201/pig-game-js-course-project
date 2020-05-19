var scores, currentScore, dice,dice2, diceDOM, activePlayer, playing ;
init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(playing){
        dice = Math.floor(Math.random()*6)+1;
        dice2 = Math.floor(Math.random()*6)+1;

diceDOM.style.display = 'block';
diceDOM.src = 'dice-'+dice+'.png';
diceDOM2.style.display = 'block';
diceDOM2.src = 'dice-'+dice2+'.png';
if(dice !== 1 && dice2 !==1){
    if(dice2 === 6 && dice === 6){
        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        nextPlayer();
    }else{
        currentScore+=dice+dice2;
        document.querySelector('#current-'+activePlayer).textContent=currentScore;
        
    }
     
}
else{
    nextPlayer();
}
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        var win = document.querySelector('.final-score').value;
        if(!(win)){
            win = 100;
        } 
        if(scores[activePlayer]>=win){
            document.querySelector('#name-'+activePlayer).textContent='WINNER!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            diceDOM.style.display = 'none';
            diceDOM2.style.display = 'none';
            playing = false;
        }else{
            nextPlayer();
        }
    }

});

function nextPlayer(){
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    currentScore = 0;
    

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    diceDOM = document.querySelector('.dice');
    diceDOM2 = document.querySelector('.dice2');
    currentScore = 0;
    playing = true;
    
    
    diceDOM.style.display = 'none';
    diceDOM2.style.display = 'none';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}