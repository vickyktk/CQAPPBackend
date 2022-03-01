const knex = require('../db/knex');
const getstudents = (req,res)=>{
    
    knex.select().from('students').then((students)=>{
        res.status(200).json({message:students})
    })
}

const viewstudent = (req,res)=>{
    let student_id = req.params.id;
    knex.select().from('students').where({id:student_id}).then((student)=>{
        if(student.length == 0) {
            res.status(200).json({message:`No student founded with given id`})
        }
        res.status(200).json({message:student})
    })
}

const poststudent = (req,res)=>{
    if(!req.body.firstname) {
        res.status(400)
        throw new Error("student name is Required")
    }
    if(!req.body.lastname) {
        res.status(400)
        throw new Error("Author name is Required")
    }
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;


    knex('students').insert([
        {firstname: firstname, lastname:lastname},
      ]).then(function(data){
        knex.select().from('students').then((students)=>{
            res.status(200).json({message:students})
        })
      })
}

const updatestudent = (req,res)=>{
    let student_id = req.params.id;
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    knex('students').where({id:student_id}).update({firstname:firstname,lastname:lastname})
    res.status(200).json({message:'student has been updated'})
}

const deletestudent = (req,res)=>{
    let student_id = req.params.id;
    knex.delete().from('students').where({id:student_id}).then((student)=>{
        res.status(200).json({message:'student has been deleted successfully'})
    })
}

module.exports = {
    getstudents,
    poststudent,
    updatestudent,
    deletestudent,
    viewstudent
}