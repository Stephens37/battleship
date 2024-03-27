/*
place ships at certain coordinates by calling the ship() factory function
by calling the ship function the gameboard function will take into account the
length of the ships
will then allow the player to type in starting and ending coordinates
program will then place the ship

receiveAttack() function takes coordinates hit
then determines if part of a ship was present
records these coordinates if missed (will also add color)
if hit then hit function is called

keep track of the missed attacks by colouring the box where the attack was missed

game over screen
*/

const gameboard = require('./gameboard')

describe('gameboard functionality', () => {
  test('place ships', () => {
    expect(gameboard.placement()).toBe({1, 1})
  }
  )
  test('placement error', () => {
    expect(gameboard.placement).toThrow()
  })
  test('receive attack', () => {
    expect(gameboard.receiveAttack()).toBe(true)
  })
  test('missed attack', () => {
    expect(gameboard.receiveAttack()).toBe(false)
  })
  test('game over', () => {
    expect(gameboard.gameOver().toBe(false))
  })
})
