
var adventure_stats = [0,0,0];
var player_stats = [20,100,10];
var setstats = [20,100,10];
let heroesunlocked = new Array(["Joe"]);
var currenthero = "Joe";
var dead = 1;
var money = 0;
var xp = 0;
heropick = 0;
var lvl = 1;
const herolist = ["Joe","Bobby","Jane","Grayson","The Captain","Tom","Jakr","Lee"]
const herohp = [100, 200, 80, 60, 75, 300, 125, 50]
const heroatk = [20, 10, 5, 40, 30, 5, 10, 50]
const herodef = [10, 15, 25, 5, 10, 20, 30, 5]
const heroclasses = ["All-Rounder","Tank","Healer", "Assasin", "Damage Dealer", "Tank", "Healer", "Assassin"];
const herorar = ["Common", "Rare", "Rare", "Rare", "Epic", "Epic", "Legendary", "Legendary"];
const herospec = ["Average Joe. Punches and Kicks.", "Tankier guy.", "Girl with better healing.","Punches and kicks better.","Bombs away! Rain 2* damage at the cheap cost of 10 hp.","Run Over: Deals damage based on HP/5","Power Heal: Takes half of the heal and uses it as damage. Ultra Blast: Converts 5 hp to 30 damage.","Dragon Kick: Has 50% HP steal. Heavy Blow: Deals 2x damage. Lose 5hp. Never misses"]



const suburbenemytypes = ["Teenaager", "Bully", "Gangster", "Punk Kid", "Grumpy Old Man", "Feya"];
const suburbimages = ["teenager.png.","bully.png","gangster.png","punk.png","oldguy.png","Feya.png"]
const suburbhealth = [25,75,150,60,55,40]
const suburbdef = [5,10,4,12,30,2]
const suburbatk = [15, 10, 10, 8, 5, 50]
const suburbresp = ["You found a dead cat while walking around. It hurt your felines.",
"You stop and wonder why you are waking around waiting to defeat things in the suburbs.",
"You hear your mom looking for you. You quickly dodge her.",
"The gang boss walks by you. You shiver in fear.", 
'A man named luke walks up to a guy in a fully black suit. The other man says "I AM YOUR FATHER". Three minutes later, you find the other man without his head.',
"You see a bunch of kids walking to school. Why go to school when you can explore the nighbourhood?",
"A girl walks up to you and winks. She offers you a night you won't forget. You move along.",
"You wonder why you are walking around in the suburbs when you could be doing something productive. Like walking around the subrubs.",
"These jokes are very funny. This was a joke too.",
"You wonder if there is anything else in the world besides the suburbs.",
"I love My angry ink raditor actor!",
"You walk home, then go out of your home.",
"You find a dying man on the street. You throw him into the garbage and move on.",
"Take a break. Or don't.",
"You wonder if there actually is a story."];
const suburbchoice = ["You found a box! Open it?",
"A strange man asks you for help. Yes or no?",
"Your mother offers you a gift. Accept?",
"A nigerian prince is requesting money. Give some?",
"A pretty girl offers you a night for some cash. Wanna bargain?",
"A man tells you to kill a kid named James. Do it?",
"A young boy is look for the Black Parade. Help him?"];

const sleep = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

function loadUp() {
    
    saved = localStorage.getItem("saved");
    if (saved == "hey") {
        heroesunlocked = JSON.parse(localStorage.getItem("heroes"));
        currenthero = localStorage.getItem("hero");
        setstats = JSON.parse(localStorage.getItem("stats"));
        money = Number(localStorage.getItem("money"));
        xp = Number(localStorage.getItem("xp"));
        lvl = Number(localStorage.getItem("lvl"));
        document.getElementById("gamehead1").innerHTML = "Current Hero: "+currenthero;
    } else {
        localStorage.setItem("saved","hey");
        saveVal()
        document.getElementById("gamehead1").innerHTML = "Current Hero: "+currenthero
    }
    
}

function choice() {
    document.getElementById("gamehead1").innerHTML = "Story";
    rand = RandInt(6);
    document.getElementById("gamehead2").innerHTML = suburbchoice[Number(rand)];
    
    Delay().then(() => {
        console.log("1s");
        document.getElementById("button1").innerHTML = "Yes!"
        document.getElementById("button2").innerHTML = "No!"
        document.getElementById("button3").innerHTML = "Continue"
        document.getElementById("button1").setAttribute('onclick', "yes()");
        document.getElementById("button2").setAttribute('onclick', "no()");
        document.getElementById("button3").setAttribute('onclick', "game()");
    })


}

function yes() {
    chance = RandInt(2);
    if (chance == 1) {
        document.getElementById("gamehead1").innerHTML = "Story";
        document.getElementById("gamehead2").innerHTML = "Good choice! For that risky descision, you won $250 and 25xp!";
        Delay().then(( ) => {
            adventure_stats[1]+=250;
            adventure_stats[2]+=25;
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
        
    
    } else {
        document.getElementById("gamehead1").innerHTML = "Story";
        document.getElementById("gamehead2").innerHTML = "It backfired and you were lured into a trap! You lost 50hp.";

        Delay().then(( ) => {
            player_stats[1]-=50;
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    }
}
//menu
function no() {
    chance = 0;
    if (chance == 0) {
        document.getElementById("gamehead1").innerHTML = "Story";
        document.getElementById("gamehead2").innerHTML = "Good choice, but you're such a sissy for saying no! You won $50 and 5xp.";
        Delay().then(( ) => {
            adventure_stats[1]+=250;
            adventure_stats[2]+=25;
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    
    }
}


function saveVal() {
    localStorage.setItem("heroes", JSON.stringify(heroesunlocked));
    localStorage.setItem("hero", currenthero);
    localStorage.setItem("stats", JSON.stringify(setstats))
    localStorage.setItem("money", money);
    localStorage.setItem("xp", xp);
    localStorage.setItem("lvl", lvl);
}

function RandInt(i) {
 
    //eg: if i = 1, will return 0 or 1
    rand = Math.floor(Math.random()*i+1);
    return rand;
}


function menu() {
    saveVal();
    document.getElementById("gamehead1").innerHTML = "It's an RPG!";
    document.getElementById("gamehead2").innerHTML = "Made by Imeanbusiness";
    document.getElementById("button1").innerHTML = "Play";
    document.getElementById("button2").innerHTML = "Heroes";
    document.getElementById("button3").innerHTML = "Profile";
    document.getElementById("button1").setAttribute('onclick', "preGame()");
    document.getElementById("button2").setAttribute('onclick', "heroopt()");
    document.getElementById("button3").setAttribute('onclick', "profile()");
}

function profile() {
    document.getElementById("gamehead1").innerHTML = "Your profile:";
    document.getElementById("gamehead2").innerHTML = "Hero: "+currenthero+"&nbsp&nbsp&nbspMoney: $"+money+"&nbsp&nbsp&nbspLvl: "+lvl+"&nbsp"+xp+"XP/"+lvl*lvl*100+"XP";
    document.getElementById("button1").innerHTML = "Music";
    document.getElementById("button2").innerHTML = "Back";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button1").setAttribute('onclick', "music()");
    document.getElementById("button2").setAttribute('onclick', "menu()");
    document.getElementById("button3").setAttribute('onclick', "");
}


function preGame() {
    document.getElementById("button1").innerHTML = "New Game";
    document.getElementById("button2").innerHTML = "Continue";
    document.getElementById("button3").innerHTML = "Back";
    document.getElementById("button1").setAttribute('onclick', "start()");
    document.getElementById("button2").setAttribute('onclick', "continueConfirm()");
    document.getElementById("button3").setAttribute('onclick', "menu()");
}





async function Delay() {
    document.getElementById("button1").innerHTML = "Wait 2 seconds";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button1").setAttribute('onclick', "");
    document.getElementById("button2").setAttribute('onclick', "");
    document.getElementById("button3").setAttribute('onclick', "");
    console.log("0s");
    await sleep(1000);
    document.getElementById("button1").innerHTML = "Wait 1 seconds";
    await sleep(1000);
    console.log("1s");

    
    
    
    return;
}

function start() {
    //list: 0: steps: 1: Score earned, 2: XP earned
    adventure_stats = [0,0,0];
    //player stats. Will be changed later
    player_stats = setstats;
    var dead = 1;
    document.getElementById("gamehead1").innerHTML = "Story";
    document.getElementById("gamehead2").innerHTML = "You leave home!";
    Delay().then(() => {
        console.log("1s");
        document.getElementById("button1").innerHTML = "Continue"
        document.getElementById("button1").setAttribute('onclick', "game()");
    })
    
    
    
}

function yourturn() {
    if (currenthero == "Jakr") {
        document.getElementById("button1").innerHTML = "Power Heal";
    } else if (currenthero == "Lee") {
        document.getElementById("button1").innerHTML = "Heavy Blow";
    } else {
        document.getElementById("button1").innerHTML = "Punch";
    }
    if (currenthero == "Jakr") {
        document.getElementById("button2").innerHTML = "Ultra Blast";
    } else if (currenthero == "Lee") {
        document.getElementById("button2").innerHTML = "Dragon Kick";
    } else if (currenthero == "Tom") {
        document.getElementById("button2").innerHTML = "Run Over";
    } else if (currenthero == "The Captain") {
        document.getElementById("button2").innerHTML = "Bombs Away!";
    } else {
        document.getElementById("button2").innerHTML = "Kick";
    }
    document.getElementById("button3").innerHTML = "Heal";

    if (currenthero == "Jakr") {
        document.getElementById("button1").setAttribute('onclick', "powerheal()");
    } else if (currenthero == "Lee") {
        document.getElementById("button1").setAttribute('onclick', "heavyblow()");
    } else {
        document.getElementById("button1").setAttribute('onclick', "punch()");
    }
    if (currenthero == "Jakr") {
        document.getElementById("button2").setAttribute('onclick', "ultrablast()");
    } else if (currenthero == "Lee") {
        document.getElementById("button2").setAttribute('onclick', "dragonkick()");
    } else if (currenthero == "Tom") {
        document.getElementById("button2").setAttribute('onclick', "runover()");
    } else if (currenthero == "The Captain") {
        document.getElementById("button2").setAttribute('onclick', "bombsaway()");
    } else {
        document.getElementById("button2").setAttribute('onclick', "kick()");
    }
    document.getElementById("button3").setAttribute('onclick', "heal()");
}

function powerheal() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = (RandInt(player_stats[2])+1)/2;
        player_stats[1]+=damage;
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You used power heal and healed "+damage.toString()+" HP! You dealt "+damage.toString()+" damage!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}

function heavyblow() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = (RandInt(player_stats[0])+1)*2;
        player_stats[1]-=5;
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You dealt with a HEAVY BLOW "+damage.toString()+" damage! You lost 5 HP.";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}

function bombsaway() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = (RandInt(player_stats[0])+1)*2;
        player_stats[1]-=10;
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You rained bombs and dealt "+damage.toString()+" damage! You lost 10 HP.";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}



function dragonkick() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = (RandInt(player_stats[0])+1);
        player_stats[1]+=damage/2;
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You used DRAGON KICK and dealt "+damage.toString()+" damage! You gained "+damage/2+"HP!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}


function runover() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = (RandInt(player_stats[1])/5);
        
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You ran the enemy over and dealt "+damage.toString()+" damage!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}





function ultrablast() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = (RandInt(player_stats[2])+1)*6;
        if (damage > 31) {
            damage = 30;
        }
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You used ULTRA BLAST and dealt "+damage.toString()+" HP!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}


function story() {
    
    document.getElementById("gamehead1").innerHTML = "Story";
    rand = RandInt(15);
    document.getElementById("gamehead2").innerHTML = suburbresp[Number(rand)];
    
    Delay().then(() => {
        console.log("1s");
        document.getElementById("button1").innerHTML = "Continue"
        document.getElementById("button1").setAttribute('onclick', "game()");
    })
}
function battle() {
    
    enemyin = RandInt(5);
    enemyint = Number(enemyin);
    enemyname = suburbenemytypes[enemyint];
    enemyatk = suburbatk[enemyint];
    enemyhp = suburbhealth[enemyint];
    enemypng = suburbimages[enemyint];
    enemydef = suburbdef[enemyint];
    document.getElementById("gameimage").src = "images/"+enemypng;
    document.getElementById("gameimage").style.height = "100px";
    document.getElementById("gameimage").style.width = "100px";
    document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
    document.getElementById("gamehead2").innerHTML = "Battle with "+enemyname;

    Delay().then(() => {



   
        yourturn();
    })
}
function enemyturn() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (enemyhp > 0) {
        chance = RandInt(2);
        if (chance == 0) {
            damage = RandInt(enemyatk)+1;
            player_stats[1]-=damage;
            document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
            document.getElementById("gamehead2").innerHTML = enemyname+" punched you and dealt "+damage.toString()+" damage!";

            Delay().then(() => {

                yourturn();
            })
        } else if (chance == 1) {
            chance = RandInt(2);
            if (chance == 0) {
                document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
                document.getElementById("gamehead2").innerHTML = enemyname+" kicked and dealt nothing because they failed!";
                

                Delay().then(() => {

                    yourturn();
                    document.getElementById("button3").setAttribute('onclick', "heal()");
                })
            } else {
                damage = RandInt(enemyatk*1.5)+1;
                player_stats[1]-=damage;
                document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
                document.getElementById("gamehead2").innerHTML = enemyname+" kicked you and dealt "+damage.toString()+" damage!";

                Delay().then(() => {

                    yourturn();
                })
            }
        } else {
                damage = RandInt(enemydef)+1;
                enemyhp+=damage;
                document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
                document.getElementById("gamehead2").innerHTML = enemyname+" healed and gained "+damage.toString()+" HP!";

                Delay().then(() => {

                    yourturn();
                })
        }
    } else {
        document.getElementById("gamehead1").innerHTML = "You won!";
        document.getElementById("gamehead2").innerHTML = "You earned $100 and 10 XP!";

        Delay().then(() => {

            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
            adventure_stats[1] += 100;
            adventure_stats[2] += 10;
        })
        }
    return;
}




function punch() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = RandInt(player_stats[0])+1;
        enemyhp-=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You punched dealt "+damage.toString()+" to the "+enemyname+"!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
        document.getElementById("button1").innerHTML = "Continue";
        document.getElementById("button2").innerHTML = "";
        document.getElementById("button3").innerHTML = "";


        document.getElementById("button1").setAttribute('onclick', "game()");
        document.getElementById("button2").setAttribute('onclick', "");
        document.getElementById("button3").setAttribute('onclick', "");
        })
    }
    return
}






function kick() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        chance = RandInt(2)
        if (chance == 0) {
            document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
            document.getElementById("gamehead2").innerHTML = "You kicked and dealt nothing because you failed!";
            Delay().then(() => {
                document.getElementById("button1").innerHTML = "Continue";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = "";


                document.getElementById("button1").setAttribute('onclick', "enemyturn()");
                document.getElementById("button2").setAttribute('onclick', "");
                document.getElementById("button3").setAttribute('onclick', "");
            })
        } else {
            damage = RandInt(player_stats[0]*1.5)+1;
            enemyhp-=damage;
            document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
            document.getElementById("gamehead2").innerHTML = "You kicked and dealt "+damage.toString()+" to the "+enemyname+"!";
            Delay().then(() => {
                document.getElementById("button1").innerHTML = "Continue";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = "";
        
        
                document.getElementById("button1").setAttribute('onclick', "enemyturn()");
                document.getElementById("button2").setAttribute('onclick', "");
                document.getElementById("button3").setAttribute('onclick', "");
            })
        }
        if (enemyhp <= 0) {
            adventure_stats[1] += 100;
            adventure_stats[2] += 10;
            return;
        }
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    }
   return
}


function heal() {
    audiop = new Audio("sounds/punch.mp3");
    audiop.play();
    if (player_stats[1] > 0){
        damage = RandInt(player_stats[2])+1;
        player_stats[1]+=damage;
        document.getElementById("gamehead1").innerHTML = "Enemy HP: "+enemyhp.toString()+" Your HP: "+player_stats[1].toString();
        document.getElementById("gamehead2").innerHTML = "You healed up "+damage.toString()+" HP!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "enemyturn()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })
    } else {
        document.getElementById("gamehead1").innerHTML = "You lost!";
        document.getElementById("gamehead2").innerHTML = "Game over :( Thanks for trying the test!";
        Delay().then(() => {
            document.getElementById("button1").innerHTML = "Continue";
            document.getElementById("button2").innerHTML = "";
            document.getElementById("button3").innerHTML = "";


            document.getElementById("button1").setAttribute('onclick', "game()");
            document.getElementById("button2").setAttribute('onclick', "");
            document.getElementById("button3").setAttribute('onclick', "");
        })

    }
    return;
}


function saveState() {
        
        localStorage.setItem("dead",dead)
        localStorage.setItem("atk",player_stats[0]);
        localStorage.setItem("hp",player_stats[1]);
        localStorage.setItem("def",player_stats[2]);
        localStorage.setItem("steps",adventure_stats[0]);
        localStorage.setItem("score",adventure_stats[1]);
        localStorage.setItem("xp",adventure_stats[2]);
}


function continueConfirm() {
    try {
        dead = localStorage.getItem("dead");
    } catch {
        
    }
    
    if (dead == 1) {
        player_stats[0] =localStorage.getItem("atk");
        player_stats[1] = localStorage.getItem("hp");
        player_stats[2] = localStorage.getItem("def");
        adventure_stats[0] = localStorage.getItem("steps");
        adventure_stats[1] = localStorage.getItem("score");
        adventure_stats[2] = localStorage.getItem("xp");

        document.getElementById('gamehead1').innerHTML = "Load this game?";
        document.getElementById('gamehead2').innerHTML = "Stats: Health: "+player_stats[1]+" Steps: "+adventure_stats[0]+" Money Earned: "+adventure_stats[1]+" XP gained: "+adventure_stats[2];
    } else {
        document.getElementById('gamehead1').innerHTML = "No game saved. Start new?";
        document.getElementById('gamehead2').innerHTML = ":)";
    }
    document.getElementById("button1").innerHTML = "Yes";
    document.getElementById("button2").innerHTML = "No";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button1").setAttribute('onclick', "continueGame()");
    document.getElementById("button2").setAttribute('onclick', "menu()");
    document.getElementById("button3").setAttribute('onclick', "");
}

function continueGame() {

    dead = localStorage.getItem("dead");
    if (dead==1) {
        player_stats[0] = Number(localStorage.getItem("atk"));
        player_stats[1] = Number(localStorage.getItem("hp"));
        player_stats[2] = Number(localStorage.getItem("def"));
        adventure_stats[0] = Number(localStorage.getItem("steps"));
        adventure_stats[1] = Number(localStorage.getItem("score"));
        adventure_stats[2] = Number(localStorage.getItem("xp"));
        game();
    } else {
        start()
    }
}

function game() {
    dead = 1
    chance = RandInt(15);
    document.getElementById('gameimage').src = "images/title.png";
    
    if (player_stats[1] <= 0) {
        money += adventure_stats[1];
        xp += adventure_stats[2];
        if (xp >= lvl*lvl*50) {
            lvl+=1;
        }
        saveState();
        document.getElementById("gamehead1").innerHTML = "Game Over!";
        document.getElementById("gamehead2").innerHTML = "You earned $"+adventure_stats[1]+" and earned "+adventure_stats[2]+"XP! You stepped "+adventure_stats[0]+" steps.";
        Delay().then(() => {
            menu();
            return;
        })
        
    }
    console.log(chance)
    if (chance >= 12) {
        adventure_stats[0]+=1;
        died = (dead);
        document.getElementById("gamehead1").innerHTML = died;
        
        battle();


        saveState();
        
        
    } else if (chance >= 5) {
        adventure_stats[0]+=1;
        story();
        saveState();

    } else {
        adventure_stats[0]+=1;
        choice();
        saveState();
    }
    
}
herof = 0
heropick = 0
function pickHero() {
    HeroLen = heroesunlocked.length-1;
    HeroLength = (HeroLen+1);
    herop = (heropick+1)
    herof = herolist.indexOf(heroesunlocked[heropick]);
    if (heroesunlocked[heropick] == "Joe") {
        herof = 0
    }
    document.getElementById('gamehead1').innerHTML = "Pick Your Hero. Heroes: "+HeroLength+"/8";
    document.getElementById('gamehead2').innerHTML = "Current Hero: "+heroesunlocked[heropick]+"  &nbsp&nbsp&nbspClass: "+heroclasses[herof]+"&nbsp&nbsp&nbsp    Rarity: "+herorar[herof]+"&nbsp&nbsp&nbsp  Description: "+herospec[herof];
    document.getElementById("button1").innerHTML = "Select";
    document.getElementById("button2").innerHTML = "Next "+herop+"/8";
    document.getElementById("button3").innerHTML = "Back";
    document.getElementById("button1").setAttribute('onclick', "selhero()");
    document.getElementById("button2").setAttribute('onclick', "nexthero()");
    document.getElementById("button3").setAttribute('onclick', "menu()");
}

var price = 0;
var heropick = 0;
function HeroShop() {
    HeroLen = herolist.length-1;
    HeroLength = (HeroLen+1);
    herop = heropick+1
    
    if (herorar[heropick] == "Rare") {
        price = 1000;
    } else if (herorar[heropick] == "Epic") {
        price = 5000;
    } else if (herorar[heropick] == "Legendary") {
        price = 10000;
    } else {
        price = 0
    }
    
    document.getElementById('gamehead1').innerHTML = "Pick Your Hero. Heroes: "+herop+"/8&nbsp&nbspPrice:"+price+"&nbsp&nbsp&nbspMoney: $"+money+"hi:"+heropick;
    document.getElementById('gamehead2').innerHTML = "Current Hero: "+herolist[heropick]+"  &nbsp&nbsp&nbspClass: "+heroclasses[heropick]+"&nbsp&nbsp&nbsp    Rarity: "+herorar[heropick]+"&nbsp&nbsp&nbsp  Description: "+herospec[heropick];
    document.getElementById("button1").innerHTML = "Buy";
    document.getElementById("button2").innerHTML = "Next "+herop+"/8";
    document.getElementById("button3").innerHTML = "Back";
    document.getElementById("button1").setAttribute('onclick', "buyhero()");
    document.getElementById("button2").setAttribute('onclick', "nextshophero()");
    document.getElementById("button3").setAttribute('onclick', "menu()");
}

function buyhero() {
    if (money >= price && heroesunlocked.includes(herolist[heropick]) == false) {
        money-=price;
        document.getElementById('gamehead1').innerHTML = heropick;
        heroesunlocked.push(herolist[heropick]);
        document.getElementById('gamehead1').innerHTML = "Success!";
        document.getElementById('gamehead2').innerHTML = "Money left: $"+money;
        Delay().then(() => {
            HeroShop();
        })

    } else {
        document.getElementById('gamehead1').innerHTML = "Invalid!";
        Delay().then(() => {
            HeroShop();
        })
    }
}


function nextshophero() {
    heropick += 1;
    if (heropick > herolist.length-1) {
        heropick = 0;
    } 
    HeroShop();
    
}
 
function nexthero() {
    heropick += 1;
    if (heropick > heroesunlocked.length-1) {
        heropick = 0;
    } 
    pickHero();
    
}


//preGame
function heroopt() {
    document.getElementById("button1").innerHTML = "Hero Shop";
    document.getElementById("button2").innerHTML = "Select Hero";
    document.getElementById("button3").innerHTML = "Back";
    document.getElementById("button1").setAttribute('onclick', "HeroShop()");
    document.getElementById("button2").setAttribute('onclick', "pickHero()");
    document.getElementById("button3").setAttribute('onclick', "menu()");
}

function selhero() {
    currenthero = herolist[herof];
    setstats = [heroatk[herof], herohp[herof], herodef[herof]]
    document.getElementById('gamehead1').innerHTML = "Success!";
    Delay().then(() => {
        pickHero();
    })
}
//setAttribute('setAttribute('onclick',"