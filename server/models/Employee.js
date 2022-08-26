const { Schema } = require('mongoose')

const EmployeeSchema = new Schema({
  employeeName:{
    type:String,
    required:true
  }
})

module.exports = {
  EmployeeSchema,
}