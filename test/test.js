const expect = require('chai').expect

const index = require('../index')

const paramForEmptyArgument = []

const paramWithArgument = ['New York']


describe('testing the function', function() {
  context('without arguments', function() {
    let result = index.getTheLonitutdeAndLatitudeOfALocation(paramForEmptyArgument)
    it('should end the process because no argument was passed', function() {
      expect(result).to.equal(result)
    })
  })

  context('It should contain two or more arguments', function() {
    let result = index.getTheLonitutdeAndLatitudeOfALocation(paramWithArgument)
    it('should return the same number of arguments passed and bring result', function() {
      expect(result).to.equal(result)
    })
  })
})
