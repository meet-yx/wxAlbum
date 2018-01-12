/**
 * Created by zy on 2017/12/29.
 */
"use strict";
const uploadModal = require("../modal/uploadModal.js");

module.exports={

    uploadImg(req,res){
        var albumId=req.body.albumId
        var fname = req.files.file.path.replace("public\\uploads\\", "").replace("public/uploads/", "");
        fname="http://172.16.10.20:8888/uploads/"+fname;
        //console.log(fname)
        uploadModal.uploadImg(fname,albumId).then(function(data){
            res.json(data)
        }).catch(function(err){
            console.log(err)
        })
    },
    getUserId(req,res){
        let userName=req.query.userName;
        uploadModal.checkUserId(userName).then(function(data){
            if(data.length!=0){
                res.json(data)
            }else{
                uploadModal.addUser(userName).then(function(data){
                    return uploadModal.checkUserId(userName)
                }).then(function(data){
                    res.json(data)
                })
            }
        }).catch(function(err){
            console.log(err);
        })
    },
    albumList(req,res){
        uploadModal.albumList().then(function(data){
                res.json(data)
        }).catch(function(err){
            console.log(err);
        })
    },
    addAlbum(req,res){
        let u_id = req.body.u_id;
        let a_name = req.body.a_name;
        let a_thumbnail = req.body.a_thumbnail;
        uploadModal.addAlbum(u_id,a_name,a_thumbnail).then(function(data){
                res.json(data)
        }).catch(function(err){
            console.log(err);
        })
    },
    imgList(req,res){
        let a_id = req.body.a_id;
        uploadModal.imgList(a_id).then(function(data){
                res.json(data)
        }).catch(function(err){
            console.log(err);
        })
    }
};

