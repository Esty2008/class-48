class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }
  getLevel() {
    var levelRef = database.ref('Level');
    levelRef.on("value", function (data) {
      levelno = data.val();
    })

  }
  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }
  updateLevel(level) {
    database.ref('/').update({
      Level: level
    });
  }
  async start() {
    if (gameState === 0) {
      alien1 = createSprite(50, 50, 50, 50);

      alien2 = createSprite(600, 250, 50, 50);

      alien3 = createSprite(1000, 350, 50, 50);

      alien4 = createSprite(300, 50, 50, 50);

      alien5 = createSprite(900, 250, 50, 50);

      alien6 = createSprite(1000, 350, 50, 50);
      alien1lasergroup = createGroup();
      alien2lasergroup = createGroup();
      alien3lasergroup = createGroup();

      tank = createSprite(850, 800, 100, 100);
      tanklasergroup = createGroup();
      //tanklaser=createSprite(850,650,100,100);
      form = new Form()
      form.display();
    }

  }

  play() {
    // form.hide();
    background(bgImg2);
    game.getLevel();
    if (levelno === 1) {
      edges = createEdgeSprites();

      alien1.addImage(alienImg);
      alien1.scale = 0.3;
      alien1.velocityX = 4;

      alien2.addImage(alienImg);
      alien2.scale = 0.3;
      alien2.velocityX = -4;


      alien3.addImage(alienImg);
      alien3.scale = 0.3;
      alien3.velocityX = 4;
      if (alien1.x > displayWidth) {
        alien1.x = 50
      }
      if (alien2.x < 0) {
        alien2.x = 600
      }
      if (alien3.x > displayWidth) {
        alien3.x = 1000
      }


      var brick1 = createSprite(400, 450, 250, 20);
      brick1.shapeColor = '#8B0000'

      var brick2 = createSprite(850, 450, 250, 20);
      brick2.shapeColor = '#8B0000'

      var brick3 = createSprite(1350, 450, 250, 20);
      brick3.shapeColor = '#8B0000'


      tank.addImage(tankImg);
      tank.scale = 0.3;
      //tanklaser.x=tank.x;


      if (keyIsDown(LEFT_ARROW)) {
        tank.x = tank.x - 10;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        tank.x = tank.x + 10;
      }
      if (keyIsDown(UP_ARROW)) {
        tanklaser = createSprite(tank.x - 10, 600, 10, 50);
        tanklasergroup.add(tanklaser);
        tanklaser.velocityY = -5;
        tanklaser.addImage(tanklaserImg);
        tanklaser.scale = 0.15

      }
      if (tanklasergroup.isTouching(alien1)) {
        alien1.visible = false;
        count = count + 1;
      }
      if (tanklasergroup.isTouching(alien2)) {
        alien2.visible = false;
        count = count + 1;
      }
      if (tanklasergroup.isTouching(alien3)) {
        alien3.visible = false;
        count = count + 1;
      }
      if (alien1.visible === false && alien2.visible === false && alien3.visible === false) {
        game.update(2);
        game.getState();
        console.log(gameState);
        levelno = 2;
      }
      if (frameCount % 40 == 0) {
        console.log("U")
        if (alien1.visible === true) {
          alien1laser = createSprite(alien1.x, 100, 10, 10);
          alien1laser.velocityY = 5;
          alien1lasergroup.add(alien1laser);
          alien1laser.addImage(alienLaserImg)
          alien1laser.scale = 0.1
        }

        if (alien2.visible === true) {
          alien2laser = createSprite(alien2.x, 300, 10, 10);
          alien2laser.velocityY = 5;
          alien2lasergroup.add(alien2laser);
          alien2laser.addImage(alienLaserImg)
          alien2laser.scale = 0.1
        }

        if (alien3.visible === true) {
          alien3laser = createSprite(alien3.x, 400, 10, 10);
          alien3laser.velocityY = 5;
          alien3lasergroup.add(alien3laser);
          alien3laser.addImage(alienLaserImg)
          alien3laser.scale = 0.1
        }
      }
      if (alien1lasergroup.isTouching(tank) || alien2lasergroup.isTouching(tank) || alien3lasergroup.isTouching(tank)) {
        console.log("You died");
      }

      if (alien1lasergroup.isTouching(brick1) || alien1lasergroup.isTouching(brick2) || alien1lasergroup.isTouching(brick3)) {

        alien1lasergroup.destroyEach();
      }

      if (alien2lasergroup.isTouching(brick1) || alien2lasergroup.isTouching(brick2) || alien2lasergroup.isTouching(brick3)) {

        alien2lasergroup.destroyEach();
      }

      if (alien3lasergroup.isTouching(brick1) || alien3lasergroup.isTouching(brick2) || alien3lasergroup.isTouching(brick3)) {

        alien3lasergroup.destroyEach();
      }

      if (tanklasergroup.isTouching(brick1) || tanklasergroup.isTouching(brick2) || tanklasergroup.isTouching(brick3)) {

        tanklasergroup.destroyEach();
      }



    }

    if (levelno === 2) {
      edges = createEdgeSprites();

      alien1.addImage(alienImg);
      alien1.scale = 0.3;
      alien1.velocityX = 4;

      alien2.addImage(alienImg);
      alien2.scale = 0.3;
      alien2.velocityX = -4;


      alien3.addImage(alienImg);
      alien3.scale = 0.3;
      alien3.velocityX = 4;

      alien4.addImage(alienImg);
      alien4.scale = 0.3;
      alien4.velocityX = -4;

      alien5.addImage(alienImg);
      alien5.scale = 0.3;
      alien5.velocityX = 4;

      if (alien1.x > displayWidth) {
        alien1.x = 50
      }
      if (alien2.x < 0) {
        alien2.x = 600
      }
      if (alien3.x > displayWidth) {
        alien3.x = 1000
      }
      if (alien4.x < 0) {
        alien4.x = 300
      }
      if (alien5.x > displayWidth) {
        alien5.x = 900
      }


      var brick1 = createSprite(400, 450, 250, 20);
      brick1.shapeColor = '#8B0000'

      var brick2 = createSprite(850, 450, 250, 20);
      brick2.shapeColor = '#8B0000'




      tank.addImage(tankImg);
      tank.scale = 0.3;
      //tanklaser.x=tank.x;


      if (keyIsDown(LEFT_ARROW)) {
        tank.x = tank.x - 10;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        tank.x = tank.x + 10;
      }
      if (keyIsDown(UP_ARROW)) {
        tanklaser = createSprite(tank.x - 10, 600, 10, 50);
        tanklasergroup.add(tanklaser);
        tanklaser.velocityY = -5;
        tanklaser.addImage(tanklaserImg);
        tanklaser.scale = 0.15

      }
      if (tanklasergroup.isTouching(alien1)) {
        alien1.visible = false;
        count = count + 1;
      }
      if (tanklasergroup.isTouching(alien2)) {
        alien2.visible = false;
        count = count + 1;
      }
      if (tanklasergroup.isTouching(alien3)) {
        alien3.visible = false;
        count = count + 1;
      }

      if (tanklasergroup.isTouching(alien4)) {
        alien4.visible = false;
        count = count + 1;
      }

      if (tanklasergroup.isTouching(alien5)) {
        alien5.visible = false;
        count = count + 1;
      }
      if (alien1.visible === false && alien2.visible === false && alien3.visible === false && alien4.visible === false && alien5.visible === false) {
        game.update(3);
        game.getState();
        console.log(gameState);
        levelno = 3;
      }
      if (frameCount % 40 == 0) {
        console.log("U")
        if (alien1.visible === true) {
          alien1laser = createSprite(alien1.x, 100, 10, 10);
          alien1laser.velocityY = 5;
          alien1lasergroup.add(alien1laser);
          alien1laser.addImage(alienLaserImg)
          alien1laser.scale = 0.1
        }

        if (alien2.visible === true) {
          alien2laser = createSprite(alien2.x, 300, 10, 10);
          alien2laser.velocityY = 5;
          alien2lasergroup.add(alien2laser);
          alien2laser.addImage(alienLaserImg)
          alien2laser.scale = 0.1
        }

        if (alien3.visible === true) {
          alien3laser = createSprite(alien3.x, 400, 10, 10);
          alien3laser.velocityY = 5;
          alien3lasergroup.add(alien3laser);
          alien3laser.addImage(alienLaserImg)
          alien3laser.scale = 0.1
        }
        if (alien4.visible === true) {
          alien4laser = createSprite(alien4.x, 100, 10, 10);
          alien4laser.velocityY = 5;
          alien4lasergroup.add(alien4laser);
          alien4laser.addImage(alienLaserImg)
          alien4laser.scale = 0.1
        }
        if (alien5.visible === true) {
          alien5laser = createSprite(alien5.x, 400, 10, 10);
          alien5laser.velocityY = 5;
          alien5lasergroup.add(alien5laser);
          alien5laser.addImage(alienLaserImg)
          alien5laser.scale = 0.1
        }
      }
      if (alien1lasergroup.isTouching(tank) || alien2lasergroup.isTouching(tank) || alien3lasergroup.isTouching(tank)) {
        console.log("You died");
      }

      if (alien1lasergroup.isTouching(brick1) || alien1lasergroup.isTouching(brick2) || alien1lasergroup.isTouching(brick3)) {

        alien1lasergroup.destroyEach();
      }

      if (alien2lasergroup.isTouching(brick1) || alien2lasergroup.isTouching(brick2) || alien2lasergroup.isTouching(brick3)) {

        alien2lasergroup.destroyEach();
      }

      if (alien3lasergroup.isTouching(brick1) || alien3lasergroup.isTouching(brick2) || alien3lasergroup.isTouching(brick3)) {

        alien3lasergroup.destroyEach();
      }

      if (alien4lasergroup.isTouching(brick1) || alien4lasergroup.isTouching(brick2) || alien4lasergroup.isTouching(brick3)) {

        alien4lasergroup.destroyEach();
      }

      if (alien5lasergroup.isTouching(brick1) || alien5lasergroup.isTouching(brick2) || alien5lasergroup.isTouching(brick3)) {

        alien5lasergroup.destroyEach();
      }

      if (tanklasergroup.isTouching(brick1) || tanklasergroup.isTouching(brick2) || tanklasergroup.isTouching(brick3)) {

        tanklasergroup.destroyEach();
      }



    }

    if (levelno === 3) {
      edges = createEdgeSprites();

      alien1.addImage(alienImg);
      alien1.scale = 0.3;
      alien1.velocityX = 4;

      alien2.addImage(alienImg);
      alien2.scale = 0.3;
      alien2.velocityX = -4;


      alien3.addImage(alienImg);
      alien3.scale = 0.3;
      alien3.velocityX = 4;

      alien4.addImage(alienImg);
      alien4.scale = 0.3;
      alien4.velocityX = -4;

      alien5.addImage(alienImg);
      alien5.scale = 0.3;
      alien5.velocityX = 4;

      alien6.addImage(alienImg);
      alien6.scale = 0.3;
      alien6.velocityX = -4;

      if (alien1.x > displayWidth) {
        alien1.x = 50
      }
      if (alien2.x < 0) {
        alien2.x = 600
      }
      if (alien3.x > displayWidth) {
        alien3.x = 1000
      }
      if (alien4.x < 0) {
        alien4.x = 300
      }
      if (alien5.x > displayWidth) {
        alien5.x = 900
      }

      if (alien6.x > 0) {
        alien6.x = 900
      }


      
      var brick2 = createSprite(850, 450, 250, 20);
      brick2.shapeColor = '#8B0000'




      tank.addImage(tankImg);
      tank.scale = 0.3;
      //tanklaser.x=tank.x;


      if (keyIsDown(LEFT_ARROW)) {
        tank.x = tank.x - 10;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        tank.x = tank.x + 10;
      }
      if (keyIsDown(UP_ARROW)) {
        tanklaser = createSprite(tank.x - 10, 600, 10, 50);
        tanklasergroup.add(tanklaser);
        tanklaser.velocityY = -5;
        tanklaser.addImage(tanklaserImg);
        tanklaser.scale = 0.15

      }
      if (tanklasergroup.isTouching(alien1)) {
        alien1.visible = false;
        count = count + 1;
      }
      if (tanklasergroup.isTouching(alien2)) {
        alien2.visible = false;
        count = count + 1;
      }
      if (tanklasergroup.isTouching(alien3)) {
        alien3.visible = false;
        count = count + 1;
      }

      if (tanklasergroup.isTouching(alien4)) {
        alien4.visible = false;
        count = count + 1;
      }

      if (tanklasergroup.isTouching(alien5)) {
        alien5.visible = false;
        count = count + 1;
      }

      if (tanklasergroup.isTouching(alien6)) {
        alien6.visible = false;
        count = count + 1;
      }
      if (alien1.visible === false && alien2.visible === false && alien3.visible === false && alien4.visible === false && alien5.visible === false&& alien6.visible === false) {
        game.update(0);
        game.getState();
        console.log(gameState);
        Text('You won WW3!!',displayWidth/2,displayheight/2)
      }
      if (frameCount % 40 == 0) {
        console.log("U")
        if (alien1.visible === true) {
          alien1laser = createSprite(alien1.x, 100, 10, 10);
          alien1laser.velocityY = 5;
          alien1lasergroup.add(alien1laser);
          alien1laser.addImage(alienLaserImg)
          alien1laser.scale = 0.1
        }

        if (alien2.visible === true) {
          alien2laser = createSprite(alien2.x, 300, 10, 10);
          alien2laser.velocityY = 5;
          alien2lasergroup.add(alien2laser);
          alien2laser.addImage(alienLaserImg)
          alien2laser.scale = 0.1
        }

        if (alien3.visible === true) {
          alien3laser = createSprite(alien3.x, 400, 10, 10);
          alien3laser.velocityY = 5;
          alien3lasergroup.add(alien3laser);
          alien3laser.addImage(alienLaserImg)
          alien3laser.scale = 0.1
        }
        if (alien4.visible === true) {
          alien4laser = createSprite(alien4.x, 100, 10, 10);
          alien4laser.velocityY = 5;
          alien4lasergroup.add(alien4laser);
          alien4laser.addImage(alienLaserImg)
          alien4laser.scale = 0.1
        }
        if (alien5.visible === true) {
          alien5laser = createSprite(alien5.x, 400, 10, 10);
          alien5laser.velocityY = 5;
          alien5lasergroup.add(alien5laser);
          alien5laser.addImage(alienLaserImg)
          alien5laser.scale = 0.1
        }

        if (alien64.visible === true) {
          alien6laser = createSprite(alien6.x, 300, 10, 10);
          alien6laser.velocityY = 5;
          alien6lasergroup.add(alien5laser);
          alien6laser.addImage(alienLaserImg)
          alien6laser.scale = 0.1
        }
      }
      if (alien1lasergroup.isTouching(tank) || alien2lasergroup.isTouching(tank) || alien3lasergroup.isTouching(tank)) {
        console.log("You died");
      }

      if (alien1lasergroup.isTouching(brick1) || alien1lasergroup.isTouching(brick2) || alien1lasergroup.isTouching(brick3)) {

        alien1lasergroup.destroyEach();
      }

      if (alien2lasergroup.isTouching(brick1) || alien2lasergroup.isTouching(brick2) || alien2lasergroup.isTouching(brick3)) {

        alien2lasergroup.destroyEach();
      }

      if (alien3lasergroup.isTouching(brick1) || alien3lasergroup.isTouching(brick2) || alien3lasergroup.isTouching(brick3)) {

        alien3lasergroup.destroyEach();
      }

      if (alien4lasergroup.isTouching(brick1) || alien4lasergroup.isTouching(brick2) || alien4lasergroup.isTouching(brick3)) {

        alien4lasergroup.destroyEach();
      }

      if (alien5lasergroup.isTouching(brick1) || alien5lasergroup.isTouching(brick2) || alien5lasergroup.isTouching(brick3)) {

        alien5lasergroup.destroyEach();
      }

      if (alien6lasergroup.isTouching(brick1) || alien6lasergroup.isTouching(brick2) || alien6lasergroup.isTouching(brick3)) {

        alien6lasergroup.destroyEach();
      }

      if (tanklasergroup.isTouching(brick1) || tanklasergroup.isTouching(brick2) || tanklasergroup.isTouching(brick3)) {

        tanklasergroup.destroyEach();
      }



    }


    drawSprites()


  }
  end() {
    backgroundImage()
  }
}
