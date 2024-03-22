const ship = require("./ship")

describe('ship attributes', () => {
  test('length and times hit', () => {
    expect(ship.shipAttributes()).toEqual({ shipLength: 5, timesHit: 4, sunk: false })
  })

  test('hit', () => {
    expect(ship.hit()).toEqual(5)
  })

  test('sunk', () => {
    expect(ship.isSunk()).toBe(true)
  })
})
