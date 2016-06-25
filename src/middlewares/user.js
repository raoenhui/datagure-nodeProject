'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

module.exports = function(done){

  $.checkLogin = function (req, res, next){

    if(!(req.session.user && req.session.user._id)) return next(new Error('please login firstly'));

    next();

  };

  done();

};
