/* to do
-edit tip and pop like mlady to allow for double damage 
-correct defeat / vicotry messages
-add dorito image swaps to reset function (set disabled to false)
-add instructions to default page load spans
-add message to reset spans
*/

let enemyHealth = 100;
let playerHealth = 100;

let playerDoritosActive = false
let enemyDoritosActive = false

function tipFedora() {
    let damageAmount = 5;
    if (enemyHealth != 0 && enemyHealth > 0) {
        if (playerDoritosActive ==true){
            damageAmount = damageAmount *2;
        }
        enemyHealth= enemyHealth -damageAmount;
    }
    enemyCounter()
    drawHealth()
    console.log('Current Enemy Health =', + enemyHealth)
    console.log('Current Player Health =', + playerHealth)
    if (playerHealth >0 && enemyHealth >0)
    {
        if (playerDoritosActive) {
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/tipgif.gif">'
        playerDoritosActive = false;
    } else {
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/tipgif.gif">'
    }
    document.getElementById('previousAction').innerHTML = `You tipped your fedora dealing ${damageAmount} damage`
    document.getElementById('moreInfo').innerHTML = 'Enemy has counterattacked!'
    }
}

function popCollar() {
    let damageAmount = 10;
    if (enemyHealth != 0 && enemyHealth > 0) {
        if (playerDoritosActive== true){
            damageAmount = damageAmount * 2;
        }
        enemyHealth = enemyHealth -damageAmount;
    }
    enemyCounter()
    enemyCounter()
    enemyCounter() 
    drawHealth()
    console.log('Current Enemy Health =', + enemyHealth)
    console.log('Current Player Health =', + playerHealth)
    if (playerHealth >0 && enemyHealth >0)
    {
        if (playerDoritosActive) {
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/collar.gif">'
        playerDoritosActive = false;
    } else {
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/collar.gif">'
    }
    document.getElementById('previousAction').innerHTML = `You popped your trenchcoat collar dealing ${damageAmount} damage`
    document.getElementById('moreInfo').innerHTML = 'Enemy has counterattacked!'
    }
}

function dropMlady() {
    let damageAmount = 20;
    if (enemyHealth != 0 && enemyHealth > 0) {
        if (playerDoritosActive == true) {
            damageAmount = damageAmount * 2;
        }
        enemyHealth = enemyHealth - damageAmount;
    }
    enemyCounter()
    drawHealth()
    console.log('Current Enemy Health =', + enemyHealth)
    console.log('Current Player Health =', + playerHealth)
    if (playerHealth >0 && enemyHealth >0)
    {
        if (playerDoritosActive) {
            document.getElementById('previousActionImage').innerHTML = '<img src="./assets/mlady.gif">'
            playerDoritosActive = false;
        } else {
            document.getElementById('previousActionImage').innerHTML = '<img src="./assets/mlady.gif">'
        }
        document.getElementById('previousAction').innerHTML = `Oh my, You have dropped a "Mlady" , dealing ${damageAmount} damage`
        document.getElementById('moreInfo').innerHTML = 'Enemy has counterattacked!'
    }
}
//placeholder for enemy attacks//
function enemyCounter() {
    playerHealth = playerHealth - 5
}

function drinkDew1() {
    if (playerHealth != 0 && playerHealth < 80) {
        playerHealth = playerHealth + 20;
    } else if (playerHealth > 79) {
        playerHealth = 100
    }
    drawHealth()
    document.getElementById('previousAction').innerHTML = 'YOU DO THE DEW! : You have gained 20 HP';
    document.getElementById('previousActionImage').innerHTML = '<img src="./assets/dew.gif">'
    document.getElementById('moreInfo').innerHTML = 'DELICIOUS'
    console.log('Current Player Health =', + playerHealth)
    console.log('Current Enemy Health =', + enemyHealth)
}

function drinkDew2() {
    if (enemyHealth != 0 && enemyHealth < 80) {
        enemyHealth = enemyHealth + 20;
    } else if (enemyHealth > 79) {
        enemyHealth = 100
    }
    drawHealth()
    document.getElementById('previousAction').innerHTML = 'ENEMY DOES THE DEW! : Enemy has gained 20 HP';
    document.getElementById('previousActionImage').innerHTML = '<img src="./assets/dew.gif">'
    document.getElementById('moreInfo').innerHTML = 'Enemy appears satisfied'
    console.log('Current Player Health =', + playerHealth)
    console.log('Current Enemy Health =', + enemyHealth)
}
function eatChip1(){
playerDoritosActive = true;
document.getElementById('playerChip').disabled = true;
document.getElementById('playerChip').innerHTML = `<img src="./assets/doritoshot.png">`
document.getElementById('previousAction').innerHTML = ' DORITO DOUBLE DAMAGE ACTIVE FOR NEXT ATTACK!';
document.getElementById('previousActionImage').innerHTML = `<img src="./assets/2x.png">`;
document.getElementById('moreInfo').innerHTML = '';
}
function eatChip2(){
enemyDoritosActive = true;
document.getElementById('enemyChip').disabled = true;
document.getElementById('enemyChip').innerHTML = `<img src="./assets/doritoshot.png">`
document.getElementById('previousAction').innerHTML = ' DORITO DOUBLE DAMAGE ACTIVE FOR NEXT ATTACK!';
document.getElementById('previousActionImage').innerHTML = `<img src="./assets/2x.png">`;
document.getElementById('moreInfo').innerHTML = '';
}

function drawKatana1() {
    let katanaSwing = Math.random();
    if (katanaSwing < .49) {
        playerHealth = 0;
        drawHealth()
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/katanalose.gif">'
        document.getElementById('moreInfo').innerHTML = 'Your lack of skill has resulted in fatal self harm'
    } else if (katanaSwing > .51) {
        enemyHealth = 0;
        drawHealth()
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/katanawin.gif">'
        document.getElementById('moreInfo').innerHTML = 'YOUR POWER LEVEL IS OVER 9000'
        
    }
    console.log(playerHealth)
    console.log(enemyHealth)
    // drawHealth()
    // document.getElementById('previousActionImage').innerHTML = '<img src="./assets/katanawin.gif">'
    // document.getElementById('moreInfo').innerHTML = 'YOUR POWER LEVEL IS OVER 9000'
}
function drawKatana2() {
    let katanaSwing = Math.random();
    if (katanaSwing < .49) {
        enemyHealth = 0;
        drawHealth()
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/katanawin.gif">'
        document.getElementById('moreInfo').innerHTML = 'Your mind games have caused your opponent to destroy himself'
    } else if (katanaSwing > .51) {
        playerHealth = 0;
        drawHealth()
        document.getElementById('previousActionImage').innerHTML = '<img src="./assets/katanalose.gif">'
        document.getElementById('moreInfo').innerHTML = 'Why did you allow your opponent to draw his blade?'
    }
    console.log(playerHealth)
    console.log(enemyHealth)
}

function resetButton() {
    if (enemyHealth < 100) {
        enemyHealth = 100
    }
    if (playerHealth < 100) {
        playerHealth = 100
    }
    document.getElementById('previousAction').innerHTML = ' tip: Doritos can only be used once per game';
    document.getElementById('previousActionImage').innerHTML = 'tip: Katana can one shot, both the enemy and yourself';
    document.getElementById('moreInfo').innerHTML = 'tip: There are 5 endings, have you seen them all?';
    document.getElementById('playerChip').disabled = false;
    document.getElementById('enemyChip').disabled = false;
    document.getElementById('playerChip').innerHTML = `<img src="./assets/doritos.png">`
    document.getElementById('enemyChip').innerHTML = `<img src="./assets/doritos.png">`
    drawHealth()
    console.log('Current Player Health =', + playerHealth)
    console.log('Current Enemy Health =', + enemyHealth)

}

function drawHealth() {
    document.getElementById('enemyHealth').innerHTML = `
    <progress value="${enemyHealth}" max="100"></progress>
    `
    document.getElementById('playerHealth').innerHTML = `
    <progress value="${playerHealth}" max="100"></progress>
    `
    if (enemyHealth <= 0 && playerHealth > 0) {
        console.log('victory was achieved, updating the image')
        document.getElementById('previousAction').innerHTML = 'The White Knight is Victorious';
        document.getElementById('previousActionImage').innerHTML =  `<img src="./assets/winning.gif">`;
        document.getElementById('moreInfo').innerHTML = '';
    } else if (playerHealth <= 0 && enemyHealth > 0) {
        document.getElementById('previousAction').innerHTML = 'Darkness Hath Prevailed, Your enemy is victorious';
        document.getElementById('previousActionImage').innerHTML =  `<img src="./assets/lose.gif">`;
        document.getElementById('moreInfo').innerHTML = '';
    } else if(playerHealth <= 0 && enemyHealth <= 0){
        document.getElementById('previousAction').innerHTML = 'You are both dead...';
        document.getElementById('previousActionImage').innerHTML = `<img src="./assets/oops.gif">`;
        document.getElementById('moreInfo').innerHTML = '...Great Job';

    }

}
drawHealth()

