class Monster{
    constructor(x,y,width,height){
        var options={
            frictionAir:0.2,
            density:10
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/Monster-01.png");
        World.add(world,this.body);
    }
    display(){
        push ();
        imageMode(CENTER);
        image(this.image,1000,200,this.width,this.height);
        pop ();


    }
}