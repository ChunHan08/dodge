function preload() {
  playerImage = loadImage('https://cloud-of5gtw65x-hack-club-bot.vercel.app/0N5uCbDu.png')
  enemyImage = loadImage('https://cloud-4lajub4te-hack-club-bot.vercel.app/0OdL0XPt.png')
}
function setup() {
  createCanvas(250, 250
  -player = createSprite(width/2, height-25, 0, 0);
  +player = createSprite(width / 2, height - 25, 50, 50);
  player.addImage(playerImage)
  -enemy = createSprite(width / 2, 0, 10, 30);
  -enemy = createSprite(width / 2, 0, 10, 30);
  enemy.addImage(enemyImage)
}
function draw() {
  if (isGameOver) {
    gameOver()
  }
  else {
    if (enemy.overlap(player)) {
      isGameOver = true
    }
  }
  if (enemy.overlap(player)) {
    gameOver()
  }
  background(0, 0, 100)
  drawSprites()
 
  if (keyDown(RIGHT_ARROW) && player.posittion.x < width - 25) {
    player.position.x = player.position.x + 1
  }
  
  if (keyDown(LEFT_ARROW) && player.position.x > 25) {
  player.position.x = player.position.x - 1
  }
  enemy.position.y = enemy.position.y + 3

  if (enemy.position.y > height) {
    enemy.position.y = 0
    enemy.position.x = random(5, width - 5)
  }

}
function gameOver() {
  background(0)
  textAlign(CENTER)
  fill('white')
  text('Game Over!', width / 2, height / 2)
  Text('Click anywhere to try again', width / 2, (3 * height) / 4)
}
function mouseClicked() {
  if (isGameOver) {
  isGameOver = false
  player.posistion.x = width / 2
  player.position.y = height - 25
  enemy.position.x = width / 2
  enemy.position.y = 0
  }
}
var player
var playerImage
var enemy
var enemyImage
var isGameOver
