import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/hooks.js"
import { EmployeeContext } from '../employee/employee';
import Button from "../button/button"
//Check out 20-State/03-Stu_useState
function Table() {
    // https://randomuser.me/documentation#howto
    // exists in case I ever built functionality in to change the url, which would get a new set of employees. Currently not being used other than to store the url.
    const [url] = useState("https://randomuser.me/api/?results=10")
    // custom hook used for getting the employees from the api and storing the sort functions
    const { sortFunc } = useGet(url);
    // contains the employees to display in the table
    const { displayedEmployees} = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("name")}><Button>First Name</Button></td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;