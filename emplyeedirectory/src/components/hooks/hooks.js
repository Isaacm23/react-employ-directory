import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../employee/employee"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)

 
 
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                setEmployees(response.data.results)
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees() 
    },[])

    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "last":
                sortByLast()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    // sorts the employees based on first name.
    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        
        setDisplayedEmployees([...employees])
    }

    
    function sortByLast(){
        employees.sort(function(a,b){
           if(a.name.last < b.name.last){
               return -1;
           }else{
               return 1;
           }
       })
        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunc}
}