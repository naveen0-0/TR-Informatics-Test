import { useState } from 'react'
import axios from 'axios'

export default function InputForm({ updateDepartments }) {
  const [employeeName, setEmployeename] = useState("")
  const [departmentName, setDepartmentName] = useState("")

  const addEmployee = async (e) => {
    e.preventDefault()
    try {
      let { data } = await axios.post("http://localhost:5000/api/addemployee", { employeeName, departmentName })
      updateDepartments(data)
    } catch (error) {
      console.log(error);
    }

    setEmployeename("")
    setDepartmentName("")
  }
  return (
    <div>
      <h3>Add an Employee</h3>
      <form onSubmit={addEmployee}>
        <div>
          <label htmlFor="employee">Employee</label>
          <input
            type="text"
            required
            placeholder='Enter the employee name here...'
            id='employee'
            value={employeeName}
            onChange={(e) => setEmployeename(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            required
            placeholder='Enter the Department name here ...'
            id='department'
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </div>

        <button type='submit'>Add Employee</button>
      </form>
    </div>
  )
}
