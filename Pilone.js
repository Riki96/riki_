function Pile(){
	this.x = width;  //fuori inquadratura;
	this.y = height;
	this.wid = 20;
	this.h1 = random(75,310);
	this.k = 80;
	this.h2 = height - this.h1 - this.k; 
	this.vel = 5;
	this.mistake = false;
	this.count = 0;
	// this.bird = new Bird();
	this.move = function(){
		this.x -= this.vel;
	}
	this.error = function(bird){
		if(bird.y<this.h1 || bird.y>height-this.h2){
			if(bird.x>this.x && bird.x<this.x+this.wid){
				this.mistake = true;
				this.count=0;
				return this.count;
			}
		}else{
			if(bird.x>this.x&&bird.x<this.x+this.wid){
				this.mistake=false;
				this.count++;
				return this.count;
			}
		}return this.count;	
	}
	// this.punteggio = function(){
	// 	return this.count;
	// }
	// this.ended = function(){
	// 	if(this.x<this.wid){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
	this.show = function(){
		fill(255);
		if(this.mistake) fill(255,0,0);
		rect(this.x,0,this.wid,this.h1);
		rect(this.x,this.y,this.wid,-this.h2);
	}
	
}