"use strict";

const { resolve } = require("path");
const pluginTester = require("babel-plugin-tester");

const pluginPath = resolve(__dirname, "../src");
const fixturesPath = resolve(__dirname, "fixtures");

pluginTester({
	plugin: require(pluginPath),
	pluginOptions: { verbose: false },
	fixtures: fixturesPath
});
