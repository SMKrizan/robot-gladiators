// GAME STATES
//"WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

// GAME VARIABLES
var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 12;

// MAIN GAME FUNCTION
var fight = function (enemyNames) {
    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {

        // ask user if they would like to fight or skip to next battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player chooses to skip, confirm and break from loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from PlayerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // if player chooses to fight, then fight
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");

                // award player money for winning
                playerMoney = playerMoney + 20;

                //leave while loop since enemy is dead
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
    }
}

// EXECUTE FUNCTION / function to start a new game
var startGame = function () {
    // // use debugger to step through script
    // debugger;
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // increment through the array value
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // announce start of game and battle round #
            window.alert("Welcome to Robot Gladiators. " + "Round " + (i + 1) + " has begun!");

            // move to the next enemy in enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset health value for new enemy
            enemyHealth = 50;

            // pass pickedEnemyName variable value to fight function, where it will assume value of enemyName parameter
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! To paraphrase Hemingway - 'A robot is not made for defeat. Robot can be destroyed but not defeated.' Game Over.");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight
    endGame();
};

// END GAME FUNCTION
var endGame = function() {
    // if player is still alve, player wins!
    if (playerHealth > 0) {
        window.alert("Congrats, your robot survived! You now have a score of " + playerMoney + ". 'Victory belongs to the most persevering!' - Napoleon Bonaparte");
    }
    else {
        window.alert("Your robot has been defeated. Let this quote from Mahatma Gandhi be of consolation: 'Victory attained by violence is tantamount to a defeat, for it is momentary.'");
    }
    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon.");
    }
}
// start the game when the page loads
startGame();