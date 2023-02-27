const { createNewCut } = require('./cuts.model');
const cutsModel = require('./cuts.model');

module.exports = {
  async createNewCut(req, res) {
    /*
      cs_code: 'mq6s04x0',
      cut_name: 'c01x',
      start_date: '2023-02-01',
      end_date: '2023-02-19',
      animator: 'navarro',
      cut_status: 'Not started.',
    */
    const newCutInfo = await cutsModel.createNewCut(req.body);
    res.status(201).send(newCutInfo);
  },
  async editCut(req, res) {
    const editCutInfo = await cutsModel.editCut(req.params.cut_id, req.body);
    res.status(201).send(editCutInfo);
  },
  async deleteCut(req, res) {
    const deleteCutInfo = await cutsModel.deleteCut(req.params.cut_id);
    res.status(201).send(deleteCutInfo);
  },
  async getAllCuts(req, res) {
    const allCuts = await cutsModel.getAllCuts(req.params.cs_code);
    res.status(201).send(allCuts);
  },
  async getCutInfo(req, res) {
    const cutInfo = await cutsModel.getCutInfo(req.params.cut_id);
    res.status(201).send(cutInfo);
  },
}
