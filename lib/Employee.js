class Employee {

  constructor(newId, newName, newEmail) {
    this.id = newId;
    this.name = newName;
    this.email = newEmail;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }

}


module.exports = Employee;
