"use strict";

const fs=require('fs');
const path=require('path');

const makeFile=(path,callback)=>{
    fs.writeFile(path,'New file, New content','utf8',(err)=>{
        if(err) return callback(err);

        console.log('파일이 생성됐습니다.');
        callback(null);
    });
};


const appendFIle=(path,callback)=>{
    fs.appendFile(path,'\nUpdate file',(err)=>{
        if(err)return callback(err);

        console.log('파일내용을 추가합니다.');
        callback(null);
    })
};

const printErrifExist=(err)=>{
    if(err)console.log(err);
}

const filePath=path.join(__dirname,'js200','hello.txt');

fs.open(filePath,'wx',(err,id)=>{
    if(err&&err.code==='EEXIST') 
     return appendFIle(filePath,(err)=> printErrifExist(err));
    if(err) return callback(err);

    return makeFile(filePath,(err)=>printErrifExist(err));
});