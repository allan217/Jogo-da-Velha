var jogador = 'X';
var jogada = 0;
var tmp;


//Variáveis para armazenar a pontuação
var pontX = 0;
var pontO = 0;
var EMP = 0;

function chkJogo(id){
	var src = chkSrc(id);
	var cpu = document.getElementById('cpu').checked;
	if(src == "branco.png"){
		document.getElementById(id).src = jogador + ".png";
		jogada ++;
		if(chkVitoria()){

			alert('Fim do jogo!\n Vitória do '+ jogador);
			
			//Confere quem venceu e atualiza a pontuação
			if(jogador === 'X'){
				pontX++;
			} else {
				pontO++;
			}
			return;
		}

		if(jogada >= 9){
			alert('JOGO EMPATADO');
			empate();
			return;
		}
		if(jogador == 'X'){
			jogador = 'O';
		} else {
			jogador = 'X';
		}
	}
	if(cpu && jogador == 'O'){
		chkJogo(jogadaDoComputador());
	}
}

function jogadaDoComputador(){
	var id = chkSrc('cel5');
	if(id == "branco.png"){
		return 'cel5';
	}
	return 'cel' + Math.floor((Math.random() * 9) + 1);
}

function intervalo(){
	if(jogadaDoComputador()){
		tmp = setTimeout(jogadaDoComputador, 3000);
	}
	
}

function chkSrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length - 10, src.length);
}
function chkVitoria(){
	if((chkSrc('cel1') == chkSrc('cel2')) && (chkSrc('cel1') == chkSrc('cel3')) && (chkSrc('cel1') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel4') == chkSrc('cel5')) && (chkSrc('cel4') == chkSrc('cel6')) && (chkSrc('cel4') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel7') == chkSrc('cel8')) && (chkSrc('cel7') == chkSrc('cel9')) && (chkSrc('cel7') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel1') == chkSrc('cel4')) && (chkSrc('cel1') == chkSrc('cel7')) && (chkSrc('cel1') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel2') == chkSrc('cel5')) && (chkSrc('cel2') == chkSrc('cel8')) && (chkSrc('cel2') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel3') == chkSrc('cel6')) && (chkSrc('cel3') == chkSrc('cel9')) && (chkSrc('cel3') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel1') == chkSrc('cel5')) && (chkSrc('cel1') == chkSrc('cel9')) && (chkSrc('cel1') != 'branco.png')){
		return true;
	}
	if((chkSrc('cel3') == chkSrc('cel5')) && (chkSrc('cel3') == chkSrc('cel7')) && (chkSrc('cel3') != 'branco.png')){
		return true;
	}
	return false;
}

//Função que limpa o tabuleiro
function recarregaJogo(){
	//Zera o número de jogadas registradas
	jogada = 0;
	
	//Substitui todas as imagens por 'branco.png'
	for(var i = 1; i < 10; i++){
		var cel = document.getElementById('cel' + i);
		cel.src = 'branco.png';
	}
	
	//Chamada à função de atualização do placar
	atualizaPlacar();
	
	//Garante que o jogador inicial seja o 'X'
	jogador = 'X'
}

//Função que atualiza os elementos HTML com a pontuação de X e O
function atualizaPlacar(){
	document.getElementById('scoreX').innerHTML = pontX;
	document.getElementById('scoreO').innerHTML = pontO;
	document.getElementById('scoreE').innerHTML = EMP;
}

function empate(){
	if(jogada >= 9){
		EMP++;
	}
}