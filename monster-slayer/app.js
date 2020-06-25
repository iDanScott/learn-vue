(function() {
    document.addEventListener("DOMContentLoaded", function() {
        new Vue({
            el: "#app", 
            data: {
                playerHealth: 100, 
                monsterHealth: 100, 
                gameInProgress: false, 
                log: []
            }, 
            methods: {
                newGame() {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.gameInProgress = true;
                    this.log = [];
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
                    this.handleDamage(
                        0, 
                        this.random(3, 8)
                    );
                    this.playerHealth += this.random(5, 15);
                    
                    if (this.playerHealth >= 100) {
                        this.playerHealth = 100;
                    }
                },
                handleDamage(playerDamage, monsterDamage) {
                    this.playerHealth -= monsterDamage;
                    this.monsterHealth -= playerDamage;
                    
                    if (this.playerHealth < 0) {
                        this.playerHealth = 0;
                    }

                    if (this.monsterHealth < 0) {
                        this.monsterHealth = 0;
                    }
                },
                giveUp() { 
                    this.gameInProgress = false;
                }, 
                random(min, max) {
                    return Math.trunc(Math.random() * max) + min;
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