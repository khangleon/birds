var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.bird = null;
    this.bg = null;

    var self = this;
    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;


        document.body.appendChild(this.canvas);

        this.bg = new bg(this)
        this.bg.init();

        this.bird = new bird(this);
        this.bird.init();


        this.loop();

        window.addEventListener("resize", function(){
            let w = window.innerWidth;
            let h = window.innerHeight;
            self.width = w;
            self.height = h;
            self.canvas.width = w;
            self.canvas.height = h;
        });
    }

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.update= function(){
        this.bg.update();
        this.bird.update();
    }

    this.draw = function(){
        this.bg.draw();
        this.bird.draw();
    }

}

var g = new game();
g.init();