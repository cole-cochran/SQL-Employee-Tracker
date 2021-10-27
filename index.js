const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "my_business",
  },
  console.log("Connected to the my_business database.")
);
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "CHOOSE OPTION BELOW",
        name: "options",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "Add New Employee",
          "Add New Roles",
          "Add New Department",
          "Delete Roles",
          "Delete Employee",
          "Delete Department",
          "Update Employee Role",
          "Update Employee Manager",
          "Exit",
        ],
      },
    ])

    .then((answers) => {
      switch (answers.options) {
        case "View All Employees":
          viewEmployee();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Departments":
          viewDepartment();
          break;
        case "Add New Employee":
          addEmployee();
          break;
        case "Add New Roles":
          addRole();
          break;
        case "Add New Department":
          addDepartment();
          break;
        case "Delete Employee":
          deleteEmployee();
          break;
        case "Delete Role":
          deleteRole();
        break;
        case "Delete Department":
          deleteDepartment();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Update Employee Manager":
          updateEmployeeManager();
          break;
        case "Exit":
          db.end();
          break;
        default:
          console.log("Inquirer is firing");
      }
    });
}

function viewEmployee()
function viewRoles()
function viewDepartment()
function addEmployee()
function addRole()
function addDepartment()
function deleteEmployee()
function deleteRole()
function deleteDepartment()
function updateEmployeeRole()
function updateEmployeeManager()


init();