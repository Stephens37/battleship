jest.mock('./gameboard')
const gameboard = require('./gameboard')
let carrier = { shipLength: 5, timesHit: 4, sunk: false }
let missed = []

const board = gameboard(carrier, 1, 1)
/* const corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }] */

describe('gameboard functionality', () => {
  test('xcor', () => {
    expect(board.xCor).toBe(1)
  })
})

test('place ships', () => {
  const corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }]
  const coordinates = {xCor: 1, yCor: 1}
  expect(board.placement(coordinates)).toStrictEqual(corArr)
})

test.skip('placement error', () => {
  const corArr = [{ xCor: 8, yCor: 1 }, { xCor: 9, yCor: 1 }, { xCor: 10, yCor: 1 }, { xCor: 11, yCor: 1 }, { xCor: 12, yCor: 1 }]
  expect(() => { board.placement() }).toThrow('Error: ship will not fit where you wish to place it.')
})

test('receive attack', () => {
  const coordinates = { xCor: 1, yCor: 1 }
  expect(board.receiveAttack(coordinates, carrier.timesHit, carrier.sunk)).toBe(5)
})

test.skip('sunk ship', () => {
  const coordinates = { xCor: 5, yCor: 1 }
  board.receiveAttack(coordinates) // Hit the ship enough times to sink it
  expect(board.shipType.sunk).toBe(true)
})

test('missed attack', () => {
  const coordinates = { xCor: 6, yCor: 6 } // Coordinates that are not part of any ship
  expect(board.receiveAttack(coordinates)).toBe([{ xCor: 6, yCor: 6 }])
})
