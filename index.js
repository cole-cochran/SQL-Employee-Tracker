const inquirer = require("inquirer");
const mysql = require("mysql2");

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

async function viewEmployees(){
    db.query('SELECT employees.id AS "employees ID", concat(employees.first_name,"  ",employees.last_name ) AS "employees Name" , roles.title AS "Title", roles.salary AS "roles Salary" ,department_name AS "departments Name" ,concat(manager.first_name,"  ",manager.last_name) AS "Manager Name" FROM my_business.employees AS employees LEFT JOIN my_business.employees AS manager ON manager.id=employees.manager_id LEFT JOIN my_business.roles AS roles ON employees.role_id=roles.id LEFT JOIN my_business.departments AS dept ON dept.id = roles.department_id',
    (err,res)=>{  return res ? console.table(res)
        :console.log(err,'EMPLOYEES IS BROKEN')
    }
    )
    init();
};
async function viewRoles(){
    db.query('SELECT roles.title AS "title", roles.salary AS "salary", department_name AS "departments name" FROM roles roles LEFT JOIN departments AS departments ON departments.id = roles.department_id',
    (err,res)=>{  return res ? console.table(res)
        :console.log(err,'ROLES IS BROKEN')
}
)
    init();
};
async function viewDepartments(){
    db.query('SELECT * FROM my_business.departments;',
    (err,res)=>{  return res ? console.table(res)
        :console.log(err,'DEPARTMENTS IS BROKEN')
    }
    )
    init();
};
// function addEmployees()
// function addRoles()
// function addDepartments()
// function deleteEmployees()
// function deleteRoles()
// function deleteDepartments()
// function updateEmployeesRoles()
// function updateEmployeesManager()

init();