const express = require('express');
const router = express.Router();

const EmpController = require('../controllers/empcontroller.js');

//get data router
router.get('/', EmpController.getEmployeeList);


//create router
router.post('/', EmpController.createNewEmployee);

// update router
router.put('/:id', EmpController.updateEmployee);
module.exports=router;
