// GAME STATES
//"WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less
// use debugger to step through script
// debugger;
// RANDOM NUMBER-GENERATING FUNCTION
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// GAME VARIABLES
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }, // note comma
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling " + playerInfo.name + "'s health by 20 for 7 dollars.");
            this.health += 20;
            this.money -+ 7;
        }
        else {
            window.alert("Too bad, you don't have enough bank!");
        }
    }, // note comma
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading " + playerInfo.name + "'s attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("Unfortunately you don't have the means for those ends!")
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// START FUNCTION (execute)
var startGame = function () {
    // reset player stats
    playerInfo.reset();

    // increment through the array value
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // announce start of game and battle round #
            window.alert("Welcome to Robot Gladiators. " + "Round " + (i + 1) + " has begun!");

            // move to the next enemy in enemy.name array
            var pickedEnemyObj = enemyInfo[i];

            // reset health value for new enemy
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass pickedenemy.name variable value to fight function, where it will assume value of enemy.name parameter
            console.log("before:", pickedEnemyObj)
            fight(pickedEnemyObj);

            // if player is alive and not fighting the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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

// MAIN GAME FUNCTION
var fight = function (enemy) {
    // repeat and execute as long as the enemy robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {

        // ask user if they would like to fight or skip to next battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player chooses to skip, confirm and break from loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        // if player chooses to fight, then fight
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                // award player money for winning
                playerInfo.money = playerInfo.money + 20;

                //leave while loop since enemy is dead
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
            // generate random number based on enemy's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
    }
}

// END GAME FUNCTION
var endGame = function () {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Congrats, your robot survived! You now have a score of " + playerInfo.money + ". 'Victory belongs to the most persevering!' - Napoleon Bonaparte");
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
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
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
