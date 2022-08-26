import axios from 'axios'
import { useEffect, useState } from 'react'
import Department from './Department'

export default function DepartmentDisplayPanel({ departments, setDepartments }) {



  useEffect(() => {
    fetchDepartments()
  }, [])

  const fetchDepartments = async () => {
    try {
      let { data } = await axios.get('http://localhost:5000/api/getemployess')
      console.log(data);
      setDepartments(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {departments.map((department, index) => <Department key={index} department={department} setDepartments={setDepartments}/>)}
    </div>
  )
}
