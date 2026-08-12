const assert = require("node:assert/strict");
const test = require("node:test");
const { ESLint } = require("eslint");
const path = require("node:path");

const configFiles = ["../index.js", "../next.js", "../expo.js"];

for (const configFile of configFiles) {
    test(`${configFile} exports a runnable flat config`, async () => {
        const config = require(configFile);

        assert.ok(Array.isArray(config));
        assert.ok(config.length > 0);

        const eslint = new ESLint({
            cwd: "/tmp",
            overrideConfigFile: path.join(__dirname, configFile),
        });
        const [result] = await eslint.lintText(
            "const value = 1;\nconsole.log(value);\n",
            { filePath: "sample.js" },
        );

        assert.equal(result.fatalErrorCount, 0);
    });
}
