let employees =[]

export const getEmployees = () =>{
    return fetch(" http://localhost:8088/employee1")
    .then(response => response.json())
    .then(parsedemployees =>{
    
        employees=parsedemployees
        // console.log(parsedemployees)
    })
}
export const useEmployees = () =>{
    return employees.slice()
}