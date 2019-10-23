class Tabuleiro
{
	constructor(dimensao)
	{
		this.dim = dimensao;
		this.pecas = new Map();
		this.objHTML = document.getElementById("tabuleiro");
		this.objJQ = $("#tabuleiro");
		this.inicTabuleiro();
	}

	inicTabuleiro()
	{
		for(var i=0; i<this.dim; i++)
		{
			for(var j=0; j<this.dim; j++)
			{
				this.objJQ.append($("<div id='"+i+","+j+"' data-ocupada='0'></div>").text(" "));
				var elem = document.getElementById(i+","+j);
				elem.innerHTML = "<pos>"+i+"-"+j+"</pos>";

				var img = document.createElement("IMG");
				img.setAttribute("onclick", "T.resetCores()");
				img.style.size = "100%";
				img.setAttribute("src", "imagens/void.png");
				img.setAttribute("class", "vazio");
				img.setAttribute("id", "vazio"+i+"-"+j);
				document.getElementById(i+","+j).append(img);
				if((j+i)%2 == 0)
				{
					document.getElementById(i+","+j).style.backgroundColor = "wheat";
					document.getElementById(i+","+j).style.color = "cadetblue";
				}
				else
				{
					document.getElementById(i+","+j).style.backgroundColor = "cadetblue";
					document.getElementById(i+","+j).style.color = "wheat";
				}
			}
		}
		console.log("Tabuleiro cirado dim:"+this.dim+" :)");
	}

	ocupada(x, y){
		if(x<this.dim && x>=0 && y<this.dim && y>=0){
			return (document.getElementById(x+","+y).dataset.ocupada == "1" );
		}else{
			return false;
		}
	}

	resetCores(){
		for(var i=0; i<this.dim; i++)
		{
			for(var j=0; j<this.dim; j++)
			{
				var peca = document.getElementById(i+","+j);
				// peca.setAttribute("onclick", " ")
				if((j+i)%2 == 0)
				{
					peca.style.backgroundColor = "wheat";
				}
				else
				{
					peca.style.backgroundColor = "cadetblue";
				}
			}
		}
	}

	getPeca(x, y){
		var peca = document.getElementById(x+","+y);
		if(this.ocupada(x, y)){
			return this.pecas.get(x+","+y);
		}
	}

}

class Peca {
	constructor(x, y, time, sentido, ativo, tabuleiro, nome){
		this.ativo = ativo;
		this.coord = [x, y];
		this.jogadasPossiveis = new Array();
		this.nome = nome;
		this.sentido = Number(sentido);
		this.tabuleiro = tabuleiro;
		this.time = time;
		this.tipo = "";
		this.log();
		this.setImagem();
		document.getElementById( x+","+y).dataset.ocupada = "1";
	}
	log(){
		console.log("	Peca criada time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}

	setImagem(){
		var img = document.getElementById("vazio"+this.coord[0]+"-"+this.coord[1]);
		img.setAttribute("id", this.nome+"-"+this.time);
		img.setAttribute("src", "imagens/"+this.time+"/"+this.tipo+".png");
		img.setAttribute("onclick", "T.pecas.get('"+this.coord+"').exibirJogadas()");
		//img.setAttribute("onmouseout", "T.pecas.get('"+this.coord+"').resetCores()");
	}

	setImagemVazia(){
		var img = document.getElementById(this.nome+"-"+this.time);
		img.setAttribute("id", "vazio"+this.coord[0]+"-"+this.coord[1]);
		img.setAttribute("src", "imagens/void.png");
		img.setAttribute("onclick", "T.resetCores()");
	}

	ondePodeIr(){
		return null;
	}

	exibirJogadas(){
		this.ondePodeIr();
		this.tabuleiro.resetCores();
		for(var i=0; i<this.jogadasPossiveis.length; i++){
			var posicao = document.getElementById(String(this.jogadasPossiveis[i]));
			posicao.style.backgroundColor = "green";
			posicao.style.opacity = "20%";
			posicao.setAttribute("onclick", "T.getPeca("+this.coord+").moverPara("+this.jogadasPossiveis[i]+")");
		}
	}

	resetCores(){
		if(this.jogadasPossiveis.length > 0){
			for(var i=0; i<this.jogadasPossiveis.length; i++){
				var peca = document.getElementById(this.jogadasPossiveis[i]);
				peca.removeAttribute("onclick");
				if((this.jogadasPossiveis[i][0] + this.jogadasPossiveis[i][1]) % 2 ==0){
					peca.style.backgroundColor = "wheat";
				}else{
					peca.style.backgroundColor = "cadetblue";
				}
			}
		}
	}

	podeIr(x, y){
		for(var i=0; i< this.jogadasPossiveis.length; i++){
			if(this.jogadasPossiveis[i][0] == x && this.jogadasPossiveis[i][1] == y){
				return 1;
	        }
		}
		return 0;
	}

	moverPara(x, y){
		if(this.podeIr(x, y) && this.ativo){
			var peca = this.tabuleiro.pecas.get(String(this.coord));
			document.getElementById(String(this.coord)).dataset.ocupada = "0";

			this.tabuleiro.pecas.delete(String(this.coord));

			this.setImagemVazia();
			this.coord = new Array(x, y);
			if(this.tabuleiro.ocupada(x, y)){
				this.capturar(this.tabuleiro.getPeca(x, y));
				this.tabuleiro.pecas.delete(x+","+y);
			}

			this.tabuleiro.pecas.set(x+","+y, peca);
			document.getElementById(String(this.coord)).dataset.ocupada = "1";
			this.setImagem();
			this.resetLink();
		}
	}

	resetLink(){
		for(var i=0; i < this.jogadasPossiveis.length; i++){
			var peca = document.getElementById(String(this.jogadasPossiveis[i]));
			peca.removeAttribute("onclick");
		}
	}

	destruir(){
		this.ativo = false;
		this.setImagemVazia();
		document.getElementById(String(this.coord)).dataset.ocupada = "0";
	}

	capturar(inimigo){
		inimigo.destruir();
		inimigo.resetCores();
	}

	adicionarJogada(x, y){
		var peca = this.tabuleiro.getPeca(x, y);

		if(x<this.tabuleiro.dim && x>=0 && y<this.tabuleiro.dim && y>=0){
			if(peca == undefined || peca.time != this.time){
				this.jogadasPossiveis.push([x, y]);
			}
		}
	}
}


class Peao extends Peca{
	ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();

		// se a posicao da frente nao estiver ocupada
		if(this.tabuleiro.ocupada(x + this.sentido, y) == false){
			this.jogadasPossiveis.push([x + this.sentido, y]);
			// SE o sentido e negativo E o peao ainda nao saiu da posicao 6 PODE andar duas casas
			// OU
			// SE o sentido e positivo E o peao anida nao saiu da posicao 1 PODE andar duas casas
			if((this.sentido == -1 && this.coord[0]==6) ||(this.sentido == 1 && this.coord[0]==1)){

				this.jogadasPossiveis.push([x +(2 * this.sentido), y]);
			}
		}
		// se tiver uma peca na diagonal esquerda
		if(this.tabuleiro.ocupada(x + this.sentido, y - this.sentido) == true){
			if(this.tabuleiro.getPeca(x + this.sentido, y - this.sentido).time != this.time){
				this.jogadasPossiveis.push([x + this.sentido, y - this.sentido]);
			}
		}
		// se tiver uma peca na diagonal direita
		if(this.tabuleiro.ocupada(x + this.sentido, y + this.sentido) == true){
			if(this.tabuleiro.getPeca(x + this.sentido, y + this.sentido).time != this.time){
				this.jogadasPossiveis.push([x + this.sentido, y + this.sentido]);
			}
		}
	}
	log(){
		this.tipo = "peao";
		console.log("	PEAO criado time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}
}

class Torre extends Peca{

	ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();

		// Mesma coluna da torre pra cima
		for(var i=x+1; i<this.tabuleiro.dim; i++){
			if(this.tabuleiro.ocupada(i, y)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(i, y).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([i, y]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([i, y]);
		}
		// Mesama coluna da torre pra baixo
		for(var i=x-1; i>=0; i--){
			if(this.tabuleiro.ocupada(i, y)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(i, y).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([i, y]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([i, y]);
		}

		// Mesma linha que a torre a direita
		for(var j=y+1; j<this.tabuleiro.dim; j++){
			if(this.tabuleiro.ocupada(x, j)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(x, j).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([x, j]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([x, j]);
		}

		// Mesma linha que a Torre a esquerda
		for(var j=y-1; j>=0; j--){
			if(this.tabuleiro.ocupada(x, j)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(x, j).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([x, j]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([x, j]);
		}
	}

	log(){
		this.tipo = "torre";
		console.log("	TORRE criado time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}
}

class Cavalo extends Peca{
	ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();

		this.adicionarJogada(x+1, y+2);
		this.adicionarJogada(x+1, y-2);
		this.adicionarJogada(x-1, y+2);
		this.adicionarJogada(x-1, y-2);

		this.adicionarJogada(x+2, y+1);
		this.adicionarJogada(x+2, y-1);
		this.adicionarJogada(x-2, y+1);
		this.adicionarJogada(x-2, y-1);
	}

	log(){
		this.tipo = "cavalo";
		console.log("	CAVALO criado time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}
}

class Bispo extends Peca{
	ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();
		// diagonal inferiror esquerda
		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x+i, y+i);
			if(this.tabuleiro.ocupada(x+i, y+i)){
				break;
			}
		}

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x+i, y-i);
			if(this.tabuleiro.ocupada(x+i, y-i)){
				break;
			}
		}

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x-i, y+i);
			if(this.tabuleiro.ocupada(x-i, y+i)){
				break;
			}
		}

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x-i, y-i);
			if(this.tabuleiro.ocupada(x-i, y-i)){
				break;
			}
		}

	}

	log(){
		this.tipo = "bispo";
		console.log("	BISPO criado time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}
}

class Rainha extends Peca{
	ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();
		// Movimentação da torre + Movimentação do Bispo

		// TORRE

		// Mesma coluna da torre pra cima
		for(var i=x+1; i<this.tabuleiro.dim; i++){
			if(this.tabuleiro.ocupada(i, y)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(i, y).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([i, y]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([i, y]);
		}
		// Mesama coluna da torre pra baixo
		for(var i=x-1; i>=0; i--){
			if(this.tabuleiro.ocupada(i, y)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(i, y).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([i, y]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([i, y]);
		}

		// Mesma linha que a torre a direita
		for(var j=y+1; j<this.tabuleiro.dim; j++){
			if(this.tabuleiro.ocupada(x, j)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(x, j).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([x, j]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([x, j]);
		}

		// Mesma linha que a Torre a esquerda
		for(var j=y-1; j>=0; j--){
			if(this.tabuleiro.ocupada(x, j)){ // SE estiver ocupada para o loop
				if(this.tabuleiro.getPeca(x, j).time != this.time){ // SE a peca ocupando e inimiga adiciona as jogadas possiveis antes de parar
					this.jogadasPossiveis.push([x, j]);
				}
				break;
			}
			// SE a posição não estiver ocupada adicionar as jogadas possiveis
			this.jogadasPossiveis.push([x, j]);
		}


		// BISPO

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x+i, y+i);
			if(this.tabuleiro.ocupada(x+i, y+i)){
				break;
			}
		}

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x+i, y-i);
			if(this.tabuleiro.ocupada(x+i, y-i)){
				break;
			}
		}

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x-i, y+i);
			if(this.tabuleiro.ocupada(x-i, y+i)){
				break;
			}
		}

		for(var i=1; i<this.tabuleiro.dim; i++){
			this.adicionarJogada(x-i, y-i);
			if(this.tabuleiro.ocupada(x-i, y-i)){
				break;
			}
		}


	}
	log(){
		this.tipo = "rainha";
		console.log("	RAINHA criado time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}
}

class Rei  extends Peca{
	ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();

		this.adicionarJogada(x+1, y+1);
		this.adicionarJogada(x+1, y);
		this.adicionarJogada(x+1, y-1);

		this.adicionarJogada(x, y+1);
		this.adicionarJogada(x, y-1);

		this.adicionarJogada(x-1, y+1);
		this.adicionarJogada(x-1, y);
		this.adicionarJogada(x-1, y-1);
	}

	log(){
		this.tipo = "rei";
		console.log("	REI criado time:"+this.time+" ativo:"+this.ativo+" tabuleiro:"+this.tabuleiro+" :)");
	}
}
