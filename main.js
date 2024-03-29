let difference = null;
let leftWrist = null;
let rightWrist = null;
let noseX = null;
let noseY = null;

function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);
}

function modelLoaded() {
    console.log("Model Intialized");
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("Nose X = "+noseX+"\n Nose Y = "+noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;

        console.log("Left Wrist Position = "+leftWrist+"\n Right Wrist Position = "+rightWrist);

        difference = floor(leftWrist - rightWrist);

        console.log("Difference between Right Wrist and left wrist position is "+difference);
    }
}

function draw() {
    background("#0000FF");
    fill('#00FF00');
    
    text("Ronu Enderman",noseX,noseY);
    textSize(difference);
}