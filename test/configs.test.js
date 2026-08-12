const assert = require("node:assert/strict");
const test = require("node:test");
const { ESLint } = require("eslint");

const config = require("..");

test("base config loads with ESLint 9", async () => {
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [config[0], config[1], config[2], config.at(-1)],
    });

    const [result] = await eslint.lintText("const value = 1;\n", {
        filePath: "example.js",
    });

    assert.equal(result.fatalErrorCount, 0);
});
