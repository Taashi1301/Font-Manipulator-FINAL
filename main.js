NoseX=0;
NoseY=0;
LeftWristX=0;
RightWristX=0;
Difference=0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(700, 250);
    video = createCapture(VIDEO);
    video.position(100, 250);
    video.size(300, 300);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", Getposes);
}

function draw(){
    background("#7e8289");
    fill(0,255,0);
    textSize(Difference);
    text("TEXT", NoseX, NoseY);
}

function modelLoaded(){
    console.log("ModelLoaded");
}

function Getposes(results){
    if (results.length > 0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        LeftWristX=results[0].pose.leftWrist.x;
        RightWristX=results[0].pose.rightWrist.x;
        Difference=floor(LeftWristX-RightWristX);
        console.log(Difference);
        console.log(NoseX, NoseY);
    }
}