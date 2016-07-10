'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

import path from 'path';

module.exports = function(done) {

  $.router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../frontend/index.html'));
  });

  done();

};
