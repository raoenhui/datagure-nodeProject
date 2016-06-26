'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

import mongoose from 'mongoose';

module.exports = function (done) {

  const debug = $.createDebug('init:mongodb');
  debug('connecting to MongoDB...');

  const conn = mongoose.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  $.model = {};

  const ObjectId = mongoose.Types.ObjectId;
  $.utils.ObjectId = ObjectId;

  done();

};
