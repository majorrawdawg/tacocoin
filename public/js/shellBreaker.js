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
    this.load.image('crack', '/assets/sb/images/crack.png'); // Load crack image
    this.load.audio('tapSound', '/assets/sb/sounds/tap.mp3'); // Load tap sound
    this.load.audio('crackSound', '/assets/sb/sounds/crack.mp3'); // Load crack sound
    // this.load.audio('heartbeat', '/assets/sb/sounds/heartbeat.mp3'); // Load heartbeat sound
    // this.load.audio('flatline', '/assets/sb/sounds/flatline.mp3'); // Load flatline sound
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

    this.tapSound = this.sound.add('tapSound');
    this.crackSound = this.sound.add('crackSound');
    // this.heartbeatSound = this.sound.add('heartbeat');
    // this.flatlineSound = this.sound.add('flatline');

    // this.heartbeatSound.play({ loop: true });

    this.clickCount = 0;
    this.clicksToNextPhase = 10;

    this.taco.sprite.on('pointerdown', () => {
      console.log('Taco clicked');
      this.tapSound.play();
      this.clickCount++;
      console.log(`Click count: ${this.clickCount}`);
      if (this.clickCount >= this.clicksToNextPhase) {
        updateTacoPhase.call(this);
        this.clickCount = 0;
      }
      animateTaco.call(this);
      addCrack.call(this);
    });

    // Ensure proper positioning
    this.scale.on('resize', resizeGame, this);
  }

  function updateTacoPhase() {
    this.taco.phase = Math.min(this.taco.phase + 1, this.tacoPhases.length - 1);
    this.taco.sprite.setTexture('taco_' + this.tacoPhases[this.taco.phase]);
    console.log(`Taco phase updated to: ${this.tacoPhases[this.taco.phase]}`);

    // updateHeartbeat.call(this);

    if (this.taco.phase === this.tacoPhases.length - 1) {
      endGame.call(this);
    }
  }

  function endGame() {
    console.log('Game Over');
    // this.heartbeatSound.stop();
    // this.flatlineSound.play();
  }

  // function updateHeartbeat() {
  //   if (this.taco.phase === 0) {
  //     this.heartbeatSound.setRate(1.0); // Normal heartbeat
  //   } else if (this.taco.phase === 1) {
  //     this.heartbeatSound.setRate(1.5); // Faster heartbeat
  //   } else if (this.taco.phase === 2) {
  //     this.heartbeatSound.setRate(2.0); // Even faster heartbeat
  //   } else if (this.taco.phase === 3) {
  //     this.heartbeatSound.setRate(0.5); // Slower heartbeat
  //   }
  // }

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

  function animateTaco() {
    console.log('Animating taco');
    this.tweens.add({
      targets: this.taco.sprite,
      angle: { from: -10, to: 10 },
      duration: 100,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: 5,
      onComplete: () => {
        this.taco.sprite.angle = 0; // Reset angle after wobble
        console.log('Taco animation complete');
      }
    });
  }

  function addCrack() {
    console.log('Adding crack');
    const crack = this.add.image(
      Phaser.Math.Between(0, this.scale.width),
      Phaser.Math.Between(0, this.scale.height),
      'crack'
    );
    crack.setAlpha(0);
    this.tweens.add({
      targets: crack,
      alpha: 1,
      duration: 100,
      ease: 'Power1',
      yoyo: true,
      onComplete: () => {
        crack.destroy(); // Remove crack after animation
        console.log('Crack animation complete');
      }
    });
    this.crackSound.play();
  }

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    game.scale.resize(width, height);
    game.scene.scenes[0].events.emit('resize', { width: width, height: height });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const shellBreakerButton = document.querySelector('.desktop-icon[data-target="shell-breaker-window"]');
  if (shellBreakerButton) {
    shellBreakerButton.addEventListener('click', () => {
      const window = document.getElementById('shell-breaker-window');
      window.style.display = 'block';
      const gameContainer = document.getElementById('game-container');
      if (gameContainer) {
        initializeGame();
      }
    });
  }
});
