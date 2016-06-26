'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

import mongoose from 'mongoose';

module.exports = function (done) {


  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const Topic = new Schema({
      authorId : {type: ObjectId, index: true},
      title: {type: String, trim: true},
      content: {type: String},
      tags: {type: String, index: true},
      createdAt: {type:Date, index: true},
      updatedAt: {type:Date, index: true},
      lastCommentAt: {type:Date, index: true},
      comments: [{
        authorId: ObjectId,
        content: String,
        createdAt: Date
      }]
  });

  $.mongodb.model('Topic',Topic);
  $.model.Topic = $.mongodb.model('Topic');

  done();

};
