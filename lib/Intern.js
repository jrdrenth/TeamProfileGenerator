const Employee = require('./Employee');

class Intern extends Employee {

  constructor(newId, newName, newEmail, newSchool) {
    super(newId, newName, newEmail);
    this.school = newSchool;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }

}


module.exports = { Intern: Intern };