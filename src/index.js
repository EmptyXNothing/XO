import './style.css';
// все компоненты
const game = document.querySelector(".game");
const indicatorMove = document.querySelector(".current-move");
const button = document.createElement('button');
button.addEventListener('click', () => createSquares());
button.classList.add('btn')


const createSquares = () => {
  state.currentMove = 'X'
  indicatorMove.textContent = state.currentMove;
  state.status = 'game'
  game.innerHTML = ''
  state.squares.forEach(square => {
    const div = document.createElement("div");
    div.classList.add("square");
    div.textContent = square.text;
    game.append(div);
  })
}

// состояние сайта
const state = {
  squares: [
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
    { text: '', isClicked: false },
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

// const isWin = () => {
//   const squares = document.querySelectorAll('.square');
//   for (let comb of combo){
//     let count = 0;
//     if (squares[comb[0]].textContent === state.currentMove){
//       count+=1;
//     }
//     if (squares[comb[1]].textContent === state.currentMove){
//       count+=1;
//     }
//     if (squares[comb[2]].textContent === state.currentMove){
//       count+=1;
//     }
//     if (count === 3){
//       return true;
//     }
//   };
//   return false;
// };


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

const renderWin = () => {
  indicatorMove.textContent = 'Игра окончена'
  game.innerHTML = ''
  state.status = 'finish'
  const span = document.createElement('span')
  span.textContent = 'Победа ' + state.currentMove
  game.append(span)
  // game.style.display = 'flex'
  // game.style.background = 'white'
  // game.style.justifyContent = 'center'
  // game.style.border = 'none'
  // game.style.alignItems = 'center'
  span.style.fontSize = '32px'
  game.append(button)
  button.textContent = 'Играть снова'
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
// обходим все элементы
// state.squares.forEach(square => {
//   const div = document.createElement("div");
//   div.classList.add("square");
//   div.textContent = square.text;
//   game.append(div);
//   div.addEventListener('click', ()=>{
//     if (square.isClicked === false && state.status === 'game'){
//       square.isClicked = true;
//       div.textContent = state.currentMove;
//       if (isWin()){
//         game.innerHTML = ''
//         state.status = 'finish'
//         const span = document.createElement('span')
//         span.textContent = 'Победа ' + state.currentMove
//         game.append(span)
//         game.style.display = 'flex'
//         game.style.background = 'white'
//         game.style.justifyContent = 'center'
//         game.style.border = 'none'
//         game.style.alignItems = 'center'
//         span.style.fontSize = '32px'
//         const button = document.createElement('button')
//         game.append(button)
//         button.textContent = 'Играть снова'
//         game.style.flexDirection = 'column'
//         button.style.padding = '10px'
//         button.style.fontSize = '18px'
        
//       };
//       // изменение хода
//       state.currentMove = state.currentMove === 'X' ? 'O' : 'X';
//       indicatorMove.textContent = state.currentMove;
//     }
//   });
// });