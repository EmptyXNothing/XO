import './style.css';
// все компоненты
const game = document.querySelector(".game");
const indicatorMove = document.querySelector(".current-move");

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

const combo = [
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
  for (let comb of combo){
    let count = 0;
    if (squares[comb[0]].textContent === state.currentMove){
      count+=1;
    }
    if (squares[comb[1]].textContent === state.currentMove){
      count+=1;
    }
    if (squares[comb[2]].textContent === state.currentMove){
      count+=1;
    }
    if (count === 3){
      return true;
    }
  };
  return false;
};
 

// обходим все элементы
state.squares.forEach(square => {
  const div = document.createElement("div");
  div.classList.add("square");
  div.textContent = square.text;
  game.append(div);
  div.addEventListener('click', ()=>{
    if (square.isClicked === false && state.status === 'game'){
      square.isClicked = true;
      div.textContent = state.currentMove;
      if (isWin()){
        state.status = 'finish'
        console.log('Победа')
      };
      // изменение хода
      state.currentMove = state.currentMove === 'X' ? 'O' : 'X';
      indicatorMove.textContent = state.currentMove;
    }
  });
});