const knex = require('../db/knex');
const getBooks = (req,res)=>{
    knex.select().from('books').then((books)=>{
        res.status(200).json({message:books})
    })
}

const viewBook = (req,res)=>{
    let book_id = req.params.id;
    knex.select().from('books').where({id:book_id}).then((book)=>{
        if(book.length == 0) {
            res.status(200).json({message:`No book founded with given id`})
        }
        res.status(200).json({message:book})
    })
}

const postBook = (req,res)=>{
    if(!req.body.bookname) {
        res.status(400)
        throw new Error("Book name is Required")
    }
    if(!req.body.authorname) {
        res.status(400)
        throw new Error("Author name is Required")
    }
    let bookName = req.body.bookname;
    let authorName = req.body.authorname;
    let studentName = ''
    let borrowedDate = ''
    let returnDate = ''
    let studentID = null

    if(req.body.studentname) {
        studentName = req.body.studentName
    }

    if(req.body.borrowed_date) {
        borrowedDate = req.body.borrowed_date
    }
    if(req.body.return_date) {
        returnDate = req.body.borrowed_date
    }
    if(req.body.student_id) {
        studentID = req.body.student_id
    }

    knex('books').insert([
        {bookname: bookName, authorname:authorName, studentname:studentName, 'borrowed_date':borrowedDate, 'return_date':returnDate, student_id:studentID},
      ]).then(function(data){
        knex.select().from('books').then((books)=>{
            res.status(200).json({message:books})
        })
      })
}

const updateBook = (req,res)=>{
    let book_id = req.params.id;
    let changes = req.body
    knex('books').where({id:book_id}).update({
        bookname:req.body.bookname,
        authorname:req.body.authorname,
        studentname:req.body.studentname,
        borrowed_date:req.body.borrowed_date,
        return_date:req.body.return_date,
        student_id:req.body.student_id 
    }).then((data)=>{ 
        res.status(200).json({message:data})

    })
}

const deleteBook = (req,res)=>{
    let book_id = req.params.id;
    knex.delete().from('books').where({id:book_id}).then((book)=>{
        res.status(200).json({message:'Book has been deleted successfully'})
    })
}

module.exports = {
    getBooks,
    postBook,
    updateBook,
    deleteBook,
    viewBook
}