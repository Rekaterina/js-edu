/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
  let hours = {
    novice: 1300,
    competent: 800
  }
      if (arguments[1] === true) {
        return Math.ceil(hours.competent/arguments[2][arguments[0]]);
      }
      else {
        return Math.ceil(hours.novice/arguments[2][arguments[0]]);
      }
  };
  