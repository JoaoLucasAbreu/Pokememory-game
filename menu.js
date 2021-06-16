var telas = ["menu", "creditos", "jogo", "game_over"];
var larguraJogo = 640;
var alturaJogo = 960;
var jogar;
var credito;
var som;
var nosom;
var pokebola;
var preferencia_Som = true;
var pontos = 0;
var recorde = 0;

function menu() {
	
	var somFundo;
	
	this.preload = function () {
		
		game.load.image("fundo", "Background.png");
		game.load.image("logo","LOGO.png");
		game.load.image("jogar", "Jogar.png");
		game.load.image("credito", "Creditos.png");
		game.load.spritesheet("pokebola", "Pokeball.png",82,83);
		game.load.image("som","Sound.png");
		game.load.image("nosom","NoSound.png");
		game.load.audio("somFundo", "MM.mp3");
		
	};
	
	this.create = function () {
	    
	    somFundo = game.add.audio("somFundo", 1);
	    somFundo.loop = true;
	    
	    game.add.image(0,0,"fundo");
	    game.add.tileSprite(-180,0,1000,350,"logo");
	    
	    jogar = game.add.image(114,435,"jogar");
	    jogar.scale.x=0.5;
	    jogar.scale.y=0.5;
		jogar.inputEnabled = true;
		jogar.input.useHandCursor = true;
		jogar.events.onInputDown.add(jogarFoiClicado);
	    
	    credito=game.add.image(114,535,"credito");
	    credito.scale.x= 0.5;
	    credito.scale.y= 0.5;
		credito.inputEnabled = true;
		credito.input.useHandCursor = true;
		credito.events.onInputDown.add(creditosFoiClicado);
	    
	    som=game.add.image(530,860,"som");
	    som.scale.x= 0.4;
	    som.scale.y= 0.4;
	    som.inputEnabled = true;
		som.input.useHandCursor = true;
		som.events.onInputDown.add(switchSom);
		som.visible = preferencia_Som;
	    
	    nosom=game.add.image(530,860,"nosom");
        nosom.scale.x= 0.4;
	    nosom.scale.y= 0.4;
        nosom.inputEnabled = true;
	    nosom.input.useHandCursor = true;
	    nosom.events.onInputDown.add(switchSom);
	    nosom.visible = !preferencia_Som;
	    
	    //jogar
	    pokebola= game.add.sprite(69,439,"pokebola");
	    pokebola.animations.add("bola",[0,1,2],4,true);
	    pokebola.animations.play("bola");
	    
	    //creditos
	    pokebola= game.add.sprite(69,539,"pokebola");
	    pokebola.animations.add("bola",[0,1,2],4,true);
	    pokebola.animations.play("bola");
    	
    	fadeIn();

		if (preferencia_Som) {
    		somFundo.play();
		}
	};
	
	function jogarFoiClicado() {
		fadeOut(fadeOutJogarAcabou);
	}
	
	function fadeOutJogarAcabou() {
		somFundo.stop();
		game.state.start("jogo");
	}
	
	
	function creditosFoiClicado() {
		fadeOut(fadeOutCreditosAcabou);
	}
	
	function fadeOutCreditosAcabou() {
		somFundo.stop();
		game.state.start("creditos");
	}
	
	
	function switchSom (){
		if (preferencia_Som){
			somFundo.stop();
			som.visible = false;
    		nosom.visible = true;
			preferencia_Som = !preferencia_Som;
		} else {
			somFundo.play();
			som.visible = true;
    		nosom.visible = false;
			preferencia_Som = !preferencia_Som;
		}
	}
	
			
}
