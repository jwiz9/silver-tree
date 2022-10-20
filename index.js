let initialPrompt = require("./src/js/questions");
let {prompt} = require("inquirer");
const {viewAllDepartments, viewAllRoles, viewAllEmployees, addsDepartment, addsRole, addsEmployee, updatesEmployeeRole, exit} = require("./src/js/answers");


const init = async () => {
    while (true) {
        let {trackerOptions} = await prompt(initialPrompt);

        if (trackerOptions === "View all departments") {
            await viewAllDepartments();
        }
        else if (trackerOptions === "View all roles") {
            await viewAllRoles();
        }
        else if (trackerOptions === "View all employees") {
            await viewAllEmployees();
        }
        else if (trackerOptions === "Add a department") {
            await addsDepartment();
        }
        else if (trackerOptions === "Add a role") {
            await addsRole();
        }
        else if (trackerOptions === "Add an employee") {
            await addsEmployee();
        }
        else if (trackerOptions === "Update an employee role") {
            await updatesEmployeeRole();
        }
        else {
            let decision = await exit();
            if (decision) process.exit();
            init();
        }
    }
} 
init();