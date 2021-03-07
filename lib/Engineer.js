const Employee = require('./Employee');

class Engineer extends Employee {

  constructor(newId, newName, newEmail, newGithub) {
    super(newId, newName, newEmail);
    this.github = newGithub;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }

}


module.exports = Engineer;