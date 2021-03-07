const Engineer = require('../lib/Engineer');

const expectedGithub = 'jrdernth';
const engineer = new Engineer(1, 'John', 'email@gmail.com', expectedGithub);

describe('Engineer', () => {

  test('Constructor should instantiate an Engineer object', () => {
    const expectedType = 'object';
    expect(typeof(engineer)).toBe(expectedType);
  });

  test('Constructor should assign github user name via passed in argument', () => {
    expect(engineer.github).toBe(expectedGithub);
  });

  test('getGithub() should get the github user name of the Engineer', () => {
    expect(engineer.getGitHub()).toBe(expectedGithub);
  });

  test('getRole() should get the role of the Engineer', () => {
    const expectedRole = 'Engineer';
    expect(engineer.getRole()).toBe(expectedRole);
  });

});
