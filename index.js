const game = document.querySelector(".game")

for (let i = 0; i < 9; i += 1){
    const square = document.createElement("div")
    square.classList.add("square")
    game.append(square)
}