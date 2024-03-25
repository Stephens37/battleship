const ship = require("./ship")

describe('ship attributes', () => {
  test('hit', () => {
    expect(ship.hit()).toEqual(5)
  })

  test('sunk', () => {
    expect(ship.isSunk()).toBe(true)
  })
})
