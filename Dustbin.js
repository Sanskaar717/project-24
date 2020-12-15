class Bin{

  constructor(x,y,width,height,angle){
      
    var rest1 = {
      isStatic : false
    }

     this.body = Bodies.rectangle(x,y,width,height,rest1);
     this.width = width;
     this.height = height;
     World.add(myWorld,this.body);
     Matter.Body.setAngle(this.body,angle);
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