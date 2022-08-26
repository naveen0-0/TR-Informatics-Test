import axios from 'axios'
import React from 'react'
import Employee from './Employee'

export default function Department({ department, setDepartments }) {

  const deleteGroup = async () => {
    try {
      let { data } = await axios.delete(`http://localhost:5000/api/deletegroup/${department.departmentName}`)
      setDepartments(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>{department.departmentName} <span><button onClick={deleteGroup}>Delete</button></span></h2>
      <div>
        {department.employees.map((employee, index) => <Employee key={index} employee={employee} setDepartments={setDepartments} departmentName={department.departmentName}/>)}
      </div>
    </div>
  )
}
