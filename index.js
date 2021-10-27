const inquirer = require("inquirer");
const mysql = require("mysql2");
// const consoleTable = require("console.table");

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
        mesage: "CHOOSE OPTION BELOW",
        name: "options",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "Add New Employees",
          "Add New Roles",
          "Add New Departments",
          "Delete Roles",
          "Delete Employees",
          "Delete Departments",
          "Update Employees Roles",
          "Update Employees Manager",
          "Exit",
        ],
      },
    ])

    .then((answers) => {
      switch (answers.options) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Departments":
          viewDepartments();
          break;
        case "Add New Employees":
          addEmployees();
          break;
        case "Add New Roles":
          addRoles();
          break;
        case "Add New Departments":
          addDepartments();
          break;
        case "Delete Employees":
          deleteEmployees();
          break;
        case "Delete Roles":
          deleteRoles();
        break;
        case "Delete Departments":
          deleteDepartments();
          break;
        case "Update Employees Roles":
          updateEmployeesRoles();
          break;
        case "Update Employees Manager":
          updateEmployeesManager();
          break;
        case "Exit":
          db.end();
          break;
        default:
          console.log("Inquirer is firing");
      }
    });
};

function viewEmployees(){
    db.query('SELECT employees.id, employees.first_name, employees.last_name, e.first_name as manager_first_name, e.last_name AS manager_last_name, title, salary, department.name AS department_name FROM employee JOIN employees_role ON employees.id = employees_role.id JOIN employees e ON e.id = employees.manager_id JOIN department WHERE departments_id = departments.id ORDER BY employees.id',
    (err,res)=>{  return res ? console.table(res)
        :console.log(err,'EMPLOYEES IS BROKEN')
    }
    )
};
function viewRoles(){
    db.query('SELECT employees.id, employees.first_name, employees.last_name, e.first_name as manager_first_name, e.last_name AS manager_last_name, title, salary, department.name AS department_name FROM employee JOIN employees_role ON employees.id = employees_role.id JOIN employees e ON e.id = employees.manager_id JOIN department WHERE departments_id = departments.id ORDER BY employees.id',
    (err,res)=>{  return res ? console.table(res)
        :console.log(err,'ROLES IS BROKEN')
}
)
};
function viewDepartments(){
    db.query('SELECT * FROM my_business.departments;',
    (err,res)=>{  return res ? console.table(res)
        :console.log(err,'DEPARTMENTS IS BROKEN')
    }
    )
}
// function addEmployees()
// function addRoles()
// function addDepartments()
// function deleteEmployees()
// function deleteRoles()
// function deleteDepartments()
// function updateEmployeesRoles()
// function updateEmployeesManager()


init();