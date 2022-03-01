/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('students').insert([
    {id: 1, firstname: 'Waqas', lastname:'Khattak'},
    {id: 2, firstname: 'Farhan', lastname:'Khan'},
    {id: 3, firstname: 'Sheharyar', lastname:'Ahmad'},
  ]);
};
