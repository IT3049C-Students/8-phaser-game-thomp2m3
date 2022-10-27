var Breakout = new Phaser.Class({
    extends: Phaser.Scene,
    initialize: function Breakout() {
        Phaser.Scene.call(this, {key: 'breakout'});

        this.bricks;
        this.paddle;
        this.ball;
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