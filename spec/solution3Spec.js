describe('solutionSuite', function() {
    it('should return itself when there is only 1 character in the string', function () {
    
      expect(solution("H")).toBe("H")
    })
})

describe('solutionSuite', function() {
    it('should return string reversed when there is mutiple character in the string', function () {
    
      expect(solution("Himanshu")).toBe("uhsnamiH")
    })
})

describe('solutionSuite', function() {
    it('should return empty string when there is no character', function () {
    
      expect(solution("")).toBe("")
    })
})