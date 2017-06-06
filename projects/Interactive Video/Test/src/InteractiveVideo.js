var VideoPlayer = function(){
	this.isPause = false;
	this.isFull = false;
}

VideoPlayer.prototype.pause = function(){
	if(this.isPause == false)
	{
		this.isPause = true;
	}
	else
	{
		this.isPause = false;
	}
}

VideoPlayer.prototype.fullScreen = function(){
	if (this.isFull == false) 
	{
		this.isFull = true;
	}
	else
	{
		this.isFull = false;
	}
}