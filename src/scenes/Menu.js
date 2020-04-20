class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    // load audio
    preload() {
   //this.load.audio('sfx_select', './assets/blip_select12.wav');
    //this.load.audio('sfx_explosion', './assets/explosion38.wav');
    //this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

    //mod audio
    this.load.audio('sfx_ice_menu', './assets/ice_menu.wav');
    this.load.audio('sfx_quack', './assets/quack.wav');
    this.load.audio('sfx_toss', './assets/toss.ogg');
    this.load.audio('sfx_music', './assets/bg_music.mp3');

    //add menu images
    this.load.image('menuPenguin', './assets/menu.png');
    this.load.image('menuPenguin2', './assets/menu2.png');
   
    this.load.image('white', './assets/white.png');
    this.load.image('ocean','./assets/ocean.png');
    this.load.image('icicles', './assets/icicles.png');
    

    }
    
    create() {
      //this.add.text(20, 20, "Rocket Patrol Menu");
      //this.scene.start("playScene");
      //initialize high score to 0

      //this.add.text(69, 34, 'high score:', {color: '#FACADE'});
      //this.add.text(180, 34, game.settings.highScore, {color: '#FACADE'});
      //this.hiScore = this.add.text(180,34, game.settings.highScore, {color: '#FACADE'});
     
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

      let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        //this is for the first two boxes bg color
        backgroundColor: '#5fcde4',
        color: '#FFFFFF', //the text inside
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
      
      // show menu text
      let centerX = game.config.width/2;
      let centerY = game.config.height/2;

     // this.add.image(centerX, centerY, 'white');
     this.add.image(centerX,centerY,'ocean');
      this.white = this.add.tileSprite(0, 0, 640, 480, 'white').setOrigin(0, 0);
      this.add.image(centerX,100,'menuPenguin');
      //this.add.image(centerX-200,centerY-100,'menuPenguin2');
      

      let textSpacer = 64;
      this.add.text(centerX, centerY- textSpacer, 'PENGUIN PATROL', menuConfig).setOrigin(0.5);
      this.add.text(centerX, centerY, 'Use ←→ arrows to move & (F) to Feed', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#5fcde4';
      menuConfig.color = '#FFFFFF';
      this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);  
      this.icicles = this.add.tileSprite(0, -10, 640, 64, 'icicles').setOrigin(0, 0);

    this.hiScore = this.add.text(270,380, game.settings.highScore, hiScoreConfig);
    this.add.text(270, 360, "high score:");

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      
    }
    

    update() {

      //this.icicles.tilePositionX -=2;
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3, 
          highScore: game.settings.highScore, //dont reset the old high score pls <3
          gameTimer: 60000    
        }
        //this.sound.play('sfx_select');
        this.sound.play('sfx_ice_menu');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          highScore: game.settings.highScore,
          gameTimer: 45000    
        }
        //replace with ice sound effect

  
        //at some point make this into a different ice sound
        this.sound.play('sfx_ice_menu');
        this.scene.start("playScene");    
      }
    }
    
  }