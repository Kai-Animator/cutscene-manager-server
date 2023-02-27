const cutscenesModel = require('./cutscenes.model');

module.exports = {
  async createNewCutscene(req, res) {
    //Expecting an object like this:
    /*
     {
      cs_code: 'mz4s03x0',
      cs_name: 'Coleseum',
      start_date: '2023-03-01',
      end_date: undefined,
      due_date: '2023-03-31',
      director: 'b',
      scene_status: 'Layout',
      total_cuts: 5,
    };
    */
    const newCutsceneInfo = req.body;
    const newCutscene = await cutscenesModel.createNewCutscene(newCutsceneInfo);
    res.status(201).send(newCutscene);
  },

  async getCutsceneInfo(req, res) {
    const csCode = req.params.cs_code;
    const csInfo = await cutscenesModel.getCutsceneInfo(csCode);
    res.status(201).send(csInfo);
  },

  async getAllCutscenes(req, res) {
    const allCsInfo = await cutscenesModel.getAllCutscenes();
    res.status(201).send(allCsInfo);
  },
};
