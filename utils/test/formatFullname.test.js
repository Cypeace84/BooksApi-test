const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error while "fullName" arg is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if the format of "fullName" is incorrect', () => {
    expect(formatFullname('Jon Doe Test')).to.equal('Error');
    expect(formatFullname('Jon')).to.equal('Error');
  });
  it('should return the correct formatted fullName when provided with valid args', () => {
    expect(formatFullname('jOhN DoE')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('jOhN dOE')).to.equal('John Doe');
  });
});
