/**
 * @jest-environment jsdom
 */

require('text-encoding').TextEncoder
require('text-encoding').TextDecoder

const { JSDOM } = require('jsdom')

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

const display = require('./display.js')

describe('grid display', () => {
  test('p coordinate array', () => {
    expect(display.assignPCor().playSqArr[0]).toEqual({ xCor: 1, yCor: 1 })
  })
  test('c coordinate array', () => {
    expect(display.assignCCor().compSqArr[0]).toEqual({ xCor: 1, yCor: 1 })
  })
})
