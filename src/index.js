import './style.css';
// все компоненты
const game = document.querySelector(".game");
const indicatorMove = document.querySelector(".current-move")

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
};
// обходим все элементы
state.squares.forEach(square => {
  const div = document.createElement("div");
  div.classList.add("square");
  div.textContent = square.text;
  game.append(div);
  div.addEventListener('click', ()=>{
    if (square.isClicked === false){
      square.isClicked = true;
      div.textContent = state.currentMove;

      // изменение хода
      state.currentMove = state.currentMove === 'X' ? 'O' : 'X';


      indicatorMove.textContent = state.currentMove;
    }
  });
});
