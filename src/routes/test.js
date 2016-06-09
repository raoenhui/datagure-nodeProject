'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

module.exports = function (done) {

  $.router.get('/', function(req,res,next){
    res.end(`现在是北京时间${new Date()}`);
  });

  done();

};
