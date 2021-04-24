var bird = function(game){
    this.game = game;
    this.images = [];

    this.img1Loaded = false;
    this.img2Loaded = false;
    this.img3Loaded = false;
    this.currentImage = null;

    this.currentFrame = 0;

    var self = this;

    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        img1.onload = function() {
            self.img1Loaded = true;
            self.currentImage = img1;
            self.images.push(img1);
        }
        img2.onload = function(){
            self.img2Loaded = true;
            self.images.push(img2);
        }
        img3.onload = function(){
            self.img3Loaded = true;
            self.images.push(img3);
        }

        img1.src = 'img/bird-1.png';
        img2.src = 'img/bird-2.png';
        img3.src = 'img/bird-3.png';
    }

    this.update = function(){

        if (!self.img1Loaded || !self.img2Loaded || !self.img3Loaded) {
            return;
        }

        self.currentFrame++;
        if (self.currentFrame == 30){
            self.currentFrame = 0;
        }

        if (self.currentFrame == 9){
            self.currentImage = self.images[0];
        } else if (self.currentFrame == 19){
            self.currentImage = self.images[1];
        } else if (self.currentFrame == 29) {
            self.currentImage = self.images[2];
        }
    }

    this.draw = function(){
        if (self.img1Loaded && self.img2Loaded && self.img3Loaded) {
            self.game.context.drawImage(self.currentImage, (self.game.width / 2), (self.game.height / 2)-(self.game.width * 0.1 / 2), self.game.width * 0.1, self.game.width * 0.1);
        }
    }
}