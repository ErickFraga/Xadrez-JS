# XADREX

## Classes

- Peca
- Tabuleiro
- Peão
- Torre
- Cavalo
- Bispo
- Rainha
- Rei

## Coordenada

    ### Atributos
    	- *int* i;
    	- *int* J;
    ### Metodos
    	- setCoordenada(int i, int, j)

## Peca

    ### Atributos
    	- *int* time;
    	- *Tabuleiro* tabuleiro;
    	- *bool* ativo;
    	- *Coordenada* coordenada;
    	- *int[]* ondePodeIr;

    ### Methodos
    	- *void* ondePodeIr()
    	- *void* destruir();
    	- void mover(int i, int j){
    		if((i,j) in this.ondePodeIr && ativo){
    			this.Coordeanda.SetCoordenada(i, j);

    			if(this.tabuleiro.ocupada(i,j)){
    				capturar(this.tabuleiro.getPeca(i,j)));

    			}
    		}
    	}

    	- void capturar(Peca inimigo){
    		inimigo.destruir()
    	}

## Tabuleiro

### Atrbutos

- _int_ dimensao;
- _Peca_ Pecas[dimensao, dimensao];
- _Peca_ BrancasFora[];
- _Peca_ PretasFora[];

### Metodos

- _bol_ Ocupado(_int_ i, _int_ j)
- _Peca_ getPeca(_int_ i, _int_ j)

## Peão **extends** Peca

    ### Atributos

### Methodos

    	- *return* ondePodeIr(){
    		int[] OPI;
    		if(!this.tabuleiro.ocupado(i+1, j)){
    			OPI.append(i+1, j);
    		}

    		if(this.tabuleiro.ocupado((i+1, j-1))){
    			OPI.append((i+1, j-1));
    		}

    		if(this.tabuleiro.ocupado((i+1, j+1))){
    			OPI.append((i+1, j+1));
    		}

    		this.ondePodeIr = OPI;

    	}

## Torre **extends** Peca

    ### Atributos

    ### Metodos
    	- *int[]* ondePodeIr(){
    		int[] OPI;
    		a=J
    		b=i
    		while((!ocupada(i, a) && a<8 ) || (!ocupada(b, j) && b<8)){
    			if(!ocupada(i, a) && a<8 ){
    				OPI.append(i, a);
    				a++;
    			}

    			if(!ocupada(b, j) && b<8){
    				OPI.append(b, j);
    				b++;
    			}
    		}

    		if(ocupada(i, a) && this.tabuleiro.getPeca(i, a)!=this.time) OPI.append(i, a);
    		if(ocupada(b, j) && this.tabuleiro.getPeca(b, j)!=this.time) OPI.append(b, j);

    		a=J
    		b=i
    		while((!ocupada(i, a) && a>-1 ) || (!ocupada(b, j) && b>-1)){
    			if(!ocupada(i, a) && a>-1 ){
    				OPI.append(i, a);
    				a--;
    			}

    			if(!ocupada(b, j) && b>-1){
    				OPI.append(b, j);
    				b--;
    			}
    		}
    		if(ocupada(i, a) && this.tabuleiro.getPeca(i, a)!=this.time) OPI.append(i, a);
    		if(ocupada(b, j) && this.tabuleiro.getPeca(b, j)!=this.time) OPI.append(b, j);
    	}

## Bispo **estends** Peca

    ### Atributos

    ### Metodos
    	- *int* ondePodeIr(){
    		// direita cima
    		x=i+1
    		y=j+1
    		while(!ocupada(x, y) && x<8 && y<8){
    			OPI.append(x,y);
    			x++;
    			i++;
    		}
    		if(ocupada(x, y) && this.tabuleiro.getPeca(x, y)!=this.time) OPI.append(x, i);

    		// direita baixo
    		x=i+1;
    		y=j-1;
    		while(!ocupada(x, y) && x<8 && y>0){
    			OPI.append(x,y);
    			x++;
    			i--;

    		}
    		if(ocupada(x, y) && this.tabuleiro.getPeca(x, y)!=this.time) OPI.append(x, i);


    		// esquerda cima
    		x=i-1;
    		y=j+1;
    		while(!ocupada(x, y) && x>0 && y<8){
    			OPI.append(x,y);
    			x--;
    			i++;

    		}
    		if(ocupada(x, y) && this.tabuleiro.getPeca(x, y)!=this.time) OPI.append(x, i);


    		//esquerda baixo
    		x=i-1;
    		y=j-1;
    		while(!ocupada(x, y) && x>0 && y<8){
    			OPI.append(x,y);
    			x--;
    			i--;

    		}
    		if(ocupada(x, y) && this.tabuleiro.getPeca(x, y)!=this.time) OPI.append(x, i);

    	}

## Cavalo **extend** Peca

    ## Atributos

    ## Metodos
    	-
