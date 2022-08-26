const { Schema, model } = require('mongoose')
const { EmployeeSchema } = require('./Employee')

const DepartmentSchema = new Schema({
  departmentName : {
    type:String,
    required:true
  },
  employees:[EmployeeSchema]
})

const Department = model('department', DepartmentSchema)

module.exports = {
  Department
}