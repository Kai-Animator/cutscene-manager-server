/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cuts', function (table) {
    table.increments('cut_id').primary();
    table.string('cut_name', 32).notNullable();
    table.date('start_date');
    table.date('end_date');
    table
      .string('cs_code')
      .notNullable()
      .references('cs_code')
      .inTable('cutscenes')
      .onDelete('cascade');
    table.string('animator', 32);
    table.string('cut_status', 32).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('cuts');
};
