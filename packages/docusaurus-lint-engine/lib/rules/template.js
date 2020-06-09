/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  meta: {
    id: "[R001]",
    name: "first-heading-h1",
    desc: "Check if the first heading is H1"
  },
  create({tokens}) {
    const result = tokens.find(function(token) {
      if(token.type == 'heading_open') {
        return token.tag == 'h1'
      }
    })
    return result ? '[ok]': '[error]';
  }
}
