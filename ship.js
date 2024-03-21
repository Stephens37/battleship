function shipProperties (shipLength, timesHit) {
  return {
    shipLength,
    timesHit,
    sunk,
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

module.exports = shipProperties(5, 5)
module.exports = shipProperties.hit()
module.exports = shipProperties.isSunk()
