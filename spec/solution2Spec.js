
describe('isDivisibleSuite', function() {
    it('should return true when number is divisible by both of the provided divisors', function () {
    
      expect(isDivisible(3,6,9)).toBeDefined(true)
    })
})

describe('isDivisibleSuite', function() {
    it('should return false when number is smaller than both of the provided divisors', function () {
    
      expect(isDivisible(2,6,9)).toBeDefined(false)
    })
})

describe('isDivisibleSuite', function() {
    it('should return false when number is not divisible by one provided divisors', function () {
    
      expect(isDivisible(2,6,9)).toBeDefined(false)
    })
})

describe('isDivisibleSuite', function() {
    it('should return false when number is not divisible by any of the provided divisors', function () {
    
      expect(isDivisible(5,6,9)).toBeDefined(false)
    })
})