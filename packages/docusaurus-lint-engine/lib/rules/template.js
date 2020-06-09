/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const md = require('markdown-it')();
const fs = require('fs');

const content = fs.readFileSync('../tests/test-01.md', 'utf-8');
const tokens = md.parse(content);

module.exports = {
  meta: {
    id: "[R001]",
    name: "first-heading-h1",
    desc: "Check if the first heading is H1"
  },
  create(params) {
    const tokens = md.parse(content);
    const result = tokens.find(function(token) {
      if(token.type == 'heading_open') {
        return token.tag == 'h1'
      }
    })
    return result;
  }
}
