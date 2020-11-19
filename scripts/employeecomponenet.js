export const employeecard = (employeeObj,computerObj)=>{
    // debugger
    return `
    <section class="employees">
    <p> id: ${employeeObj.id}</p>
    <p> Firstname: ${employeeObj.firstName}</p>
    <p> Lastname: ${employeeObj.lastName} </p>
    <p> computerid: ${employeeObj.computerId}</p>
    <p> age: ${employeeObj.age}</p>
    <p> model: ${computerObj.model}</p>
    <p> year: ${computerObj.year}</p>
   
    </section>`
}