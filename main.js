    

(function(){
    self.Board = function (width, height) {
		this.width = width;
		this.height = height;
		this.playing = true;
        this.game_over = false;
		this.bars = [];
		this.ball = null;
		
	}
    self.Board.prototype = {
		get elements() {
			var elements = this.bars;                                               //cambia en el futuro
			elements.push(this.ball);
			return elements;
		}
	}
})();

(function () {
	self.Bar = function (x, y, width, height, board) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.board = board;
		this.board.bars.push(this); // Se agrega la barra al tablero
		this.kind = 'rectangle'; // Se define el tipo de elemento
		
	}
	self.Bar.prototype = {
		down: function () {
          this.y +=speed;                                                                //pendiente
		},
		up: function () {                                                               //pendiente
			this.y-speed;
		},
		
	}
})();

(function () {
	self.BoardView = function (canvas, board) {
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board; // Se asigna el tablero
		this.ctx = this.canvas.getContext('2d'); // Obtiene el contexto del canvas
		//this.canvas.style.background = '#955227';
	}
      
    self.BoardView.prototype = {
        
        draw: function () {
			for (var i = this.board.elements.length - 1; i >= 0; i--) { // Se recorre el elemento para dibujarlo
				var el = this.board.elements[i];
				

				draw(this.ctx, el);
			}
		},

    }

    // Se encarga de dibujar el element elegido
	function draw(ctx, element) {
    
        if(element !== null && element.hasOwnProperty("kind")){
         switch (element.kind) {
			case 'rectangle':
				ctx.fillRect(element.x, element.y, element.width, element.height);
				break;
			
		}   
        }
		
	}

})();


window.addEventListener('load', main)

    function main (){
        var board = new Board(800, 400); 
        // x, y, width, height
        var bar = new Bar(0, 150, 20, 100, board); // Se crea la barra1
        var bar_2 = new Bar(780, 150, 20, 100, board); // Se crea la barra2
        var canvas = document.getElementById('canvas'); // Se obtiene el canvas desde el DOM
        var board_view = new BoardView(canvas, board); // Se crea el tablero
        //var ball = new Ball(400, 200, 10, board); // Se crea la pelota 
        console.log(Board);
        board_view.draw();
    }