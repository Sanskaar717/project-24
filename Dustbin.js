class Dustbin{

  constructor(x,y,angle){
      
    var rest1 = {
      isStatic : false
    }

     this.body = Bodies.rectangle(x,y,10,70,rest1);
     this.width = 10;
     this.height = 70;
     Matter.Body.setAngle(this.body,angle);
     World.add(myWorld,this.body);
  }

  display(){
      var pos = this.body.position;
      var angle = this.body.angle;  
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("white");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
  }

}