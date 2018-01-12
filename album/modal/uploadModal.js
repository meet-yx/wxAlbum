/**
 * Created by zy on 2017/12/29.
 */
"use strict";
const pool=require("./sqlPool.js");

module.exports={
    uploadImg(fname,albumId){
        return new Promise((resolve,reject)=>{
            let sql= `insert into albumList values(null,?,?,null,0,now(),default) `;
            pool.query(sql,[albumId,fname]).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })
        })
    },
    checkUserId(userName){
        return new Promise(function(resolve,reject){
            let sql="select * from user where u_name = ? and u_state = 1";
            pool.query(sql,[userName]).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },
    addUser(userName){
        return new Promise(function(resolve,reject){
            let sql="insert into user values (null,?,now(),default)";
            pool.query(sql,[userName]).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },albumList(){
        return new Promise(function(resolve,reject){
            let sql="select * from album order by a_top desc";
            pool.query(sql).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },
    addAlbum(u_id,a_name,a_thumbnail){
        return new Promise(function(resolve,reject){
            let sql="insert into album values (null,?,?,?,0,now(),default)";
            pool.query(sql,[u_id,a_name,a_thumbnail]).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },
    imgList(a_id){
        return new Promise(function(resolve,reject){
            let sql="SELECT * FROM album AS a LEFT JOIN albumlist AS i ON a.a_id = i.a_id WHERE a.a_id = ? order by l_date desc";
            pool.query(sql,[a_id]).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    }
};

