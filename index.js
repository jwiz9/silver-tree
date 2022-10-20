const {optionsPrompt} = require('./src/prompts');
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
} = require('./src/userChoices');

async function init() {
  const userChoice = await optionsPrompt();

  switch (userChoice.choice) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View all roles':
      await viewRoles();
      break;
    case 'View all employees':
      await viewEmployees();
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    // Default option is to exit program
    default:
      console.log('Exiting silver_db database!');
      return process.exit();
  };

  return init();
}

init();