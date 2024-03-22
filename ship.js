function ship (shipLength, timesHit, sunk) {
  function shipAttributes() {
    return {
      shipLength,
      timesHit,
      sunk
    }
  }
  function hit () {
    timesHit += 1
    return timesHit
  }
  function isSunk () {
    if (shipLength === timesHit) {
      sunk = true
      return sunk
    }
  }
  return { shipAttributes, hit, isSunk }
}

module.exports = ship(5, 4, false)

/*

*/
