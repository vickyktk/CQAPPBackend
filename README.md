# CQAPPBackend
Task given by CQTechnologies

This is Nodejs/Postgres SQL app for a library.

Before installing this you should have a Postgres installed and have a database named "BookStoreVicky"

Please follow the following steps to run this project



1: npm install
2: npx knex migrate:latest (This will create two tables in your database)
3:npx knex seed:run    (This will add some smaple data to your tables)

Routes to work with this app
Route: http://example.com/ or http://example.com/books(Get Request)
Description : This will get all the books from books table

Route: http://example.com/books(Post)
Description : This will post a book to the book table
Required Parameters
bookname,authorname,studentname(optional),borrowed_date(optional),return_date(optional),student_id(optional)

Route: http://example.com/books/id(Get)
Description : This will get the book for given id

Route: http://example.com/books/id(Update/Put)
Description : This will get update the data of a book for given id

Route: http://example.com/books/id(Delete)
Description : This will delete the book for given id



Route: http://example.com/students(Get Request)
Description : This will get all the students from students table

Route: http://example.com/students(Post)
Description : This will post a students to the students table
Required Parameters
firstname,lastname

Route: http://example.com/students/id(Get)
Description : This will get the students for given id

Route: http://example.com/students/id(Update/Put)
Description : This will get update the data of a students for given id

Route: http://example.com/students/id(Delete)
Description : This will delete the students for given id
