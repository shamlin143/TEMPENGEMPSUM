const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");

const employees = []

const questions = [
    {
        type: 'input',
        message: 'what is your name',
        name: 'name',

    },
    {
        type: 'input',
        message: 'what is yoiur email',
        name: 'email',
    },

    { 
        type: 'input',
        message: 'what is your id',
        name: 'id',
    },

    {
        type: 'input',
        message: 'What is the name of your school',
        name: 'school',
    },

    {
        type: 'list',
        message: 'do you want to add another role',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role',
    },

    {
        type: 'input',
        message: 'what is your office number?',
        name: 'office',
    },

    {   
        type: 'input',
        message: 'what is your Github username',
        name: 'Github',
    },

    {
        type: 'confirm',
        message: 'add another employee?',
        name: 'confirm'
    }


]

const manager = [
    {
        type: 'input',
        message: 'what is your name',
        name: 'name',

    },
    { 
        type: 'input',
        message: 'what is your id',
        name: 'id',
    },
    {
        type: 'input',
        message: 'what is yoiur email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'what is your office number?',
        name: 'office',
    },
]

const engineer = [
{
    type: 'input',
    message: 'what is your name',
    name: 'name',
},
{ 
    type: 'input',
    message: 'what is your id',
    name: 'id',
},
{
    type: 'input',
    message: 'what is yoiur email',
    name: 'email',
},
{   
    type: 'input',
    message: 'what is your Github username',
    name: 'Github',
},

]

const intern = [
{
    type: 'input',
    message: 'what is your name',
    name: 'name',
},
{ 
    type: 'input',
    message: 'what is your id',
    name: 'id',
},
{
    type: 'input',
    message: 'what is yoiur email',
    name: 'email',
},
{
    type: 'input',
    message: 'What is the name of your school',
    name: 'school',
},

]



const handleRoles =async () =>{
    switch(role){
        case('Manager'):
        return await inquirer.prompt(manager)
        case('Engineer'):
            return await inquirer.prompt(engineer)
        case('Intern'):
            return await inquirer.prompt(intern)
        default: 
            console.log('default return')
}

const init = async () => {
    try{ 
    const res = await inquirer.prompt(quesitons)
    console.log(res)
    if(res.confirm){
        employees.push(res)
        console.log('confirm true running again')
        init()
    } else{
        employees.push(res)
        connsole.log(employees)
        console.log('something  happens?')
    }}catch (error){

    }

}
init()
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
