/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n < 1) return false;
  if (n < 7) return true; // the ugliest numbers
  let ugly = noPrimesPast5(n); // make it through the gauntlet
  // console.log(n, ugly);
  return ugly;
};

var noPrimesPast5 = (n) => {
  let skips = { 2: 2 };
  let primes = {};
  let factorsHigh = [];
  // let iterations = 0;
  var i = 2;
  while (i <= n) {
    // only need odd numbers, except 2, so we start at 2, then 3 and odds from there
    let skip = skips[i];
    // console.log("current", i, "skip", skip, "skips", skips);
    if (skip) {
      //don't need it since it's a multiple of a prime
      let nextSkipIndex = i + skip;
      let nextSkip = skips[nextSkipIndex];
      delete skips[i];
      while (nextSkip) {
        // console.log("time to really skip", skip, nextSkipIndex, nextSkip);
        skips[nextSkipIndex] = skip;
        skip = nextSkip;
        nextSkipIndex += skip;
        nextSkip = skips[nextSkipIndex];
        // console.log("skipping", i, skip, nextSkipIndex, nextSkip, skips);
      }
      skips[nextSkipIndex] = skip;
      // console.log("done skipping", i, skip, nextSkipIndex, nextSkip, skips);
      i++;
      continue;
    }
    if (!primes[i]) {
      if (n % i == 0 && i >= 7) {
        // factor and prime
        return false;
      }
      primes[i] = i;
      skips[i + i] = i;
      // console.log("adding", primes, skips);
    }
    let high = n / i;
    if (n % i == 0 && i < high && high % 2 != 0) {
      // odd upper factor
      factorsHigh.push(high);
      i++;
      continue;
    }
    if (factorsHigh.length > 0 && i == factorsHigh[factorsHigh.length - 1]) {
      // console.log("shifting", i, factorsHigh);
      if (factorsHigh.length <= 1) {
        return true;
      }
      factorsHigh.pop();
      i = factorsHigh[0];
      continue;
    }
    i++;
    // if (i%10000 == 0)
    //     console.log("normal run", i, factorsHigh);
    // if (iterations == 50) return false;
  }
  // console.log(iterations);
  // console.log(primes);
  return true;
};
