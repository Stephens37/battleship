function ship (shipName, shipLength, timesHit, sunk) {
  return {
    shipName: shipName,
    shipLength: shipLength,
    timesHit: timesHit,
    sunk: sunk,
    corArr: [],
    hit: function () {
      this.timesHit++
      return this.timesHit
    },
    isSunk: function () {
      if (this.shipLength === this.timesHit) {
        this.sunk = true
        return this.sunk
      }
    }
  }
}

module.exports = ship
