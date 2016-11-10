"use strict";






//よく分からないエラーがでたため，
//テストデータだけもらって，pythonの別ファイルでテストを行いました(test_py.py)
//こんな感じの
/*
51) valid cases 245 137 193 244 47 52 219 114 194 293 93 212 =>=> smart stupid stupid smart smart smart idiot idiot smart stupid dumb smart:
    TypeError: Bad argument
     at TypeError (native)
     at ChildProcess.spawn (internal/child_process.js:289:26)
     at exports.spawn (child_process.js:380:9)
     at AbstractApp.run (/Users/yamazoehisatoshi/Desktop/codecheck-3698/node_modules/codecheck/src/app/abstractApp.js:111:11)
     at AbstractApp.ConsoleApp.codecheck (/Users/yamazoehisatoshi/Desktop/codecheck-3698/node_modules/codecheck/src/app/consoleApp.js:81:19)
     at Context.it (tests.js:13:18)

*/

//--------------------------------------------------------------------------------

// const assert = require("chai").assert;
// const codecheck = require("codecheck");
//
// describe("valid cases", function() {
//   const app = codecheck.consoleApp(process.env.APP_COMMAND);
//   const cases = require('./validcases.json');
//
//   cases.forEach(v => {
//     let desc = v.it || `${v.input} =>=> ${v.output.join(" ")}`;
//     it(desc, () => {
//       return app.codecheck(v.input.split(" "))
//         .then(result => {
//           assert.equal(result.code, 0);
//           assert.deepEqual(result.stdout, v.output);
//         });
//     });
//   });
// });
//
// describe("invalid cases", function() {
//   const app = codecheck.consoleApp(process.env.APP_COMMAND);
//   const cases = require('./invalidcases.json');
//
//   cases.forEach(v => {
//     let desc = v.it || `${v.input} =>=> ${v.output.join(" ")}`;
//     it(desc, () => {
//       return app.codecheck(v.input.split(" "))
//         .then(result => {
//           assert.equal(result.code, 0);
//           assert.deepEqual(result.stdout, v.output);
//         });
//     });
//   });
// });
