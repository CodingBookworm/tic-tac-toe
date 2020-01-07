const playerFactory = (name, symbol, color) => {
    return({name,symbol,color})
}

const player1 = playerFactory('Player1','X','#33FFBD');
const player2 = playerFactory('Player2','O','#33F4FF');

// const gameBoard = {
//     board = Array(9).fill(''),
//     }

const game = () => {
    let board = Array(9).fill('');
    let currentPlayer = player1;

    const playGame = () => {
        selectPlayer();

    }

}
let currentPlayer = player1;
function makeMark(currentPlayer){
    const mark = document.createElement('div');
    $(mark).css("color", currentPlayer.color);
    ($(mark)).html(`<span class="mark">${currentPlayer.symbol}</span>`)
    console.log(mark);
    return mark;
}
let board = Array(9).fill('');
function markBoard() {
    console.log(this);
    $(this).append(makeMark(currentPlayer));


}
$('.square').click(markBoard);