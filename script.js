let employees =
JSON.parse(localStorage.getItem("employees"))
|| [];

displayEmployees();

function addEmployee(){

let id =
document.getElementById("empId").value;

let name =
document.getElementById("empName").value;

let dept =
document.getElementById("empDept").value;

let salary =
document.getElementById("empSalary").value;

if(
id==="" ||
name==="" ||
dept==="" ||
salary===""){
alert("Fill all fields");
return;
}

employees.push({
id,
name,
dept,
salary
});

localStorage.setItem(
"employees",
JSON.stringify(employees)
);

displayEmployees();

document.getElementById("empId").value="";
document.getElementById("empName").value="";
document.getElementById("empDept").value="";
document.getElementById("empSalary").value="";
}

function displayEmployees(){

let table =
document.getElementById("employeeTable");

table.innerHTML="";

employees.forEach((emp,index)=>{

table.innerHTML += `
<tr>

<td>${emp.id}</td>

<td>${emp.name}</td>

<td>${emp.dept}</td>

<td>₹${emp.salary}</td>

<td>
<button
class="deleteBtn"
onclick="deleteEmployee(${index})">
Delete
</button>
</td>

</tr>
`;

});

document.getElementById(
"employeeCount"
).innerHTML =
employees.length;
}

function deleteEmployee(index){

employees.splice(index,1);

localStorage.setItem(
"employees",
JSON.stringify(employees)
);

displayEmployees();
}

function searchEmployee(){

let value =
document.getElementById("searchInput")
.value
.toLowerCase();

let rows =
document.querySelectorAll("#employeeTable tr");

let found = false;

rows.forEach(row=>{

let text =
row.innerText.toLowerCase();

if(text.includes(value)){

row.style.display="";
found=true;

}
else{

row.style.display="none";

}

});

if(value===""){

document.getElementById("noResult")
.style.display="none";

return;
}

if(found){

document.getElementById("noResult")
.style.display="none";

}
else{

document.getElementById("noResult")
.style.display="block";

}
}