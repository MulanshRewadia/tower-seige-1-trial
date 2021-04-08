const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup()
{
  createCanvas(1500,1000);
  background("black");
  slingshot = new Slingshot(stone.body,{x:200,y:500});
  bottom1 = new Bottom(1200,500,200,20);
  bottom2 = new Bottom(800,700,200,20);
  block1 = new Block(1175,495,20,50);
  block2 = new Block(1180,495,20,50);
  block3 = new Block(1185,495,20,50);
  block4 = new Block(1190,495,20,50);
  block5 = new Block(1195,495,20,50);
  block6 = new Block(1200,495,20,50);
  block7 = new Block(1180,480,20,50);
  block8 = new Block(1185,480,20,50);
  block9 = new Block(1190,480,20,50);
  block10 = new Block(1195,480,20,50);
  block11 = new Block(1185,465,20,50);
  block12 = new Block(1190,465,20,50);
  block13 = new Block(1182.5,450,20,50);

  block14 = new Block(785,695,20,50);
  block15 = new Block(790,695,20,50);
  block16 = new Block(795,695,20,50);
  block17 = new Block(800,695,20,50);
  block18 = new Block(790,680,20,50);
  block19 = new Block(795,680,20,50);
  block20 = new Block(792.5,665,20,50);

}


function draw()
{
   slingshot.display();
   bottom1.display();
   bottom2.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
  }