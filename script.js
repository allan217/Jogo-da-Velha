let jogador = 'X';
let jogada = 0;


//Variáveis para armazenar a pontuação
let pontX = 0;
let pontO = 0;
let EMP = 0;

const Modal = {
	open() {
		document.querySelector('.modal-overlay').classList.add('active');
		
  },
	close() {
		document.querySelector('.modal-overlay').classList.remove('active');
  }
}
const ModalEmp = {
	open() {
		document.querySelector('.modal-empate').classList.add('active');
		
  },
	close() {
		document.querySelector('.modal-empate').classList.remove('active');
  }
}

function chkJogo(id){
	let src = chkSrc(id);
	let cpu = document.getElementById('cpu').checked;
	if(src == "branco.png"){
		document.getElementById(id).src = jogador + ".png";
		jogada ++;
		if(chkVitoria()){

			Modal.open();
			
			//Confere quem venceu e atualiza a pontuação
			if(jogador === 'X'){
				pontX++;
			} else {
				pontO++;
			}
			return;
		}

		if(jogada >= 9){
			ModalEmp.open();
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
		setTimeout(function(){
			chkJogo(jogadaDoComputador())
		},2000);
	}
}


function jogadaDoComputador(){
	jogador = 'O';
	let id1 = chkSrc('cel5');
	let id2 = chkSrc('cel3');
	let id3 = chkSrc('cel7');
	let id4 = chkSrc('cel1');
	let id5 = chkSrc('cel9');
	let id6 = chkSrc('cel2');

	if(id1 == 'X'){ // os if, são para nivel de dificuldade para jogada do computador
		return 'cel3';
	}
	return 'cel' + Math.floor((Math.random() * 9) + 1);
}

function chkSrc(id){
	let src = document.getElementById(id).src;
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
	for(let i = 1; i <= 9; i++){
		let cel = document.getElementById('cel' + i);
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