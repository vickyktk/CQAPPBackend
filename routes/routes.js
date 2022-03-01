const express = require('express')
const router = express.Router()
const {getBooks, postBook, updateBook, deleteBook, viewBook} = require('../controllers/routesController') 
const {getstudents, poststudent, updatestudent, deletestudent, viewstudent} = require('../controllers/studentsRoutesController') 

router.route('/').get(getBooks)
router.route('/books').get(getBooks).post(postBook)
router.route('/books/:id').get(viewBook)
router.route('/books/:id').put(updateBook).delete(deleteBook)

//students routs
router.route('/students').get(getstudents).post(poststudent)
router.route('/students/:id').get(viewstudent)
router.route('/students/:id').put(updatestudent).delete(deletestudent)

module.exports = router