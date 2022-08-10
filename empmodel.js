var conn = require('../../config/dbconfig.js');

var Employee = function(employee){
    // this.id = employee.id;
    this.projectcode = employee.projectcode;
    this.facilitycode = employee.facilitycode;
    this.projectname = employee.projectname;
    this.clientname = employee.clientname;
    this.facilityname = employee.facilityname;
    this.creoprojectcode = employee.creoprojectcode
}

//for fetching the all data
Employee.getAllEmployees = (result) => {
    conn.query('SELECT * FROM employee', (err,res) => {
        if(err){
            console.log('Error while Fetching The Data', err);
            result(null,err);
        }
        else{
            console.log('Employee fetched successfully');
            result(null,res);
        }
    })
}

//for creating data
Employee.createEmployee = (employeeData, result) => {
    conn.query('INSERT INTO employee SET ?', employeeData, (err, res) => {
        if(err){
            console.log('Error while inserting the data', err);
            result(null, err);
        }
        else{
            console.log('Employee Inserted Successfully');
            result(null,res);
        }
    })
}

// update data
Employee.updateEmployee = (id, employeeData, result)=>{
    conn.query("UPDATE employee SET projectcode=?,facilitycode=?,projectname=?,clientname=?,facilityname=?,creoprojectcode=? WHERE id = ?",
     [employeeData.projectcode,employeeData.facilitycode,employeeData.projectname,employeeData.clientname,employeeData.facilityname,employeeData.creoprojectcode, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}


module.exports = Employee;


