    

(function(){
    self.Board = function (width, height) {
		this.width = width;
		this.height = height;
		this.game_over = false;
		this.bars = [];
		this.ball = null;
		this.playing = true;
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
	self.BoardView = function (canvas, board) {
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board; // Se asigna el tablero
		this.ctx = this.canvas.getContext('2d'); // Obtiene el contexto del canvas
		this.canvas.style.background = '#955227';
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
        var ball = new Ball(400, 200, 10, board); // Se crea la pelota 
    }