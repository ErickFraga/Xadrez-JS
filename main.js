T = new Tabuleiro(8);


//var Brancas = Map();

T.pecas.set("7,0", new Torre(7, 0, "preto", -1, true, T, "torreRainha"));
T.pecas.set("7,1", new Cavalo(7, 1, "preto", -1, true, T, "cavaloRei"));
T.pecas.set("7,2", new Bispo(7, 2, "preto", -1, true, T, "bispoRei"));
T.pecas.set("7,3", new Rei(7, 3, "preto", -1, true, T, "rei"));
T.pecas.set("7,4", new Rainha(7, 4, "preto", -1, true, T, "rainha"));
T.pecas.set("7,5", new Bispo(7, 5, "preto", -1, true, T, "bispoRainha"));
T.pecas.set("7,6", new Cavalo(7, 6, "preto", -1, true, T, "cavaloRainha"));
T.pecas.set("7,7", new Torre(7, 7, "preto", -1, true, T, "torreRei"));

T.pecas.set("6,0", new Peao(6, 0, "preto", -1, true, T, "peaoToreRainha"));
T.pecas.set("6,1", new Peao(6, 1, "preto", -1, true, T, "peaoCavaloRainha"));
T.pecas.set("6,2", new Peao(6, 2, "preto", -1, true, T, "peaoBispoRainha"));
T.pecas.set("6,3", new Peao(6, 3, "preto", -1, true, T, "peaoRainha"));
T.pecas.set("6,4", new Peao(6, 4, "preto", -1, true, T, "peaoRei"));
T.pecas.set("6,5", new Peao(6, 5, "preto", -1, true, T, "peaoBispoRei"));
T.pecas.set("6,6", new Peao(6, 6, "preto", -1, true, T, "peaoCavaloRei"));
T.pecas.set("6,7", new Peao(6, 7, "preto", -1, true, T, "peaoToreRei"));



T.pecas.set("0,0", new Torre(0, 0, "branco", 1, true, T, "torreRei"));
T.pecas.set("0,1", new Cavalo(0, 1, "branco", 1, true, T, "cavaloRei"));
T.pecas.set("0,2", new Bispo(0, 2, "branco", -1, true, T, "bispoRei"));
T.pecas.set("0,3", new Rei(0, 3, "branco", 1, true, T, "rei"));
T.pecas.set("0,4", new Rainha(0, 4, "branco", 1, true, T, "rainha"));
T.pecas.set("0,5", new Bispo(0, 5, "branco", 1, true, T, "bispoRainha"));
T.pecas.set("0,6", new Cavalo(0, 6, "branco", 1, true, T, "cavaloRainha"));
T.pecas.set("0,7", new Torre(0, 7, "branco", 1, true, T, "torreRainha"));

T.pecas.set("1,0", new Peao(1, 0, "branco", 1, true, T, "peaoToreRei"));
T.pecas.set("1,1", new Peao(1, 1, "branco", 1, true, T, "peaoCavaloRei"));
T.pecas.set("1,2", new Peao(1, 2, "branco", 1, true, T, "peaoBispoRei"));
T.pecas.set("1,3", new Peao(1, 3, "branco", 1, true, T, "peaoRei"));
T.pecas.set("1,4", new Peao(1, 4, "branco", 1, true, T, "peaoRainha"));
T.pecas.set("1,5", new Peao(1, 5, "branco", 1, true, T, "peaoBispoRainha"));
T.pecas.set("1,6", new Peao(1, 6, "branco", 1, true, T, "peaoCavaloRainha"));
T.pecas.set("1,7", new Peao(1, 7, "branco", 1, true, T, "peaoTorreRainha"));



	/*
			ondePodeIr(){
		var x = this.coord[0];
		var y = this.coord[1];
		this.jogadasPossiveis = new Array();
		// diagonal inferiror esquerda
		for(var i=0; i<this.tabuleiro.dim; i++){
			if(this.tabuleiro.ocupada(x+i, y+i)){
				if(this.tabuleiro.getPeca(x+i, y+i).time != this.time){
					this.jogadasPossiveis.push([x+i, y+i]);
				}
			}else{
				this.jogadasPossiveis.push([x+i, y+i]);
			}

			if(this.tabuleiro.ocupada(x+i, y-i)){
				if(this.tabuleiro.getPeca(x+i, y-i).time != this.time){
					this.jogadasPossiveis.push([x+i, y-i]);
				}
			}else{
				this.jogadasPossiveis.push([x+i, y-i]);
			}

			if(this.tabuleiro.ocupada(x-i, y+i)){
				if(this.tabuleiro.getPeca(x-i, y+i).time != this.time){
					this.jogadasPossiveis.push([x-i, y+i]);
				}
			}else{
				this.jogadasPossiveis.push([x-i, y+i]);
			}

			if(this.tabuleiro.ocupada(x-i, y-i)){
				if(this.tabuleiro.getPeca(x-i, y-i).time != this.time){
					this.jogadasPossiveis.push([x-i, y-i]);
				}
			}else{
				this.jogadasPossiveis.push([x-i, y-i]);
			}
		*/