const ship = require("./ship")

ship(carrier)
describe('ship attributes', () => {
  test('hit', () => {
    expect(ship.hit()).toEqual(1)
  })

  test('sunk', () => {
    expect(ship.isSunk()).toBe(true)
  })
})
