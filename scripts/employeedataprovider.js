let employee =[]

export const getEmployees = () =>{
    return fetch(" http://localhost:8088/employee1")
    .then(response => response.json())
    .then(parsedemployees =>{
        // console.log(parsedemployees)
        employee=parsedemployees
    })
}
export const useEmployees = () =>{
    return employee.slice()
}