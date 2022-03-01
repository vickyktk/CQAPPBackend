/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {id: 1, bookname: 'book1', authorname:'author1', studentname:'Sheharyar Ahma', 'borrowed_date':knex.fn.now(), 'return_date':knex.fn.now(), student_id:2},
    {id: 2, bookname: 'book2', authorname:'author1', studentname:'Waqas Khattak', 'borrowed_date':knex.fn.now(), 'return_date':knex.fn.now(), student_id:3},
    {id: 3, bookname: 'book3', authorname:'author1', studentname:'Farhan Khan', 'borrowed_date':knex.fn.now(), 'return_date':knex.fn.now(), student_id:1},
  ]);
};
