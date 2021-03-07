const Employee = require('./Employee');

class Manager extends Employee {

  constructor(newId, newName, newEmail, newOfficeNumber) {
    super(newId, newName, newEmail);
    this.officeNumber = newOfficeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }

}


module.exports = Manager;