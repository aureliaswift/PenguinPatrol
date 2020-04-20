class Play extends Phaser.Scene {
    constructor() { 
        super("playScene");
    }

    //load the graphics before we create them
    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/Fish1.png');
        this.load.image('spaceship', './assets/Penguin1.png');
        this.load.image('starfield', './assets/white.png');
        this.load.image('seaweed', './assets/Seaweed.png');
        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.spritesheet('hearts', './assets/hearts.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 8});
        this.load.spritesheet('penguin', './assets/PenguinPurple.png',{frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 2});
        this.load.spritesheet('penguin2', './assets/PenguinBlack.png',{frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 2});
        this.load.spritesheet('penguin3', './assets/PenguinRed.png',{frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 2});
        
    }


    //adds objects to the scene
    create() {
        //add sound and shit
        this.bgm = this.sound.add('sfx_music');
        this.bgm.setLoop(true);
        this.bgm.play();
        //place tile sprite
        //this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        this.add.image(0,-30,'ocean').setOrigin(0, 0);
        this.seaweed = this.add.tileSprite(0,30, 640,480, 'seaweed').setOrigin(0, 0);
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        //this is my failure at making the border UI look good
        /*
        
        // white rectangle borders
        //going to try and make it look like a candy cane
        //(x-coordinate, y-coordinate, width, height, color )

        //down left border
        //this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(5, 5, 8, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(10, 5, 8, 455, 0xff0000).setOrigin(0, 0);
        this.add.rectangle(15, 5, 8, 455,0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(20, 5, 8, 455, 0xff0000).setOrigin(0, 0);

        //down right border 
       // this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
       this.add.rectangle(612, 5, 8, 455, 0xff0000).setOrigin(0, 0);
       this.add.rectangle(617, 5, 8, 455, 0xFFFFFF).setOrigin(0, 0);
       this.add.rectangle(622, 5, 8, 455,0xff0000).setOrigin(0, 0);
       this.add.rectangle(627, 5, 8, 455,0xFFFFFF ).setOrigin(0, 0);

       //TOP across border
        //this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0); <-- original
        this.add.rectangle(5, 5, 630, 8, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 10, 630, 8, 0xff0000).setOrigin(0, 0);
        this.add.rectangle(5, 15, 630, 8, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 20, 630, 8, 0xff0000).setOrigin(0, 0);

        //BOTTOM across border
        //this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 8, 0xff0000).setOrigin(0, 0);
        this.add.rectangle(5, 448, 630, 8, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 453, 630, 8, 0xff0000).setOrigin(0, 0);
        this.add.rectangle(5, 458, 630, 8, 0xFFFFFF).setOrigin(0, 0);

        //fix the trouble areas
        //i know this is probably horribly innefficient im sorry 

        this.add.rectangle(15, 15, 5, 438, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(10, 10, 5, 448, 0xff0000).setOrigin(0, 0);
        this.add.rectangle(5, 5, 5, 455, 0xFFFFFF).setOrigin(0, 0);

        this.add.rectangle(617, 15, 8, 438, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(622, 10, 8, 448, 0xff0000).setOrigin(0, 0);
        this.add.rectangle(627, 5, 8, 455,0xFFFFFF).setOrigin(0, 0);

        
        //this.add.rectangle(630, 5, 5, 455, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(5, 8, 8, 8, 0xFFFFFF).setOrigin(0, 0);

        //green UI background
        //this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);
        */

        // add rocket (p1)
        //this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket');

        //add rocket
        this.p1Rocket = new Rocket(this, game.config.width/2 - 8, 431, 'rocket').setScale(0.5, 0.5).setOrigin(0, 0);
    

        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 196, 'penguin2', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, 260, 'spaceship', 0, 10).setOrigin(0,0);


        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // animation config
        this.anims.create({
        key: 'explode',
        frames: this.anims.generateFrameNumbers('hearts', { start: 0, end: 8, first: 0}),
        frameRate: 30
        });

        //animation for penguins
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('penguin', { start: 0, end:1, first: 0}),
            frameRate: 5,
            repeat: -1
            });
        
        //do the same for the other penguin variations, I am sure there is a better way to do this
        //but for now it will do!

        this.anims.create({
            key: 'fly2',
            frames: this.anims.generateFrameNumbers('penguin2', { start: 0, end:1, first: 0}),
            frameRate: 5,
            repeat: -1
             });

        this.anims.create({
            key: 'fly3',
            frames: this.anims.generateFrameNumbers('penguin3', { start: 0, end:1, first: 0}),
            frameRate: 5,
            repeat: -1
            });
    
        
        //play animation
        this.ship01.anims.play('fly');
        this.ship02.anims.play('fly2');
        this.ship03.anims.play('fly3');


        //variable to store the score 
        this.p1Score = 0;
        //create score display
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#5fcde4',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        //create high score display
        let hiScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#5fcde4',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        //attempt to display the high score
        //I have it always be 0 until an actual score is obtained at the end of a game
        this.hiScore = this.add.text(470, 54, game.settings.highScore, hiScoreConfig);
        //add the score text to the score display
        this.scoreLeft = this.add.text(70, 54, this.p1Score, scoreConfig);
        //same for high score
        // add text above displays soplayer knows what tf they are
        this.add.text(69, 34, 'score:');
        this.add.text(470, 34, "high score:");

        // game over flag
        this.gameOver = false;
        scoreConfig.fixedWidth = 0; //wtf is this
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, '(F)eed to Restart or ← for Menu ', scoreConfig).setOrigin(0.5);
        this.gameOver = true;
        }, null, this);
    }

    update() {
        //only update high score if it is higher then the old one
        if(this.p1Score > game.settings.highScore){
            game.settings.highScore = this.p1Score;
            }

        // check key input for restart/menu
        //restart game
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            //for the love of god please stop the music
            this.bgm.stop();
            //if the new game score is higher then the old high score, update
            this.scene.restart();
        }
        //go back to menu
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.bgm.stop();
            this.scene.start("menuScene");
        }

        //scroll sprites
        this.starfield.tilePositionX -= 4;
        //parralax pls
        this.seaweed.tilePositionX -=2;

        //if the timer is still running, update the positions 
        if (!this.gameOver) {               
            this.p1Rocket.update();         // update rocket sprite
            this.ship01.update();           // update spaceships (x3)
            this.ship02.update();
            this.ship03.update();
        } 


        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            //console.log('kaboom ship 03');
            this.p1Rocket.reset();
            this.shipExplode(this.ship03); 
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            //console.log('kaboom ship 02');
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            //console.log('kaboom ship 01');
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }   

    }  

    checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }

    }

    shipExplode(ship) {
        ship.alpha = 0;                         // temporarily hide ship
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after animation completes
            ship.reset();                       // reset ship position
            ship.alpha = 1;                     // make ship visible again
            boom.destroy();                     // remove explosion sprite
        });
        
        //score increment and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        this.sound.play('sfx_quack');

       
    }

}

