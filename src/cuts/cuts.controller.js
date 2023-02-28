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
    const newCut = req.body;

    const newCutInfo = {
      cs_code: newCut.cs_code,
      cut_name: newCut.cut_name,
      start_date: newCut.start_date !== '' ? new Date(newCut.start_date) : null,
      end_date: newCut.end_date !== '' ? new Date(newCut.end_date) : null,
      animator: newCut.animator,
      cut_status: newCut.cut_status
    };

    const newCutInfoRes = await cutsModel.createNewCut(newCutInfo);
    res.status(201).send(newCutInfoRes);
  },
  async editCut(req, res) {
    const editCutInfo = await cutsModel.editCut(
      req.params.cut_name,
      req.body,
      req.params.cs_code
    );
    res.status(201).send(editCutInfo);
  },
  async deleteCut(req, res) {
    const deleteCutInfo = await cutsModel.deleteCut(
      req.params.cut_name,
      req.params.cs_code
    );
    res.status(201).send(deleteCutInfo);
  },
  async getAllCuts(req, res) {
    const allCuts = await cutsModel.getAllCuts(req.params.cs_code);
    res.status(201).send(allCuts);
  },
  async getCutInfo(req, res) {
    const cutInfo = await cutsModel.getCutInfo(
      req.params.cut_name,
      req.params.cs_code
    );
    res.status(201).send(cutInfo);
  },
};
