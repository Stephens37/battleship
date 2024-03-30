const gameboard = jest.mock('./gameboard.js')

describe('gameboard functionality', () => {
  test('place ships', () => {
    const corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }]
    expect(gameboard.placement()).toEqual(corArr)
  })

  test('placement error', () => {
    const corArr = [{ xCor: 8, yCor: 1 }, { xCor: 9, yCor: 1 }, { xCor: 10, yCor: 1 }, { xCor: 11, yCor: 1 }, { xCor: 12, yCor: 1 }]
    expect(() => { gameboard.placement() }).toThrow('Error: ship will not fit where you wish to place it.')
  })

  test('receive attack', () => {
    const coordinates = { xCor: 1, yCor: 1 }
    expect(gameboard.receiveAttack(coordinates)).toBe(5)
  })

  test('sunk ship', () => {
    const coordinates = { xCor: 1, yCor: 1 }
    gameboard.receiveAttack(coordinates) // Hit the ship enough times to sink it
    expect(gameboard.sunk).toBe(true)
  })

  test('missed attack', () => {
    const coordinates = { xCor: 6, yCor: 6 } // Coordinates that are not part of any ship
    expect(gameboard.receiveAttack(coordinates)).toEqual([coordinates])
  })
})
