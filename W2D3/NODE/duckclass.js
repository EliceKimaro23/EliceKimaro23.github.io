let duck = {


flying:  false,
quaking:  false,
 xPos : 0,
yPos : 0,



}


function takeOff(){
    flying = true;
}
function land(){
    flying = false;
}

function startQuacking(){
    quaking = true;
}
function stopQuacking(){
    quaking = false;
}
function moveTo(x,y){
    console.log("x is :" + " " + x + " " + "y is :" + y) ;
}


module.export = duck; 