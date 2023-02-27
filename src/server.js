
const express = require('express');
const server = express();
const cutsceneController = require('./cutscenes/cutscenes.controller');
const cutController = require('./cuts/cuts.controller');

const cors = require('cors');

server.use(express.json());
server.use(cors());

const serverEndpoints = () => {
  // CUTSCENES
  // Create new cutscene
  server.post('/cutscenes', cutsceneController.createNewCutscene);
  // Get All Cutscenes
  server.get('/cutscenes', cutsceneController.getAllCutscenes);
  // Get Cutscenes Info
  server.get('/cutscenes/:cs_code', cutsceneController.getCutsceneInfo);

  // CUTS
  // Create new cut
  server.post('/cutscenes/:cs_code/cuts', cutController.createNewCut);
  // Edit existing cuts
  server.put('/cutscenes/:cs_code/cuts/:cut_id', cutController.editCut);
  // Delete existing cuts
  server.delete('/cutscenes/:cs_code/cuts/:cut_id', cutController.deleteCut);
  // Get All Cuts from that scene
  server.get('/cutscenes/:cs_code/cuts', cutController.getAllCuts);
  // Get Cut Info
  server.get('/cutscenes/:cs_code/cuts/:cut_id', cutController.getCutInfo);

  return server;
};

module.exports = { serverEndpoints };
