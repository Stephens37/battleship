function ship (shipLength, timesHit, sunk) {
  return {
    shipLength: shipLength,
    timesHit: timesHit,
    sunk: sunk,
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
