const playerFactory = (name, symbol, color) => {
    return({name,symbol,color})
}

const player1 = playerFactory('Player1','X','#33FFBD');
const player2 = playerFactory('Player2','O','#33F4FF');

const gameBoard = {
    board: (function(){return [0,1,2,3,4,5,6,7,8,9]})(),
    makeMark: (currentPlayer) =>{
            const mark = document.createElement('div');
            $(mark).css("color", currentPlayer.color);
            ($(mark)).html(`<span class="mark">${currentPlayer.symbol}</span>`);
            return mark;
    },
    markBoard: (e, currentPlayer)=> {
        $(e.target).append(gameBoard.makeMark(currentPlayer));
        gameBoard.board[e.target.id]= currentPlayer.symbol;
        $(e.target).off();
        },
    checkForWin: (board) => {
        //check columns
        if (((board[0] === board[3] && board[0] === board[6]) ||
            (board[1] === board[4] && board[1] === board[7]) ||
            (board[2] === board[5] && board[2] === board[8]))) {
                return true;
            };
        //check rows
        if ((board[0] === board[1] && board[0] === board[2]) ||
            (board[3] === board[4] && board[3] === board[5]) ||
            (board[6] === board[7] && board[6] === board[8])) {
                return true;
            };
        //check diagonals
        if ((board[0] === board[4] && board[0] === board[8]) ||
            (board[2] === board[4] && board[2] === board[6])) {
                return true;
        };
        return false;
   },
}

const game =  {
        //a turn will automatically switch the player so assign it to player2
        currentPlayer: (function(){return player2})(),
        takeTurn: (e) => {
        gameBoard.markBoard(e,game.changePlayer());
        if (gameBoard.checkForWin(gameBoard.board)) {
            alert ("WIN")
        }
        //selectPlayer();
    },
    changePlayer: () =>{
        game.currentPlayer = (game.currentPlayer === player1)? player2 : player1;
        return game.currentPlayer;
    }

}

let currentPlayer = player1;
$('.square').click((e)=>game.takeTurn(e));

