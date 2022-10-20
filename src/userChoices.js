const {
    addDepartmentPrompt,
    addRolePrompt,
    addEmployeePrompt,
    updateRolePrompt
  } = require('./prompts');
  require('console.table');
  const  {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    newDepartment,
    getDepartmentId,
    newRole,
    getRoleId,
    getEmployeeId,
    newEmployee,
    updateRole
  } = require('./queries');
  
  async function viewDepartments() {
    // Info from database.
    const info = await getAllDepartments();
  
    // Populate values with id and names from database.
    let values = []
    info[0].forEach(column => {
      values.push([column.id, column.name]);
    });
  
    // Format table output with column names and values.
    console.table(['ID', 'Name'], values);
  
    return;
  };
  
  async function viewRoles() {
    const info = await getAllRoles();
  
    let values = []
    info[0].forEach(column => {
      values.push([column.id, column.title, column.salary, column.name]);
    });
  
    console.table(['ID', 'Title', 'Salary', 'Department'], values);
  
    return;
  };
  
  async function viewEmployees() {
    const info = await getAllEmployees();
  
    let values = []
    info[0].forEach(column => {
      values.push([column.id, column.first_name, column.last_name, column.title, column.department, column.manager])
    });
  
    console.table(['ID', 'First Name', 'Last Name', 'Title', 'Department', 'Manager'], values);
  
    return;
  };
  
  async function addDepartment() {
    const choice = await addDepartmentPrompt();
    await newDepartment(choice.department);
    console.log(`Added ${choice.department} to the database`);
  
    return;
  };
  
  async function addRole() {
    // User choices for new role.
    const choice = await addRolePrompt();
  
    // Finds department ID by querying database.
    let id = await getDepartmentId(choice.roleDepartment);
    id = id[0][0].id;
  
    // Adds role to database.
    await newRole(choice.roleName, choice.roleSalary, id);
  
    console.log(`Added ${choice.roleName} to the database`);
  
    return;
  };
  
  async function addEmployee() {
    const choice = await addEmployeePrompt();
  
    // Query db for id associated with role.
    let roleId = await getRoleId(choice.employeeRole);
    roleId = roleId[0][0].id;
  
    // Query db for id associated with manager.
    let managerId;
    if (choice.employeeManager === 'None') {
      managerId = false;
    } else {
      managerId = await getEmployeeId(choice.employeeManager);
      managerId = managerId[0][0].id;
    }
  
    await newEmployee(choice.employeeFirstName, choice.employeeLastName, roleId, managerId)
  
    console.log(`Added ${choice.employeeFirstName} ${choice.employeeLastName} to the database`);
  
    return;
  };
  
  async function updateEmployeeRole() {
    const choice = await updateRolePrompt();
  
    let employeeId = await getEmployeeId(choice.employee);
    employeeId = employeeId[0][0].id;
    let roleId = await getRoleId(choice.employeeRole);
    roleId = roleId[0][0].id;
  
    await updateRole(roleId, employeeId);
  
    console.log(`Updated the role of ${choice.employee}`);
  
    return;
  };
  
  module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
  };