class Paper{
    constructor(x,y,radius){
        var ops = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            destiny : 1.2
        }

        this.body = Bodies.circle(x,y,radius,ops);
        this.radius = radius;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}