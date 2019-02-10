let enemyHealth=100;
let playerHealth=100;

function tipFedora(){
    if (enemyHealth !=0 && enemyHealth>0) { 
        enemyHealth=enemyHealth-5
        }
        enemyCounter()
        drawHealth()
        console.log('Current Enemy Health =', + enemyHealth)
        console.log('Current Player Health =', + playerHealth)  

        document.getElementById('previousAction').innerHTML ='You tipped your fedora dealing 5 Damage to your Enemy'
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/tipgif.gif">' 
        document.getElementById('moreInfo').innerHTML = 'Enemy has counterattacked!'
}

function popCollar(){
    if (enemyHealth !=0 && enemyHealth>0) { 
        enemyHealth=enemyHealth-10
        }
        enemyCounter()
        drawHealth()
        console.log('Current Enemy Health =', + enemyHealth)
        console.log('Current Player Health =', + playerHealth) 
        document.getElementById('previousAction').innerHTML ='You popped your trenchcoat collar dealing 10 Damage to your Enemy'
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/collar.gif">'  
        document.getElementById('moreInfo').innerHTML = 'Enemy has counterattacked!'
}

function dropMlady(){
    if (enemyHealth !=0 && enemyHealth>0) { 
        enemyHealth=enemyHealth-20
        }
        enemyCounter()
        drawHealth()
        console.log('Current Enemy Health =', + enemyHealth) 
        console.log('Current Player Health =', + playerHealth)
        document.getElementById('previousAction').innerHTML ='Oh my, You have dropped a "Mlady" , dealing 20 Damage to your Enemy'
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/mlady.gif">' 
        document.getElementById('moreInfo').innerHTML = 'Enemy has counterattacked!'  
}
//placeholder for enemy attacks//
function enemyCounter(){
playerHealth=playerHealth-5
}

function drinkDew1(){
    if(playerHealth!=0 && playerHealth<80){
        playerHealth=playerHealth+20;
    }else if(playerHealth>79){
        playerHealth=100
    }
drawHealth()
document.getElementById('previousAction').innerHTML = 'YOU DO THE DEW! : You have gained 20 HP';
document.getElementById('previousActionImage').innerHTML ='<img src="./assets/dew.gif">' 
document.getElementById('moreInfo').innerHTML = 'DELICIOUS'  
console.log('Current Player Health =', + playerHealth)
console.log('Current Enemy Health =', + enemyHealth)
}

function drinkDew2(){
    if(enemyHealth!=0 && enemyHealth<80){
        enemyHealth=enemyHealth+20;
    }else if(enemyHealth>79){
        enemyHealth=100
    }
    drawHealth()
document.getElementById('previousAction').innerHTML = 'ENEMY DOES THE DEW! : Enemy has gained 20 HP';
document.getElementById('previousActionImage').innerHTML ='<img src="./assets/dew.gif">'
document.getElementById('moreInfo').innerHTML = 'Enemy appears satisfied' 
console.log('Current Player Health =', + playerHealth)
console.log('Current Enemy Health =', + enemyHealth)
}

function drawKatana1(){
    let katanaSwing = Math.random();
    if (katanaSwing < .49) {
        playerHealth = 0;
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/katanalose.gif">'
        document.getElementById('moreInfo').innerHTML = 'Your lack of skill has resulted in fatal self harm'
     }else if(katanaSwing >.51) {
        enemyHealth= 0;
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/katanawin.gif">'
        document.getElementById('moreInfo').innerHTML = 'YOUR POWER LEVEL IS OVER 9000'
    }
   console.log(playerHealth)
   console.log(enemyHealth)
    drawHealth()
}
function drawKatana2(){
    let katanaSwing = Math.random();
    if (katanaSwing < .49) {
        enemyHealth = 0;
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/katanawin.gif">'
        document.getElementById('moreInfo').innerHTML = 'Your mind games have caused your opponent to destroy himself'
     }else if(katanaSwing >.51) {
        playerHealth= 0;
        document.getElementById('previousActionImage').innerHTML ='<img src="./assets/katanalose.gif">'
        document.getElementById('moreInfo').innerHTML = 'Why did you allow your opponent to draw his blade?'
    }
   console.log(playerHealth)
   console.log(enemyHealth)
    drawHealth()
}

function resetButton(){
    if (enemyHealth<100){
        enemyHealth=100
    }
    if (playerHealth<100){
        playerHealth=100
    }
        document.getElementById('previousAction').innerHTML = '';
        document.getElementById('previousActionImage').innerHTML = '';
        document.getElementById('moreInfo').innerHTML = '';
    drawHealth()
    console.log('Current Player Health =', + playerHealth)
    console.log('Current Enemy Health =', + enemyHealth) 

}

function drawHealth(){
    document.getElementById('enemyHealth').innerHTML = `
    <progress value="${enemyHealth}" max="100"></progress>
    `
    document.getElementById('playerHealth').innerHTML = `
    <progress value="${playerHealth}" max="100"></progress>
    `
        if(enemyHealth <= 0 && playerHealth > 0) {
            document.getElementById('previousAction').innerHTML = 'The White Knight is Victorious';
        } else if(playerHealth <=0 && enemyHealth > 0) {
            document.getElementById('previousAction').innerHTML = 'Darkness Hath Prevailed, Your enemy is victorious';
    }
    
}
drawHealth()


// if (enemyHealth<=0){
//     alert('OK YOU GOT HIM... Jeez he is at ' + enemyHealth  + ' health mlord')