'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


//Create a schema for chat
var Schema = _mongoose2.default.Schema({
  created: { type: Date, default: Date.now() },
  content: { type: String, default: '' },
  username: { type: String, default: '' },
  room: { type: String, default: '' } });


//Create a model from the chat schema
exports.default = _mongoose2.default.model('Chats', Schema, 'Chats');