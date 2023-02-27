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
      cut_name: '01xa',
      start_date: '2023-02-18',
      end_date: '2023-02-19',
      animator: 'navarro',
      cut_status: 'DONE',
    },
    {
      cut_id: -2,
      cs_code: 'mq6s03x0',
      cut_name: '02xa',
      start_date: '2023-02-19',
      end_date: '2023-02-20',
      animator: 'navarro',
      cut_status: 'DONE',
    },
    {
      cut_id: -3,
      cs_code: 'mq6s03x0',
      cut_name: '02ya',
      start_date: '2023-02-21',
      end_date: '2023-02-21',
      animator: 'Bandit',
      cut_status: 'DONE',
    },
    {
      cut_id: -4,
      cs_code: 'mq6s03x0',
      cut_name: '03xa',
      start_date: '2023-02-21',
      end_date: '2023-02-21',
      animator: 'navarro',
      cut_status: 'DONE',
    },
    {
      cut_id: -5,
      cs_code: 'mq6s03x0',
      cut_name: '04xa',
      start_date: '2023-02-22',
      end_date: '2023-02-23',
      animator: 'Bandit',
      cut_status: 'DONE',
    },
    {
      cut_id: -6,
      cs_code: 'mq6s03x0',
      cut_name: '05xa',
      start_date: '2023-02-22',
      end_date: '2023-02-22',
      animator: 'navarro',
      cut_status: 'DONE',
    },
  ]);
};
