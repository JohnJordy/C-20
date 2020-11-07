var car1,car2,car3
var wall

function setup() {

createCanvas(1600,400);

wall = createSprite(1500,200,60,300)
wall.shapeColor="cyan"

car1 = createSprite(175, 100, 50, 50);
car1.shapeColor="white"
car2 = createSprite(175, 200, 50, 50);
car2.shapeColor="grey"
car3 = createSprite(175, 300, 50, 50);
car3.shapeColor="brown"
}

function draw() {

background(0); 

car1.collide(wall)
car2.collide(wall)
car3.collide(wall)

text ("Car Name           Weight         Speed        Deformation        Rating",10,15)
text (" Tesla              2205            60            176.4              B",10,25)
text (" Honda              2000            50            111.2              B+",10,35)
text (" Renault            2350            55            157.9              A",10,45)

text ("Press 1 to use Tesla",10,65)
text ("Press 2 to use Honda",10,75)
text ("Press 3 to use Renault",10,85)

if(keyDown("1")){
car1.velocityX = 60    
}
if(keyDown("1")){
car2.velocityX = 50    
}
if(keyDown("1")){
car3.velocityX = 55    
}

drawSprites();

}
