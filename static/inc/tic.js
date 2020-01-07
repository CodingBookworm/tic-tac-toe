const playerFactory = (name, symbol, color) => {
    return({name,symbol,color})
}

const player1 = playerFactory('Player1','X','#33FFBD');
const player2 = playerFactory('Player2','O','#33F4FF');

const gameBoard = {
    board: (function(){return Array(9).fill('')})(),
    makeMark: (currentPlayer) =>{
            const mark = document.createElement('div');
            $(mark).css("color", currentPlayer.color);
            ($(mark)).html(`<span class="mark">${currentPlayer.symbol}</span>`)
            console.log(mark);
            return mark;
    },
    markBoard: (e, currentPlayer)=> {
        $(e.target).append(gameBoard.makeMark(currentPlayer));
        },
}

const game =  {
    playGame: () => {
        let currentPlayer = player1;
        $('.square').click((e)=>gameBoard.markBoard(e,currentPlayer));
        //selectPlayer();

    }

}

game.playGame()

