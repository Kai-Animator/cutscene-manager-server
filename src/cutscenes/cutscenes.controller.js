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
    let newCutsceneInfo = req.body;
    const newCutscene = {
      cs_code: newCutsceneInfo.cs_code,
      cs_name: newCutsceneInfo.cs_name,
      start_date: new Date(newCutsceneInfo.start_date),
      end_date: newCutsceneInfo.end_date !== '' ? new Date(newCutsceneInfo.end_date) : null,
      due_date: newCutsceneInfo.due_date !== '' ? new Date(newCutsceneInfo.due_date) : null,
      director: newCutsceneInfo.director,
      scene_status: newCutsceneInfo.scene_status,
      total_cuts: parseInt(newCutsceneInfo.total_cuts),
    };
    const newCutsceneAdded = await cutscenesModel.createNewCutscene(newCutscene);
    res.status(201).send(newCutsceneAdded);
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
