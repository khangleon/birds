var bg = function(game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 0;
    this.numBg = 3;
    
    var self = this;

    this.init = function() {
        this.loadImage();
    }

    this.loadImage = function() {
        this.image = new Image();
        this.image.onload = function() {
            self.loaded = true;
        }
        
        let name = 'bg'+(Math.floor(Math.random() * this.numBg ) % this.numBg) + '.png';
        this.image.src = "img/bg2.png";
    }

    this.update = function(){
        this.x = this.x - 1;
        if (this.x < -self.game.width){
            this.x = 0;
        }
    }

    this.draw = function() {
        if (self.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, this.x, 0, self.game.width, self.game.height);
        self.game.context.drawImage(self.image, this.x + self.game.width, 0, self.game.width, self.game.height);
    }
}