document.addEventListener('DOMContentLoaded',()=>
{
const idParrafo = document.getElementById('myId'); /*ID*/ 
const classTest = document.querySelector('.test'); /*Clase*/ 

idParrafo.innerText = "Hello World ID";
classTest.innerText = "Hello World CLASS"
})

const classTable = document.querySelector('.myTable');
function insertRow()
{
    const newRow = classTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New row 1";
    cell2.innerHTML = "New row 2";
}
function deleteRow()
{
    if(classTable.rows.length > 1)
    {
        classTable.deleteRow(-1);
    }
}
function highlight()
{
    const cssSpan = document.querySelectorAll('.myClass');

    cssSpan.forEach((span) =>{
        span.classList.add("highlighted");
        setTimeout(() =>{
            span.classList.remove("highlighted")
        },2000);
    })
}

