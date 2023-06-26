nose_x = "";
nose_y = "";
left_wrist_x = "";
right_wrist_x = "";
square_size="";

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(600, 120);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults)
}

function modelLoaded() {
    console.log("model loaded sucessfully");
}

function draw() {
    background("#969A97");
    fill("black");
    stroke("gold");
    textSize(square_size);
    text("Hello",10,225);
}

function gotResults(r) {
    if (r.length > 0) {
        //console.log(r);
        nose_x = r[0].pose.nose.x;
        nose_y = r[0].pose.nose.y;
        left_wrist_x = r[0].pose.leftWrist.x;
        //left_wrist_y=r[0].pose.leftWrist.y;
        right_wrist_x = r[0].pose.rightWrist.x;
        // right_wrist_y=r[0].pose.rightWrist.y;

        console.log(left_wrist_x, right_wrist_x)
        square_size=floor(left_wrist_x-right_wrist_x);
        document.getElementById("size").innerHTML="The fontsize is:"+square_size+ "px"
    }
}