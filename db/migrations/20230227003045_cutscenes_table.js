/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cutscenes', function (table) {
    table.string('cs_code', 32).primary();
    table.string('cs_name', 64).notNullable();
    table.date('start_date').notNullable();
    table.date('end_date');
    table.date('due_date');
    table.string('director', 32).notNullable();
    table.string('scene_status', 32).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('cutscenes');
};
