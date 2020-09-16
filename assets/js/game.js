//GAME VARIABLES
var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        // window.alert("Welcome to Robot Gladiators. The fight has begun!");

        //ask user if they would like to fight or skip to next battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chooses to skip, confirm and break from loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from PlayerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            // // if no (false), ask question again by running fight() again
            // } else {
            //     fight();
            }
        }
        // //if player chooses to fight, then fight
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");

                // award player money for winning
                playerMoney = playerMoney + 20;

                //leave while loop since enemy is dead
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

            //remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            //check player's health
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
//     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//     enemyHealth = enemyHealth - playerAttack;

//     // Log a resulting message to the console so we know that it worked.
//     console.log(
//         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
//     );

//     // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
//     playerHealth = playerHealth - enemyAttack;

//     // Log a resulting message to the console so we know that it worked.
//     console.log(
//         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//     );

//     //check player's health
//     if (playerHealth <= 0) {
//         window.alert(playerName + " has died!")
//     }
//     else {
//         window.alert(playerName + " still has " + playerHealth + " health left.");
//     }

//     //check to see if the value of the playerHealth variable is greater than 0
//     if (playerHealth > 0) {
//         console.log("Your player is still alive!");
//     }

//     // check enemy's health
//     if (enemyHealth <= 0) {
//         window.alert(enemyNames + " has died!");
//     }
//     else {
//         window.alert(enemyNames + " still has " + enemyHealth + " health left.");
//     }
// }

//Game States
//"WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less


// execute function
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // debugger;
    // call fight function with enemy robot
    fight(pickedEnemyName);
}