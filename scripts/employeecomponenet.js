export const employeecard = (employeeObj,computerObj) =>{
    return `
    <section class="employees">
    <p> id: ${employeeObj.id}</p>
    <p> Firstname: ${employeeObj.firstName}</p>
    <p> Lastname: ${employeeObj.lastName} </p>
    <p> computerid: ${employeeObj.computerId}</p>
    </section>`
}