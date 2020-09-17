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
var enemyHealth = 50;
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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // if player chooses to fight, then fight
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // generate random damage value based on player's attack power
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");

                // award player money for winning
                playerMoney = playerMoney + 20;

                //leave while loop since enemy is dead
                break;
            }
            else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
            // generate random number based on enemy's attack power
            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            playerHealth = Math.max(0, playerHealth - damage);
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

// START FUNCTION (execute)
var startGame = function () {
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
            enemyHealth = randomNumber(40, 60);

            // pass pickedEnemyName variable value to fight function, where it will assume value of enemyName parameter
            fight(pickedEnemyName);

            // // use debugger to step through script
            // debugger;
            // if player is alive and not fighting the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if user would like to shop before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, call the store function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("Aww, you have lost your robot in battle. GAME OVER. Yet to paraphrase Hemingway, 'A robot is not made for defeat. A robot may be destroyed but never defeated.'");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight
    endGame();
};

// RANDOM NUMBER-GENERATING FUNCTION
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// END GAME FUNCTION
var endGame = function () {
    // if player is still alve, player wins!
    if (playerHealth > 0) {
        window.alert("Congrats, your robot survived! You now have a score of " + playerMoney + ". 'Victory belongs to the most persevering!' - Napoleon Bonaparte");
    }
    else {
        window.alert("Sadly, your robot has been defeated. May this quote from Mahatma Gandhi be of consolation: 'Victory attained by violence is tantamount to a defeat, for it is momentary.'");
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

// SHOP FUNCTION
var shop = function () {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use a switch statement to carry out the action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("Too bad, you don't have enough bank!")
            }
            break;

        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attach and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("Unfortunately you don't have the means for those ends!")
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
// start the game when the page loads
startGame();
