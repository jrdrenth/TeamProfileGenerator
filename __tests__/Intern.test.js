const Intern = require('../lib/Intern');

const expectedSchool = 'CodingBootCamp';
const intern = new Intern(1, 'John', 'email@gmail.com', expectedSchool);

describe('Intern', () => {

  test('Constructor should instantiate an Intern object', () => {
    const expectedType = 'object';
    expect(typeof(intern)).toBe(expectedType);
  });

  test('Constructor should assign the school via passed in argument', () => {
    expect(intern.school).toBe(expectedSchool);
  });

  test('getSchool() should get the school of the Intern', () => {
    expect(intern.getSchool()).toBe(expectedSchool);
  });

  test('getRole() should get the role of the Intern', () => {
    const expectedRole = 'Intern';
    expect(intern.getRole()).toBe(expectedRole);
  });

});
