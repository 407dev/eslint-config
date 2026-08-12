const assert = require("node:assert/strict");
const test = require("node:test");
const { ESLint } = require("eslint");

const entryPoints = [
    ["base", "..", [0, 1, 2, -1]],
    ["next", "../next", [0, 1, 2, 3]],
    ["expo", "../expo", [0, 1, 2]],
];

for (const [name, entryPoint, indexes] of entryPoints) {
    test(`${name} config loads with ESLint 9`, async () => {
        const config = require(entryPoint);
        const eslint = new ESLint({
            overrideConfigFile: true,
            overrideConfig: indexes.map(index => config.at(index)),
        });

        const [result] = await eslint.lintText("const value = 1;\n", {
            filePath: "example.js",
        });

        assert.equal(result.fatalErrorCount, 0);
    });
}
