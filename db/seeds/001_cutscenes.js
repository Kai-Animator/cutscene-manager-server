/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cutscenes').del()
  await knex('cutscenes').insert([
    {
      cs_code: 'mq6s03x0',
      cs_name: 'jyasafire',
      start_date: '2023-02-10',
      end_date: '2023-03-18',
      due_date: '2023-03-25',
      director: 'Matsuda',
      scene_status: 'DONE',
    },
    {
      cs_code: 'mf6s11x1',
      cs_name: 'AnlushaToJagunoba',
      start_date: '2023-02-25',
      end_date: null,
      due_date: '2023-04-15',
      director: 'Sakamoto',
      scene_status: 'Enshutsu Check',
    },
    {
      cs_code: 'mt8s06x1',
      cs_name: 'PalmioNoHakase',
      start_date: '2023-03-01',
      end_date: null,
      due_date: '2023-04-25',
      director: 'Ben jor',
      scene_status: 'Layout',
    },
  ]);
};
