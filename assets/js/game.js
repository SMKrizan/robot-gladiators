var playerName = window.prompt("What is you robot's name?");
//note the lack of quotation marks around playerName
console.log("Our robot's name is " + playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Before building even a simple function is is best practice to outline the steps describing what the function will accomplish as preparation, as follows:
var fight = function () {
    // ask users whether they want to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining.");

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + "health left.")
        }
        //if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from PlayerMoney for skipping
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        }
    }
    //alert users that round is starting
    window.alert("Welcome to Robot Gladiators!");
    window.alert(playerName + " is ready for battle!");

    //subtract value of 'playerAttack' from value of 'enemyHealth' and update 'enemyHealth' variable (this is called 'scoping' a variable).
    enemyHealth = enemyHealth - playerAttack;

    //log result message to console to confirm
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )
    //subtract value of enemyAttack from playerHealth and update 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    //log result message to console as confirmation
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    //check to see if the value of the playerHealth variable is greater than 0
    if (playerHealth > 0) {
        console.log("Your player is still alive!");
    }

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

// execute function
fight();