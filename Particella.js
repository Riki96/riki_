function Particle(){
	this.x=Math.random()*width;
	this.y=Math.random()*height;
	this.vx=2*cos(random(0,2*PI));
	this.vy=2*sin(random(0,2*PI));
	this.force=-0.1;
	this.r;
	this.lifeSpan = 900;
	this.E = 200; //F. Repusliva
	this.F = 0.95; //Attrito
	this.ax;
	this.ay;

	this.size = function(r){
		this.r =r;
	}
	this.show = function(){
		// fill(0);
		ellipse(this.x,this.y,8*log(this.r)+10,8*log(this.r)+10);
	}
	this.move = function(){
		this.x+=this.vx;
		this.y+=this.vy;
		// this.lifeSpan-=1;
	}
	this.barrier = function(width,height){
		if(this.x>width-this.r) this.vx*=-1;
		if(this.x<this.r) this.vx*=-1;
		if(this.y>height-this.r) this.vy*=-1;
		if(this.y<this.r) this.vy*=-1;
	}
	this.isDead = function(){
		if(this.lifeSpan<0){
			return true;
		}
		return false;
	}
	this.accelerate = function(ps){
		this.ax=0;
		this.ay=0;
		for(let p of ps){
			if(p==this) continue;
			let dx = p.x-this.x;
			let dy = p.y-this.y;
			let d = sqrt(sq(dx)+sq(dy));
			let d3 = d>0?d*d*d:1;
			this.ax = this.ax - this.E*dx/d3;
			this.ay = this.ay - this.E*dy/d3;
		}
	}
	this.apply = function(){
		this.vx+=this.ax;
		this.vy+=this.ay;
		this.vx*=this.F;
		this.vy*=this.F;
	}
}