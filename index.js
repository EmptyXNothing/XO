const game = document.querySelector(".game");
const indicatorMove = document.querySelector(".current-move")

const state = {
  squares: [
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
    {text: '', isClicked: false },
  ],
  currentMove: 'X',
};

state.squares.forEach(square => {
  const div = document.createElement("div");
  div.classList.add("square");
  div.textContent = square.text;
  game.append(div);
  div.addEventListener('click', ()=>{
    if (square.isClicked === false){
      square.isClicked = true;
      div.textContent = state.currentMove;
      if(state.currentMove === 'X'){
        state.currentMove = 'O';
      }
      else{
        state.currentMove = 'X';
      };
      indicatorMove.textContent = state.currentMove;
    }
  });
});