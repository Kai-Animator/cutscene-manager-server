const config = require('../../knexfile');
const knex = require('knex')(config);

const CUTSCENES_TABLE = 'cutscenes';
const CUTS_TABLE = 'cuts';

module.exports = {
  CUTSCENES_TABLE,
  CUTS_TABLE,

  async createNewCutscene(newCsInfo) {
    await knex(CUTSCENES_TABLE).insert({
      cs_code: newCsInfo.cs_code,
      cs_name: newCsInfo.cs_name,
      start_date: newCsInfo.start_date,
      end_date: newCsInfo.end_date,
      due_date: newCsInfo.due_date,
      director: newCsInfo.director,
      scene_status: newCsInfo.scene_status,
    });

    for (let i = 1; i <= newCsInfo.total_cuts; i++) {
      await knex(CUTS_TABLE).insert({
        cs_code: newCsInfo.cs_code,
        cut_name: i < 10 ? `0${i}xa` : `${i}xa`,
        start_date: null,
        end_date: null,
        animator: newCsInfo.director,
        cut_status: 'Not Started',
      });
    }

    return await knex(CUTSCENES_TABLE).where('cs_code', newCsInfo.cs_code);
  },

  async getCutsceneInfo(cs_code) {
    return await knex(CUTSCENES_TABLE).where('cs_code', cs_code);
  },

  async getAllCutscenes() {
    return await knex(CUTSCENES_TABLE);
  },
};
