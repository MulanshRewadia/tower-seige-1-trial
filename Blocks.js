class Block
{
    constructor()
    {
        var options = {
            restitution : 1,
            friction : 2,
        }

        this.body = Bodies.rectangle(this.x,this.body,this.width,this.height,options);
        World.add(world,this.body);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y =y;
        this.width = width;
      }

    display()
    {
        var pos = this.body.position;
        translate(pos.x,pos.y);
        push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,width,height);
        pull();
                                                                                                                                                                                                                                                                 
    }
}