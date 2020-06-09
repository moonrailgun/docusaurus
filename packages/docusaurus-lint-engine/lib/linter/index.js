/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const md = require('markdown-it')();
const fs = require('fs');

// webpack alias, es6 import and export
const rules = require('../rules')
const content = fs.readFileSync('../tests/test-01.md', 'utf-8');

const tokens = md.parse(content);
// formatter
const results = rules.map(rule => {
  return rule.create({tokens})
})

console.log(results)
