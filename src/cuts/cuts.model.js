const config = require('../../knexfile');
const knex = require('knex')(config);

const CUTS_TABLE = 'cuts';

module.exports = {
  CUTS_TABLE,

  async createNewCut(newCutInfo) {
    return await knex(CUTS_TABLE)
      .insert(newCutInfo)
      .returning(['cut_id', 'cut_name', 'cs_code']);
  },

  async editCut(cutName, newInfo, csCode) {
    return await knex(CUTS_TABLE)
      .where({
        cut_name: cutName,
        cs_code: csCode
      })
      .update(newInfo)
      .returning([
        'cut_id',
        'cut_name',
        'animator',
        'cs_code',
        'start_date',
        'end_date',
        'cut_status',
      ]);
  },

  async deleteCut(cutName, csCode) {
    return await knex(CUTS_TABLE)
      .where({
        cut_name: cutName,
        cs_code: csCode
      })
      .del()
      .returning(['cut_id', 'cut_name']);
  },

  async getAllCuts(csCode) {
    return await knex(CUTS_TABLE).where('cs_code', csCode);
  },

  async getCutInfo(cutName, csCode) {
    return await knex(CUTS_TABLE).where({
      cut_name: cutName,
      cs_code: csCode,
    });
  },
};

