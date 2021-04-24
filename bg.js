var bg = function(game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    
    var self = this;

    this.init = function() {
        this.loadImage();
    }

    this.loadImage = function() {
        this.image = new Image();
        this.image.onload = function() {
            self.loaded = true;
        }

        this.image.src = "img/bg1.png";
    }

    this.update = function(){

    }

    this.draw = function() {
        if (self.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, 0,0, self.game.width, self.game.height);
    }
}