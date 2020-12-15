class Ground{
    constructor(x,y){
        
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,900,10,options);
        this.width = 900;
        this.height = 10;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}