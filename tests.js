'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sumOfPrimes.js');

describe("Test that calculates sum of primes", function() {
  it("should give 10, for constant 5", function() {
    assert(
      lib.sumOfPrimes((5)== 10), 'the 5 that 10');
  });
  it("should return false, for -5", function() {
    assert(
      lib.sumOfPrimes((-5)==false, 'undefined'));
  });
  it("should give 17, for constant 7", function() {
    assert(
      lib.sumOfPrimes((7)==17));
  });
  it("should give 42, for constant 13", function() {
    assert(
      lib.sumOfPrimes((13)== 42));
  });
  it("should give 10, for constant 5", function() {
    assert(
      lib.sumOfPrimes((5)== 10), 'the 5 that 10');
  });
  it("should return undefined for string, 'a is for apple'", function() {
    assert(
      lib.sumOfPrimes(('a is for apple')==true), 'undefined');
  });
  it("should give 17, for constant 7", function() {
    assert(
      lib.sumOfPrimes((23)==101));
  });
  it("should give 42, for constant 13", function() {
    assert(
      lib.sumOfPrimes((13)== 42));
  });
  it("should not return for str, 'Ada is five", function() {
    assert(
      lib.sumOfPrimes(('Ada is five')== false), 'undefined');
  });
  it("should return false, for -29", function() {
    assert(
      lib.sumOfPrimes((-29)==false, 'undefined'));
  });
  it("should return undefined for str, 'food is good'", function() {
    assert(
      lib.sumOfPrimes(('food is good')==false, 'undefined'));
  });
  it("should give 59, for constant 17", function() {
    assert(
      lib.sumOfPrimes((17)== 59));
  });
});
