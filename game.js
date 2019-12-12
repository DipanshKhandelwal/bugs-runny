const gameState = {
    score: 0
};

const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 600,
    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1500 },
            enableBody: true,
        }
    },
    scene: [StartScene, GameScene, Snowman]
};

const game = new Phaser.Game(config);
