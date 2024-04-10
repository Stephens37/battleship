jest.mock('./player')
const player = require('./player')

describe('player functionality', () => {
  test('try again', () => {
    expect(player.squareChosen()).toEqual('Choose again')
  })
  test.skip('player chose', () => {
    expect(player.squareChosen()).toBe(4)
  })
  test('computer chose' () => {
    expect(player.computerChoice()).toBe(true)
  })
})
