"use strict";Object.defineProperty(exports, "__esModule", { value: true });var router = require("express").Router();
var cst = require("../utils/constants");
router.get('/api-list', require("../utils/middlewares").authenMiddleware, function (req, res) {
	var apis = require("../api").default,
	lapi = [],
	keys = Object.keys(apis);
	for (var i = 0; i < apis.length; i++) {
		for (var j = 0; j < apis[i].method.length; j++) {
			lapi.push({
				name: Object.keys(apis[i])[0],
				method: apis[i].method[j] });

		}
	}
	// debugger
	res.render("apis", { lapi: lapi });
});exports.default =
router;