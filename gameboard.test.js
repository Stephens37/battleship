jest.mock('./gameboard')
const gameboard = require('./gameboard')
let carrier = { shipLength: 5, timesHit: 4, sunk: false }
let missed = []

const board = gameboard(carrier, 1, 1)
/* const corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }] */

describe('gameboard functionality', () => {
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
    expect(board.receiveAttack(coordinates, carrier.timesHit, carrier.sunk)).toBe(5)
  })

  test('sunk ship', () => {
    const coordinates = { xCor: 4, yCor: 1 }
    expect(board.receiveAttack(coordinates, carrier.timesHit, carrier.sunk)).toBe(true)
  })

  test('missed attack', () => {
    const coordinates = { xCor: 6, yCor: 6 }
    expect(board.receiveAttack(coordinates)).toEqual({ missed: [{ xCor: 6, yCor: 6 }] })
  })
})
