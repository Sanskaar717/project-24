class Paper{
    constructor(x,y){
        var ops = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            destiny : 1.2
        }

        this.body = Bodies.circle(x,y,40,ops);
        this.radius = 40;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}