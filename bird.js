function Bird(){
	this.x = 64;
	this.y = height/2;
	this.gravity = 0.6;
	this.velocity = 0;
	this.lift = -15;
	this.bird = 32;

	this.show = function(){
		fill(255);
		ellipse(this.x,this.y,this.bird,this.bird);
	}

	this.up = function(){	
		this.velocity += this.lift;
	}

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}

	}
	this.stop = function(){
		this.x = this.x;
		this.velocity = 0;
	}
}