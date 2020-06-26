(function() {
    document.addEventListener("DOMContentLoaded", function() {
        new Vue({
            el: "#app", 
            data: {
                playerHealth: 100, 
                monsterHealth: 100, 
                gameInProgress: false, 
                logs: []
            }, 
            methods: {
                newGame() {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.gameInProgress = true;
                    this.logs = [];
                }, 
                attack() {
                    this.handleDamage(
                        this.random(3, 8), 
                        this.random(3, 8)
                    );
                }, 
                specialAttack() {
                    this.handleDamage(
                        this.random(5, 15), 
                        this.random(3, 8)
                    );
                }, 
                heal() {
                    var heal = this.random(5, 15);
                    var monsterDamage = this.random(3, 8);
                    this.playerHealth -= monsterDamage;
                    this.playerHealth += heal;
                    this.createLog(`You heal for ${heal}`, "player");
                    this.createLog(`The monster attacks you for ${monsterDamage}`, "monster");
                    this.checkHealth();
                },
                handleDamage(playerDamage, monsterDamage) {
                    this.playerHealth -= monsterDamage;
                    this.monsterHealth -= playerDamage;
                    this.createLog(`You attack the monster for ${playerDamage}`, "player");
                    this.createLog(`The monster attacks you for ${monsterDamage}`, "monster");
                    this.checkHealth();
                },
                checkHealth() {
                    if (this.playerHealth <= 0) {
                        this.playerHealth = 0;
                        this.gameOver('lost');
                    }
                    
                    if (this.playerHealth >= 100) {
                        this.playerHealth = 100;
                    }

                    if (this.monsterHealth <= 0) {
                        this.monsterHealth = 0;
                        this.gameOver('won');
                    }
                },
                createLog(message, source) {
                  this.logs.push({
                      message: message, 
                      source: source,
                  })  
                },
                giveUp() { 
                    this.gameInProgress = false;
                }, 
                random(min, max) {
                    return Math.trunc(Math.random() * max) + min;
                },
                gameOver(status) {
                    var startNewGame = '';
                    if (status == 'won') {
                        startNewGame = prompt('You have defeated the monster, would you like to start a new game?', 'no');
                    }
                    else {
                        startNewGame = prompt('You have been defeated by the monster, would you like to start a new game?', 'no');
                    }

                    if (startNewGame == 'no') {
                        this.gameInProgress = false;
                    }
                    else {
                        this.newGame();
                    }
                }
            },
            computed: {
                playerStyle() {
                    return {
                        backgroundColor: 'green', 
                        margin: 0, 
                        color: 'white', 
                        width: `${this.playerHealth}%`
                    }
                },
                monsterStyle() {
                    return {
                        backgroundColor: 'green', 
                        margin: 0, 
                        color: 'white',
                        width: `${this.monsterHealth}%`
                    }
                }
            }
        });
    });
})();