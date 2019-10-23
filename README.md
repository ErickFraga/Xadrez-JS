# XADREX 

## Classes:
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
- *void* mover(*int* i, *int*j)
    ```js
   	moverPara(i, j){
		if( podeIr(i, j) && ativo){
			this.Coordeanda.SetCoordenada(i, j);

			if(this.tabuleiro.ocupada(i,j)){
				capturar(this.tabuleiro.getPeca(i,j));

			}
		}
	}
    ```

## Tabuleiro
### Atrbutos
- *int* dimensao;
- *Peca* Pecas\[dimensao, dimensao];
- *Peca* BrancasFora\[];
- *Peca* PretasFora\[];
### Metodos
- *bol* Ocupado(*int* i, *int* j)
- *Peca* getPeca(*int* i, *int* j)

## Peão **extends** Peca
 ### Methodos
- *return* ondePodeIr(){
	```js
	ondePodeIr(){
		this.jogadasPossiveis = new Array();
		if(!this.tabuleiro.ocupado(i+1, j)){
			jogadasPossiveis.append([i+1, j]);
		}
		if(this.tabuleiro.ocupado((i+1, j-1))){
			jogadasPossiveis.append([i+1, j-1]);
		}
		if(this.tabuleiro.ocupado((i+1, j+1))){
			jogadasPossiveis.append([i+1, j+1]);
		}
	}
   ```
  

## Torre **extends** Peca
### Metodos
- *int\[]* ondePodeIr()
	```js
    ondePodeIr(){ 
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
    ```
## Bispo **estends** Peca
### Metodos
- *int* ondePodeIr(){
	```js
	ondePodeIr(){
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
  ```

## Cavalo **extend** Peca
## Metodos
  

