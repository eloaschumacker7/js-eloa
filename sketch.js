function setup () {
 createCanvas(600, 600);
 background('white');
}

function draw () {


    stroke('blue')
    fill('red')

//console.log (mouseIsPressed);

    if(mouseIsPressed){
Reflect(mouseX, mouseY, 20, 35);
    }


}