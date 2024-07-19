function ship (shipName, shipLength, timesHit, sunk) {
  return {
    shipName: shipName,
    shipLength: shipLength,
    timesHit: timesHit,
    sunk: sunk,
    corArr: [],
    hit: function () {
      timesHit += 1
      return timesHit
    },
    isSunk: function () {
      if (shipLength === timesHit) {
        sunk = true
        return sunk
      }
    }
  }
}

module.exports = ship(5, 4, false)

/*

*/
