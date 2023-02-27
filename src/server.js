
const express = require('express');
const server = express();
const cutsceneController = require('./cutscenes/cutscenes.controller');

const cors = require('cors');

server.use(express.json());
server.use(cors());

const serverEndpoints = () => {
  // CUTSCENES
  // Create new cutscene
  // Get All Cutscenes
  // Get Cutscenes Info

  return server;
};

module.exports = { serverEndpoints };
