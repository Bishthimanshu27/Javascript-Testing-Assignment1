describe('positiveSumSuite', function() {
       it('should add when numbers are positive', function () {
       
         expect(positiveSum([5,5])).toBe(10)
       })
})

describe('positiveSumSuite', function() {
    it('should not be included as part of the sum when numbers are negative', function () {
    
      expect(positiveSum([-5,5])).not.toBe(10)
    })
})

describe('positiveSumSuite', function() {
    it('should 0 when array is empty', function () {
    
      expect(positiveSum([])).toBe(0)
    })
})

describe('positiveSumSuite', function() {
    it('should return 0 when numbers are negative', function () {
    
      expect(positiveSum([-5,-5])).toBe(0)
    })
})