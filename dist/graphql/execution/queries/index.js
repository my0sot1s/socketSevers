'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.default = _extends({},

require('./Foods/resolves').default,


require('./Stories/resolves').default,


require('./StoryContent/resolves').default);


var queryDef = exports.queryDef = [
require('./queryDef').default];