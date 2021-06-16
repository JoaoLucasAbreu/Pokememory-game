function game_over() {
	var play_again;
	
	this.preload = function () {
		game.load.image("fundo", "game_over.png"); //Fundo
		game.load.image("fundo_pontos", "Visor.png"); //Fundo Pontuacao
		game.load.image("play_again", "play_again.png"); //Botao Jogar Denovo
	};
	
	this.create = function () {
		game.add.image(0,0,"fundo");
		fundo_pontos = game.add.image(70,60,"fundo_pontos");
		fundo_pontos.scale.x = 0.5;
		fundo_pontos.scale.y = 0.5;
		
		play_again = game.add.image(200, 400,"play_again");
		play_again.inputEnabled = true;
		play_again.input.useHandCursor = true;
		play_again.events.onInputDown.add(voltar);
		play_again.scale.x = 0.5;
		play_again.scale.y = 0.48;
		
		pontoText = game.add.text(170, 110, pontos, { font: "normal 35px 'Press Start 2P'", fill: '#000' });
		pontoText.setText("PONTOS                "+ pontos);
		
		fadeIn();
	};
	
	function voltar() {
		fadeOut(game.state.start("jogo"));
	}
	
}
