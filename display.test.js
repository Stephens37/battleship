const display = require('./display')

describe('grid display', () => {
  test('p coordinate array', () => {
    expect(display.assignPCor().playSqArr[0]).toEqual({ xCor: 1, yCor: 1 })
  })
  test('c coordinate array', () => {
    expect(display.assignCCor().compSqArr[0]).toEqual({ xCor: 1, yCor: 1 })
  })
})