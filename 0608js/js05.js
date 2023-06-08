var namespaceA=(function (){
   var privateVariable='비공개변수';
   return{
    publicApi:function(){
        console.log(privateVariable+'를 접근할수 있습니다');
    }
   } 
})();

namespaceA.publicApi();