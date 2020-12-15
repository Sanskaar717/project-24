class Paper {
    constructor(x,y){
        
       var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
       }

    Matter.Bodies.circle(x,y,5,options);
    this.radius = 5;
    World.add(myWorld,this.body);

    }
    display(){
        pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("pink");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}
