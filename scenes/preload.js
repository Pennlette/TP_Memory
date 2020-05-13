


class preload extends Phaser.Scene {
	constructor() {
		super('preload');
	}

	init(){}


	preload()
	{
		////Back////
		this.load.image('background','assets/background.png');		
		////Cards////
		this.load.image('back','assets/cardBack_green3.png');
		this.load.image('Card2','assets/cardClubs2.png');
		this.load.image('Card3','assets/cardSpades3.png');
		this.load.image('Card5','assets/cardClubs5.png');
		this.load.image('Card6','assets/cardDiamonds6.png');
		this.load.image('Card8','assets/cardClubs8.png');
		this.load.image('Card9','assets/cardHearts9.png');
	}


	create()


	update(){this.scene.start('title');
	{

	}


