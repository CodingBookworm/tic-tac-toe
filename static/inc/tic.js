const playerFactory = (name, symbol, color) => {
    return({name,symbol,color})
}

const player1 = playerFactory('Player1','X','#33FFBD');
const player2 = playerFactory('Player2','O','#33F4FF');

const win = {
    checkForWin: (board) => {
        //rows
        if (board[0] === board[1] && board[0] === board[2]) {
          return [0,1,2];
        } else if (board[3] === board[4] && board[3] === board[5]) {
          return [3,4,5];
        } else if (board[6] === board[7] && board[6] === board[8]) {
          return [6,7,8];
        } 
        //columns
        else if (board[0] === board[3] && board[0] === board[6]) {
          return [0,3,6];
        } else if (board[1] === board[4] && board[1] === board[7]) {
          return [1,4,7];
        } else if (board[2] === board[5] && board[2] === board[8]) {
          return [2,5,8];
        } 
        //diagonals
        else if (board[0] === board[4] && board[0] === board[8]) {
          return [0,4,8];
        } else if (board[2] === board[4] && board[2] === board[6]) {
          return [2,4,6];
        } else {
          return false;
        }
      },
      win: (winningCombo, winner) =>{
        winningCombo.forEach((id)=>{
            $(`#${id}`).addClass('winner');
            $('.square').off();
        })
        $('.message').text(winner.name.toUpperCase() + " WON!!").css("color", winner.color )
      }
}

const gameBoard = {
    board: Array,
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
}

const game =  {
        currentPlayer: playerFactory,
        turnCount: Number,
        takeTurn: (e) => {
            game.turnCount++;
            gameBoard.markBoard(e,game.currentPlayer);
            let winningCheck = win.checkForWin(gameBoard.board)
            //checkForWin checks all possible combinations and 
            //returns winning combination or false
            if (winningCheck) {
                win.win(winningCheck, game.currentPlayer)
            } else if (game.turnCount === 9){
                $('.message').text("It's a tie!").css("color", "white")
            } else {
                game.changePlayer();
                $('.message').text(`${game.currentPlayer.name}'s turn:`)
                            .css("color", game.currentPlayer.color);

            }
        },
    changePlayer: () =>{
        game.currentPlayer = (game.currentPlayer === player1)? player2 : player1;
        return game.currentPlayer;
    },
    startGame: () =>{
        //clear previous
        $('.square').html('').off();

        gameBoard.board = [0,1,2,3,4,5,6,7,8,9];
        game.currentPlayer = player1;
        game.turnCount = 0;
        $('.message').text(`${game.currentPlayer.name}'s turn:`)
                    .css("color", game.currentPlayer.color);
        $('.square').click((e)=>game.takeTurn(e));
    }

}

