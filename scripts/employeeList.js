const contentTarget = document.querySelector(".employeecontainer")
// got reference to both arrays
export const employeeList =() =>{
const employees = useEmployees()
const computers = useComputers()

// iterate the array of products 

const computerarray = computers.map(comObj =>{
const employeearray = employees.find(emplObj =>{
    emplObj.id === comObj.computerId})

    // build html representation
 const html = employeecard(comObj,emplObj)
 return html
})

const stringofallrepresentation = computerarray.join("")
contentTarget.innerHTML = stringofallrepresentation
}