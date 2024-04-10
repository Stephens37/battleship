jest.mock('./player')
jest.mock('./gameboard')
const player = require('./player')
const { carrier } = require('./gameboard')

let testPlayer = player(carrier, 1, 1)

describe('player functionality', () => {
  test('try again', () => {
    expect(testPlayer.squareChosen(carrier, 2, 2)).toEqual('Choose again')
  })
  test.skip('player chose', () => {
    expect(testPlayer.squareChosen(1, 1)).toBe(4)
  })
  test('computer chose', () => {
    expect(testPlayer.computerChoice()).toBe(true)
  })
})
