// Array to store employee objects
let employees = [];

function addEmployee() {
    const name = document.getElementById('empName').value;
    const id = document.getElementById('empID').value;
    const salary = parseFloat(document.getElementById('empSalary').value);
    const dept = document.getElementById('empDept').value;

    if (name && id && salary && dept) {
        const employee = { name, id, salary, dept }; 
        employees.push(employee); 
        alert("Employee Added!");
        clearInputs();
    } else {
        alert("Please fill all fields");
    }
}

function clearInputs() {
    document.getElementById('empName').value = '';
    document.getElementById('empID').value = '';
    document.getElementById('empSalary').value = '';
    document.getElementById('empDept').value = '';
}

function displayEmployees() {
    const display = document.getElementById('resultDisplay');
    display.innerHTML = "<h3>All Employees</h3>";
    for (let emp of employees) { 
        display.innerHTML += `<div class="record">Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.dept}</div>`;
    }
}

function filterHighSalary() {
    const highEarners = employees.filter(emp => emp.salary > 50000);
    const display = document.getElementById('resultDisplay');
    display.innerHTML = "<h3>Salaries > ₹50,000</h3>";
    highEarners.forEach(emp => {
        display.innerHTML += `<div class="record">${emp.name}: ₹${emp.salary}</div>`;
    });
}

function calculateTotalPayout() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById('resultDisplay').innerHTML = `<h3>Total Salary Payout: ₹${total.toFixed(2)}</h3>`;
}

function calculateAverage() {
    if (employees.length === 0) return;
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const avg = total / employees.length;
    document.getElementById('resultDisplay').innerHTML = `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}

function countByDepartment() {
    const targetDept = prompt("Enter Department Name:");
    const count = employees.filter(emp => emp.dept.toLowerCase() === targetDept.toLowerCase()).length;
    document.getElementById('resultDisplay').innerHTML = `<h3>Employees in ${targetDept}: ${count}</h3>`;
}

