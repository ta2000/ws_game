var Game = {
    canvas : document.createElement("canvas"),
    start : function() {
          // Run keyDown function when a key is pressed
          window.onkeydown = Game.keyDown;
          // Run keyUp function when a key is released
          window.onkeyup = Game.keyUp;

          // Create canvas and size to window dimensions
          Game.canvas.width = window.innerWidth;
          Game.canvas.height = window.innerHeight;
          Game.ctx = Game.canvas.getContext("2d");
          document.body.insertBefore(Game.canvas, document.body.childNodes[0]);

          // Player object
          Game.player = new Sprite("player.png", 10, 10);
          Game.player.speed = 5;
          Game.player.keys = {};

          // Start game loop
          Game.draw();
    },
    // Move the player based on which key is pressed
    keyDown : function(e) {
        Game.player.keys[e.keyCode] = true;
    },
    // Stop the player based on which key is released
    keyUp : function(e) {
        delete Game.player.keys[e.keyCode];
    },
    // Game loop
    draw : function() {
      Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

      if (65 in Game.player.keys) {
          Game.player.x-=Game.player.speed;
      }
      if (68 in Game.player.keys) {
          Game.player.x+=Game.player.speed;
      }
      if (87 in Game.player.keys) {
          Game.player.y-=Game.player.speed;
      }
      if (83 in Game.player.keys) {
          Game.player.y+=Game.player.speed;
      }

      Game.player.draw(Game.ctx);

      window.requestAnimationFrame(Game.draw);
    }
}
