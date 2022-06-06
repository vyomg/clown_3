noseX=0;
noseY=0;

function preload() {
 
clown_nose=loadImage('https://i.postimg.cc/FzqcyMzb/8-87313-red-nose-transparent-background-image-red-sphere-png.png')

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initailized');
}

function gotPoses(results) 
{
    if(results.lenght > 0);
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.net.x);
        console.log("nose y =" + results[0].pose.net.y);
    }
}
 
function draw() {
 Image(video, 0, 0, 300, 300);
 fill(255,0,0);
 stroke(255,0,0);
 circle(noseX, noseY, 20);
}
 
function take_snapshot() {
    save('myFilterImage.png');
}