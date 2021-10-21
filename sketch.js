var bird;
var pipes = [];
var score = 0;
var info;
var writeScore;
function setup(){
	createCanvas(400,600);
	bird = new Bird();
	pipes.push(new Pipe());
}
function draw(){
	background(51);

	for(var i = pipes.length-1;i >=0;i--){
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hits(bird)){
				noLoop();
		}
		if(pipes[i].pass(bird)){
			score ++;
			console.log(score);
		}

		if(pipes[i].offscreen()){
			pipes.splice(i,1);
		}
	}

	bird.show();
	bird.update();
	if(frameCount % 100 == 0){
		pipes.push(new Pipe());
	}
}

function keyPressed(){
	if(key == ' '){
		bird.up();
	}

}
