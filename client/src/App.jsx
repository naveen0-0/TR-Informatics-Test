import React, { useState } from 'react'
import InputForm from './components/InputForm'
import DepartmentDisplayPanel from './components/DepartmentDisplayPanel'

const App = () => {
  const [departments, setDepartments] = useState([])
  return (
    <div>
      <InputForm updateDepartments={setDepartments}/>
      <DepartmentDisplayPanel departments={departments} setDepartments={setDepartments} />
    </div>
  )
}

export default App