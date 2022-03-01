/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('students', function(table){
        table.increments('id');
        table.string('firstname').notNullable();    
        table.string('lastname').notNullable();    
    }).createTable('books', function(table){
      table.increments('id');
      table.string('bookname').notNullable();    
      table.string('authorname').notNullable();
      table.string('studentname');
      table.timestamp('borrowed_date');
      table.timestamp('return_date');
      table.integer('student_id').references('id').inTable('students')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('students').dropTable('books')
  };
  