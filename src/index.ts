import Snake from './moduls/Snake'
import Food from './moduls/Food'
import ScorePanel from './moduls/ScorePanel'
import './style/index.less'

let snake = new Snake()
let food = new Food()
let scorePanel = new ScorePanel()
let goto = ''
let gameover = document.getElementById('gameover')!

document.addEventListener('keydown', keydownHandler.bind(this))

let time =setInterval(function () {
  if (goto == '') {
    return
  } else {
    if(snake.run(goto)){
      clearInterval(time)
      gameover.style.display='block'
    }
    
    if (snake.X == food.X && snake.Y == food.Y) {
      snake.add()
      food.change(snake.getin())
      scorePanel.addScore();
    }
  }
}, 120)

function keydownHandler(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
    case 'ArrowDown':
    case 's':
    case 'ArrowLeft':
    case 'a':
    case 'ArrowRight':
    case 'd':
      goto = event.key
      break
  }
}
