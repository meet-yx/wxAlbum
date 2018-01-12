/**
 * Created by zy on 2017/12/29.
 */
"use strict";
const myExpress=require("express");
const uploadRoute=myExpress.Router();//
const multer = require("multer");//文件上传模块
const uploadControl = require("../controller/uploadControl.js")

uploadRoute.route("/uploadImg.do").post(uploadControl.uploadImg);//上传图片
uploadRoute.route("/getUserId.do").get(uploadControl.getUserId);//获取用户名字
uploadRoute.route("/albumList.do").post(uploadControl.albumList);//获取相册列表
uploadRoute.route("/addAlbum.do").post(uploadControl.addAlbum);//新增相册
uploadRoute.route("/imgList.do").post(uploadControl.imgList);//获取相册中图片列表

module.exports = uploadRoute;
//console.log(req.files);
//uploads.single('minimg')
//var fname = req.files.minimg.path.replace("public\\uploads\\", "").replace("public/uploads/", "");
//var filename = req.file.filename;
//fname="/uploads/"+fname;
//modal.upload(fname).then(function(){})

//res.send(fname);