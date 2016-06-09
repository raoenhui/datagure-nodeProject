'use strict'

/**
 * pratice Node.js project
 *
 *@author iceRao <670615769@qq.com>
 */

 import path from 'path';
 import ProjectCore from 'project-core';
 const $ = global.$ = new ProjectCore();



 // 加载配置文件
 $.init.add((done)=>{
   $.config.load(path.resolve(__dirname,'config.js'));
   const env = process.env.NODE_ENV || null;
   if(env){
     $.config.load(path.resolve(__dirname,'../config',env + '.js'));    //  env='./config/dev.js';
   }
   $.env = env;
   done();
 });


//初始化MongoDB
$.init.load(path.resolve(__dirname,'init','mongodb.js'));
//加载Model.js
$.init.load(path.resolve(__dirname,'models'));


//初始化Express
$.init.load(path.resolve(__dirname,'init','express.js'));
//加载路由
$.init.load(path.resolve(__dirname,'routes'));

 //初始化
 $.init((err)=>{
   if(err){
     console.error(err);
     process.exit(-1);
   }else{
     console.log('inited [env=%s]', $.env);
   }

   const item = new $.model.User({
     name: `User${$.utils.date('YmdHms')}`,
     password: '123456test',
     nickname: '测试用户',
   });
   item.save(console.log);

 });
