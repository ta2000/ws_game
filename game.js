var Game = {
    entities : {},
    canvas : document.createElement("canvas"),
    start : function() {
          // Run keyDown function when a key is pressed
          window.onkeydown = Game.keyDown;
          // Run keyUp function when a key is released
          window.onkeyup = Game.keyUp;

          // Shoot when mouse is clicked
          window.onmouseup = Game.mouseClick;

          // Create canvas and size to window dimensions
          Game.canvas.width = window.innerWidth;
          Game.canvas.height = window.innerHeight;
          Game.ctx = Game.canvas.getContext("2d");
          document.body.insertBefore(Game.canvas, document.body.childNodes[0]);

          // Player object
          Game.entities.player = new Player("player.png", 10, 10);
          Game.entities.enemy = new Enemy("enemy.png", 500, 500);

          // Start game loop
          Game.draw();
    },
    // Move the player based on which key is pressed
    keyDown : function(e) {
        Game.entities.player.keys[e.keyCode] = true;
    },
    // Stop the player based on which key is released
    keyUp : function(e) {
        delete Game.entities.player.keys[e.keyCode];
    },
    // Mouse handling
    mouseClick : function(e) {
        Game.entities.player.shoot(e.clientX, e.clientY);
    },
    // Game loop
    draw : function() {
      Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

      for (var i in Game.entities) {
          Game.entities[i].update();
          Game.entities[i].draw(Game.ctx);
      }

      window.requestAnimationFrame(Game.draw);
    }
}
