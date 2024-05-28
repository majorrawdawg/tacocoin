function initializeGame() {
  console.log('Initializing Shell Breaker game...');
  const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 600,
    parent: 'game-container',
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
  };

  const game = new Phaser.Game(config);

  function preload() {
    console.log('Preloading assets...');
    this.load.image('taco_fresh', '/assets/sb/images/default_tacos/taco_01.png');
    this.load.image('taco_slightly_stale', '/assets/sb/images/default_tacos/taco_02.png');
    this.load.image('taco_stale', '/assets/sb/images/default_tacos/taco_03.png');
    this.load.image('taco_dead', '/assets/sb/images/default_tacos/taco_04.png');
  }

  function create() {
    console.log('Creating game scene...');
    this.tacoPhases = ['fresh', 'slightly_stale', 'stale', 'dead'];
    const startingY = this.scale.height / 2 - 100; // Adjust this value to tweak the starting height
    this.taco = {
      phase: 0,
      sprite: this.add.sprite(this.scale.width / 2, startingY, 'taco_fresh')
    };
    this.taco.sprite.setOrigin(0.5);
    this.taco.sprite.setInteractive();

    this.clickCount = 0;
    this.clicksToNextPhase = 10;

    this.taco.sprite.on('pointerdown', function() {
      this.clickCount++;
      if (this.clickCount >= this.clicksToNextPhase) {
        this.updateTacoPhase();
        this.clickCount = 0;
      }
    }, this);

    // Ensure proper positioning
    this.scale.on('resize', resizeGame, this);
  }

  function updateTacoPhase() {
    this.taco.phase = Math.min(this.taco.phase + 1, this.tacoPhases.length - 1);
    this.taco.sprite.setTexture('taco_' + this.tacoPhases[this.taco.phase]);

    if (this.taco.phase === this.tacoPhases.length - 1) {
      this.endGame();
    }
  }

  function endGame() {
    console.log('Game Over');
  }

  function update() {
    // Update game logic, if needed
  }

  function resizeGame(gameSize) {
    const width = gameSize.width || this.scale.width;
    const height = gameSize.height || this.scale.height;
    this.cameras.resize(width, height);

    // Adjust the sprite position and scale
    const scale = Math.min(width / 720, height / 600);
    this.taco.sprite.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.taco.sprite.setScale(scale);
  }

  window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    game.scale.resize(width, height);
    game.scene.scenes[0].events.emit('resize', { width: width, height: height });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const shellBreakerButton = document.querySelector('.desktop-icon[data-target="shell-breaker-window"]');
  if (shellBreakerButton) {
    shellBreakerButton.addEventListener('click', function() {
      const window = document.getElementById('shell-breaker-window');
      window.style.display = 'block';
      const gameContainer = document.getElementById('game-container');
      if (gameContainer) {
        initializeGame();
      }
    });
  }
});
