import './style.css';
// все компоненты
const game = document.querySelector(".game");
const indicatorMove = document.querySelector(".current-move");
const button = document.createElement('button');
button.addEventListener('click', () => createSquares());
button.classList.add('btn')


const createSquares = () => {
  game.style.display = 'grid';
  state.currentMove = 'X'
  indicatorMove.textContent = state.currentMove;
  state.status = 'game'
  game.innerHTML = ''
  state.squares.forEach(square => {
    const div = document.createElement("div");
    div.classList.add("square");
    square.item = div;
    game.append(div);
  })
}

// состояние сайта
const state = {
  squares: [
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
    { isClicked: false, item: null },
  ],
  currentMove: 'X',
  status: 'game',
};

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];



const isWin = () => {
  const squares = document.querySelectorAll('.square');
  
  for (const combination of combinations) {
    const squaresCurrentMove = combination.filter(i => squares[i].textContent === state.currentMove);
    console.log(squaresCurrentMove)
    if (squaresCurrentMove.length === 3) {
      return true;
    }
  };
  return false;
}

// const is_draw = () => {

// }

const renderWin = () => {
  indicatorMove.textContent = 'game over'
  game.innerHTML = ''
  state.status = 'finish'
  const span = document.createElement('span')
  span.textContent = 'Win ' + state.currentMove
  game.append(span)
  const div = document.createElement('div');
  div.classList.add('win');
  div.append(span);
  div.append(button);
  span.style.fontSize = '32px'
  game.style.display = 'flex'
  game.append(div);
  button.textContent = 'Retry'
}

game.addEventListener('click', (e) => {
  const square = e.target;
  console.log(e.target)
  if (square.classList[0] === 'square') {
    if (square.textContent === '' && state.status === 'game') {
      square.textContent = state.currentMove;
      if (isWin()) {
        renderWin();
      }
      
      state.currentMove = state.currentMove === 'X' ? 'O' : 'X';
      if (state.status === 'game'){
        indicatorMove.textContent = state.currentMove;
      }
    }
  }
  
});

createSquares();
