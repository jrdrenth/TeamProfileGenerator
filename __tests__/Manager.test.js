const Manager = require('../lib/Manager');

const expectedOfficeNumber = 101;
const manager = new Manager(1, 'John', 'email@gmail.com', expectedOfficeNumber);

describe('Manager', () => {

  test('Constructor should instantiate a Manager object', () => {
    const expectedType = 'object';
    expect(typeof(manager)).toBe(expectedType);
  });

  test('Constructor should assign office number via passed in argument', () => {
    expect(manager.officeNumber).toBe(expectedOfficeNumber);
  });

  test('getOffice() should get the office number of the Manager', () => {
    expect(manager.getOfficeNumber()).toBe(expectedOfficeNumber);
  });

  test('getRole() should get the role of the Manager', () => {
    const expectedRole = 'Manager';
    expect(manager.getRole()).toBe(expectedRole);
  });

});
