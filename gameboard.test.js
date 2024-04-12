jest.mock('./gameboard')
const gameboard = require('./gameboard')
let carrier = { shipLength: 5, timesHit: 3, sunk: false }
let missed = []
let sunkArr = ['s', 'u', 'n', 'k']

const board = gameboard(carrier, 1, 1)
/* const corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }] */

describe.skip('gameboard functionality', () => {
  test('place ships', () => {
    let corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }]
    const coordinates = { xCor: 1, yCor: 1 }
    expect(board.placement(coordinates)).toStrictEqual(corArr)
  })

  test('placement error', () => {
    const coordinates = { xCor: 8, yCor: 1 }
    expect(() => board.placement(coordinates)).toThrow(new Error('Error: ship will not fit where you wish to place it.'))
  })

  test('receive attack', () => {
    const coordinates = { xCor: 1, yCor: 1 }
    expect(board.receiveAttack(coordinates, carrier.timesHit, carrier.sunk)).toBe(4)
  })

  test.skip('sunk ship', () => {
    const coordinates = { xCor: 4, yCor: 1 }
    let carrier = { shipLength: 5, timesHit: 4, sunk: false }
    expect(board.receiveAttack(coordinates, carrier.timesHit, carrier.sunk)).toBe(true)
  })

  test.skip('game over', () => {
    const coordinates = { xCor: 5, yCor: 1 }
    let corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }]
    expect(board.receiveAttack(coordinates)).toBe('Game Over')
  })

  test('missed attack', () => {
    const coordinates = { xCor: 6, yCor: 6 }
    // expect(board.receiveAttack(coordinates)).toEqual({ missed: [{ xCor: 6, yCor: 6 }] })
    expect(board.missed.length).toEqual(1)
  })

/* test.skip('game over', () => {
    sunkArr.length = 4
    const coordinates = { xCor: 5, yCor: 1 }
    expect(board.receiveAttack(coordinates).toStrictEqual('Game Over'))
  })
*/
})
