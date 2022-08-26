const { Router } = require('express')
const { Department } = require('../models/Department')
const { Employee } = require('../models/Employee')
const router = Router()



router.post('/addemployee', async (req,res) => {
  const { employeeName, departmentName } = req.body;

  const departmentAlreadyExists = await Department.findOne({ departmentName });

  if(departmentAlreadyExists !== null){
    try {
      let response = await Department.updateOne({ departmentName },{
        $push : { employees : { employeeName }}
      })
      let results = await Department.find();
      return res.send(results)
    } catch (error) {
      console.log(error);
    }
  }


  try {
    let result = await Department.create({ departmentName, employees:{ employeeName }})
    let results = await Department.find();
    return res.send(results)
  } catch (error) {
    console.log(error);
  }
})


//! Retrieve All the Employees
router.get('/getemployess', async (req,res) => {
  try {
    let results = await Department.find();
    return res.send(results)
  } catch (error) {
    console.log(error);
  }
})


// Delete Group
router.delete('/deletegroup/:departmentName', async (req,res) => {
  const { departmentName } = req.params;
  try {
    let groupDeleted = await Department.deleteOne({ departmentName })
    let results = await Department.find();
    return res.send(results)
  } catch (error) {
    console.log(error);
  }
})


// Delete Employee From a Department
router.delete('/deleteemployee/:departmentname/:id', async (req,res) => {
  const { departmentname, id } = req.params;
  try {
    let response = await Department.updateOne({ departmentName :departmentname  },{ $pull:{ employees:{ _id: id }}})
    let results = await Department.find();
    return res.send(results)
  } catch (error) {
    console.log(error);
  }
})


module.exports = {
  apiRouter : router
}