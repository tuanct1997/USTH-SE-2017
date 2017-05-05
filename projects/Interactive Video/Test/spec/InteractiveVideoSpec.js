describe("Interactive Video", function(){
	describe("Video player", function(){
		var player;

		beforeEach(function(){
			player = new VideoPlayer;
		});

		it("clicks on pause button", function(){
			player.pause();
			expect(player.isPause).toEqual(true);
		});

		it("clicks in full-screen button", function(){
			player.fullScreen();
			expect(player.isFull).toEqual(true);
		});
	});
});