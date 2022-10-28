var Breakout = new Phaser.Class({
    extends: Phaser.Scene,
    initialize: function Breakout() {
        Phaser.Scene.call(this, {key: 'breakout'});

        this.bricks;
        this.paddle;
        this.ball;
    },

    preload: function() {
        this.load.atlas('assets', 'my_game/assets/breakout.png', 'my_game/assets/breakout.json');
    },

    create: function() {
        //Enable world bounds, but disabling the floor
        this.physics.world.setBoundsCollision(true, true, true, false);

        //Create the bricks in a 10x6 grid
        this.bricks = this.physics.add.staticGroup({
            key: 'assets', frame: ['blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1'],
            frameQuantity: 10,
            gridAlign: {width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100}
        });

        this.ball = this.physics.add.image(400, 500, 'assets', 'ball1').setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('onPaddle', true);

        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1').setImmovable();
    }
})

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [Breakout],
    physics: {
        default: 'arcade'
    }
}

var game = new Phaser.Game(config);