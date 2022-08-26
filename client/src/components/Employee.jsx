import React, { useEffect } from 'react'
import axios from 'axios'

export default function Employee({ employee, setDepartments, departmentName }) {

  const deleteEmployee = async () => {
    try {
      let { data } = await axios.delete(`http://localhost:5000/api/deleteemployee/${departmentName}/${employee._id}`)
      setDepartments(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>{employee.employeeName} <span><button onClick={deleteEmployee}>Delete</button></span></div>
    </div>
  )
}
