
const assertFuzzyEquals = (actual, expected, msg) => Math.abs(actual - expected) <= 1e-2;
  // Test.expect(inrange, msg || "abs(actual - expected) must be <= 1e-2. Expected was " + expected.toExponential(2) +", but got " + actual.toExponential(2));

module.exports = { assertFuzzyEquals };
