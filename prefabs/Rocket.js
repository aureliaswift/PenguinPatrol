// Rocket prefab
//rocket = fish
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      //old sfx
      //this.sfxRocket = scene.sound.add('sfx_rocket');
      //new sfx
      this.sfxToss = scene.sound.add('sfx_toss');
    
      this.isFiring = false;      // track firing status
    }
    update() {
        // left/right movement
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 598) {
                this.x += 2;
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxToss.play();  // play sfx
        }
        // if fired, move up
        if (this.isFiring && this.y >= 108) {
            //this.add.text(game.config.width/2, game.config.width/2, 'fire!');
            this.y -= 2;
        }

        //allow player to control the rocket after it has launched
        if(keyLEFT.isDown && this.x >=47) {
            this.x -=2;
            }else if(keyRIGHT.isDown && this. x <= 598){
                this.x+= 2;
            
        }
        // reset on miss
        if (this.y <= 108) {
            this.reset();
            //this.isFiring = false; 
           // this.y = 431;
        }
    }
    reset() {
        this.isFiring = false;
        this.y = 431;
    }

  }