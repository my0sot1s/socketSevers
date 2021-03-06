'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _Stories = require('../models/Stories');var _Stories2 = _interopRequireDefault(_Stories);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var router = require("express").Router();

//ex:http://localhost:3001/api/stories?limit=2&page=2

router.get('/stories', function (req, res) {
    var limit = Number(req.query.limit) || 5;
    var page = Number(req.query.page) || 0;
    (0, _Stories.find)(limit, page, req.query.postId).exec(function (err, data) {
        if (!err && data) {
            res.json(data);
        } else

        res.send(err);
    });
});exports.default =

router;