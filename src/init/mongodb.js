'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

import mongoose from 'mongoose';
module.exports = function (done) {

  const conn = mongoose.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  $.model = {};
  
  done();

}
