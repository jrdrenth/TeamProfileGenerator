const Employee = require('../lib/Employee');

describe('Employee', () => {

  const testId = 1;
  const testName = 'John';
  const testEmail = 'email@gmail.com'

  // Create new object to test with
  const employee = new Employee(testId, testName, testEmail);

  describe('Constructor', () => {
    it('should instantiate Employee object and set properties via passed in arguments', () => {
      expect(typeof(employee)).toBe('object');

      // Verify that the new object has the correct property values assigned
      expect(employee).toEqual({ id: testId, name: testName, email: testEmail });
    });
  });

  describe('getId()', () => {
    it('should get the Id of the Employee', () => {
      expect(employee.getId()).toEqual(testId);
    });
  });

  describe('getName()', () => {
    it('should get the name of the Employee', () => {
      expect(employee.getName()).toEqual(testName);
    });
  });

  describe('getEmail()', () => {
    it('should get the email of the Employee', () => {
      expect(employee.getEmail()).toEqual(testEmail);
    });
  });

  describe('getRole()', () => {
    it('should get the role of the Employee', () => {
      const expectedRole = 'Employee';
      expect(employee.getRole()).toEqual(expectedRole);
    });
  });

});
