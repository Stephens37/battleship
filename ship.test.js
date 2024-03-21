const shipProperties = require("./ship");

describe('ship attributes', () => {
  test('length, times hit, sunk', () => {
    expect(shipProperties).toEqual({shipLength: 5, timesHit: 0, sunk: false })
  })
})
