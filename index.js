const game = document.querySelector(".game");

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
  ]
}
// for (let i = 0; i < 9; i += 1){
//     const square = document.createElement("div")
//     square.classList.add("square")
//     game.append(square)
// }
state.squares.forEach(square => {
  const div = document.createElement("div");
  div.classList.add("square");
  div.textContent = square.text;
  game.append(div);
})