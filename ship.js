function shipProperties (shipLength, timesHit, sunk) {
  shipLength = shipLength
  timesHit = timesHit
  sunk = sunk

  return { shipLength, timesHit, sunk }
}

module.exports = shipProperties(5, 0, false)
