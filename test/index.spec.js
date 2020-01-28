"use strict";

const { resolve } = require("path");
const { default: pluginTester } = require("babel-plugin-tester/pure");

const { name: pluginName, version: pluginVersion } = require(resolve(__dirname, "../package.json"));
const pluginPath = resolve(__dirname, "../src");
const fixturesPath = resolve(__dirname, "fixtures");

pluginTester({
	plugin: require(pluginPath),
	pluginName: `${pluginName}@${pluginVersion}`,
	pluginOptions: { verbose: false },
	fixtures: fixturesPath
});
