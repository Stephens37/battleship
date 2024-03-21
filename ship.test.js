const shipProperties = require("./ship");

describe('ship attributes', () => {
  test('length and times hit', () => {
    expect(shipProperties).toEqual({shipLength: 5, timesHit: 4 })
  })

  test('hit', () => {
    expect(shipProperties.hit()).toEqual(5)
  })

  test('sunk', () => {
    expect(shipProperties.isSunk()).toBeTruthy()
  })
})
