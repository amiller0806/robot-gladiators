var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;
// You can also log multiple values like this
 console.log(playerName, playerAttack, playerHealth);


 var enemyName = "Roborto";
 var enemyHealth = 50;
 var enemyAttack = 12;

 var fight = function() {
    window.alert ("Welcome to Robot Gladiators!");


 enemyHealth = enemyHealth - playerAttack;
 console.log (playerName + " attacked" + enemyName + "." + enemyName + " and now has" + enemyHealth + " health remaining.");

 //  check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;
console.log (enemyName + " attacked" + playerName + "." + playerName + " and now has" + playerHealth + " health remaining.");
 };
//  execute function
fight();
