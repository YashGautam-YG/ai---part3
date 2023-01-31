img="";
status="";
object = [];
objects=0;
song="";
function preload(){
    
}
function setup(){


    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();

}
function start(){


    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";


}

function draw(){

    
    image(video,0,0,380,380);

    if(status !=""){


        r=random(255);

        g=random(255);

        b=random(255);


        objectDetector.detect(video,gotresults);


        for(i=0;i<object.length;i++){


            document.getElementById("status").innerHTML="Status:Object Detected";
            document.getElementById("objects").innerHTML="Number of objects Detected are :-   "+object.length;
            fill(r,g,b);
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke(r,b,g);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            console.log(i);


        }

    }

}


function modelLoaded(){

    console.log("Your model is loaded");
    status=true;


}
function gotresults(error,results){

    if(error){


        console.log(error);


    }
    else{


        console.log(results);
        object=results;


    }
    

}
