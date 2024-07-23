function ship (shipName, shipLength, timesHit, sunk) {
  return {
    shipName: shipName,
    shipLength: shipLength,
    timesHit: timesHit,
    sunk: sunk,
    corArr: [],
    hit: function () {
      this.timesHit++
      console.log(this.timesHit)
      return this.timesHit
    },
    isSunk: function () {
      if (this.shipLength === this.timesHit) {
        this.sunk = true
        console.log(this.sunk)
        return this.sunk
      }
    }
  }
}

module.exports = ship
