/*
jest.mock('./player')
const player = require('./player')
jest.mock('./gameboard')
const gameboard = require('./gameboard')

let carrier = { shipLength: 5, timesHit: 3, sunk: false }
const board = gameboard(carrier, 1, 1)
let testPlayer = player(carrier, 1, 1)

describe('player functionality', () => {
  test('try again', () => {
    expect(testPlayer.squareChosen(1, 1)).toEqual('Choose again')
  })
  test('player chose', () => {
    expect(testPlayer.squareChosen({ xCor: 1, yCor: 1 })).toEqual(4)
  })
  test('computer chose', () => {
    expect(testPlayer.computerChoice()).toBe(true)
  })
})
*/
