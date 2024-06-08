

const gameboard = require('../src/gameboard.js')
let carrier = { shipLength: 5, timesHit: 3, sunk: false }
let sunkArr = ['s', 'u', 'n', 'k']

const board = gameboard(1, 1, carrier)
board.shipType = carrier
let missed = board.missed
/* const corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }] */

describe('gameboard functionality', () => {
  test('place ships', () => {
    let corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }]
    const coordinates = { xCor: 1, yCor: 1 }
    expect(board.placement(coordinates)).toStrictEqual(corArr)
  })

  test.skip('placement error', () => {
    const coordinates = { xCor: 8, yCor: 1 }
    expect(() => board.placement(coordinates)).toThrow(new Error('Error: ship will not fit where you wish to place it.'))
  })

  test('receive attack', () => {
    const coordinates = { xCor: 1, yCor: 1 }
    expect(board.receiveAttack(coordinates)).toBe(1)
  })

  test('try again', () => {
    const coordinates = { xCor: 1, yCor: 1 }
    const missed = [{xCor: 1, yCor: 1}]
    expect(board.receiveAttack(coordinates)).toBe('Choose again')
  })

  // above test is returning true because that is the answer to the computerChoice test and this test is skipping for some reason

  test.skip('sunk ship', () => {
    const coordinates = { xCor: 4, yCor: 1 }
    let carrier = { shipLength: 5, timesHit: 4, sunk: false }
    expect(board.receiveAttack(coordinates)).toBe(true)
  })

  test.skip('game over', () => {
    const coordinates = { xCor: 5, yCor: 1 }
    let corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }]
    expect(board.receiveAttack(coordinates)).toBe('Game Over')
  })

  test.skip('missed attack', () => {
    const coordinates = { xCor: 6, yCor: 6 }
    expect(board.receiveAttack(coordinates)).toEqual({ missed: [{ xCor: 6, yCor: 6 }] })
  })

  test('computer chose', () => {
    expect(board.computerChoice()).toBe(true)
  })

/* test.skip('game over', () => {
    sunkArr.length = 4
    const coordinates = { xCor: 5, yCor: 1 }
    expect(board.receiveAttack(coordinates).toStrictEqual('Game Over'))
  })
*/
})
