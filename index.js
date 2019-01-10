// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. 
// For example, produceDrivingRange(10) returns a function
// that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.

function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock); 
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    // if (difference > 0) {
    //   return `within range by ${difference}`
    // } else {
    //   return `${Math.abs(difference)} blocks out of range`
    // }

   return difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`;
  }
}

// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

function produceTipCalculator(integer) {
  return function (fare) {
    return fare * integer 
  }
}

// createDriver is a function that returns a Driver class. 
//The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

function createDriver() {
  let driverId = 0
  return class {
    constructor (name) {
      this.id = ++driverId 
      this.name = name
    }
  }
}