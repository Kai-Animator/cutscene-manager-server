/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cuts').del()
  await knex('cuts').insert([
    {
      cut_id: -1,
      cs_code: 'mq6s03x0',
      cut_name: 'c01xa',
      start_date: '2023-02-18',
      end_date: '2023-02-19',
      animator: 'navarro',
      cut_status: 'DONE',
    },
    {
      cut_id: -2,
      cs_code: 'mq6s03x0',
      cut_name: 'c02xa',
      start_date: '2023-02-19',
      end_date: '2023-02-20',
      animator: 'navarro',
      cut_status: 'DONE',
    },
    {
      cut_id: -3,
      cs_code: 'mq6s03x0',
      cut_name: 'c02ya',
      start_date: '2023-02-21',
      end_date: '2023-02-21',
      animator: 'Bandit',
      cut_status: 'DONE',
    },
    {
      cut_id: -4,
      cs_code: 'mq6s03x0',
      cut_name: 'c03xa',
      start_date: '2023-02-21',
      end_date: '2023-02-21',
      animator: 'navarro',
      cut_status: 'DONE',
    },
    {
      cut_id: -5,
      cs_code: 'mq6s03x0',
      cut_name: 'c04xa',
      start_date: '2023-02-22',
      end_date: '2023-02-23',
      animator: 'Bandit',
      cut_status: 'DONE',
    },
    {
      cut_id: -6,
      cs_code: 'mq6s03x0',
      cut_name: 'c05xa',
      start_date: '2023-02-22',
      end_date: '2023-02-22',
      animator: 'navarro',
      cut_status: 'DONE',
    },
  ]);
};
