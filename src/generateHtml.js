function createEmployeeCard(employee, faClasses, text) {
  return (
`          <div class="card employee-card">
            <div class="card-header">
              <h2 class="card-title">${employee.getName()}</h2>
              <h3 class="card-title"><i class="${faClasses} mr-2"></i>${employee.getRole()}</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">${text}</li>
              </ul>
            </div>
          </div>`)
}


function createEmployeeCards(employees) {
  const employeeCards = [];

  for (const employee of employees) {
    let employeeCard = null;
    let faClasses = null;
    let text = null;
    switch(employee.getRole()) {
      case 'Manager':
        faClasses = 'fas fa-mug-hot';
        text = `Office number: ${employee.getOfficeNumber()}`;
        employeeCard = createEmployeeCard(employee, faClasses, text);
        break;
      case 'Engineer':
        faClasses = 'fas fa-glasses';
        text = `GitHub: <a href="https://github.com/${employee.getGitHub()}" target="_blank" rel="noopener noreferrer">${employee.getGitHub()}</a>`;
        employeeCard = createEmployeeCard(employee, faClasses, text);
        break;
      case 'Intern':
        faClasses = 'fas fa-user-graduate';
        text = `School: ${employee.getSchool()}`;
        employeeCard = createEmployeeCard(employee, faClasses, text);
        break;
      //default:      
    }

    employeeCards.push(employeeCard);
  }

  const result = employeeCards.join('');
  return result;
}


function generateHtml(employees) {
  return (
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <!-- Font Awesome CSS -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
      integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="style.css" />

    <title>My Team</title>
  </head>

  <body>
    <header class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 employees-heading">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </header>

    <main class="container">
      <div class="row">
        <div class="employee-area col-12 d-flex justify-content-center">
          ${createEmployeeCards(employees)}
        </div>
      </div>
    </main>
  </body>
</html>
`);
};


module.exports = generateHtml;
