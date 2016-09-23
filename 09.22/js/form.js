
var shengFenCtrl =document.querySelector('#shengfen');

var arrShengFen=[{id:"0",name:"请选择"},

   {id:"1",name:"河南省"},
   {id:"2",name:"河北省"},
   {id:"3",name:"湖北省"},
   {id:"4",name:"湖南省"},
];

var arrShi=[{id:"1-1",name:"郑州",fid:"1"},

     {id:"1-2",name:"南阳",fid:"1"},
     {id:"2-1",name:"石家庄",fid:"2"},
     {id:"2-2",name:"秦皇岛",fid:"2"},
     {id:"3-1",name:"武汉",fid:"3"},
     {id:"3-2",name:"黄石",fid:"3"},
     {id:"4-1",name:"长沙",fid:"4"},
];

var arrQu=[{id:"1-1-1",name:"二七区",fid:"1-1"},

  {id:"1-1-2",name:"中原区",fid:"1-1"},
  {id:"1-2-1",name:"一个区",fid:"1-2"},
  {id:"2-1-1",name:"S个区",fid:"2-1"},
  {id:"2-2-1",name:"Q个区",fid:"2-2"},
  {id:"3-1-1",name:"W个区",fid:"3-1"},
  {id:"3-2-1",name:"H个区",fid:"3-2"},
  {id:"4-1-1",name:"C个区1",fid:"4-1"},
  {id:"4-1-2",name:"C个区2",fid:"4-1"},

];

 initCtrlShengFen();
  function initCtrlShengFen() {

    var strHtml='';

    arrShengFen.forEach(function (item) {

     strHtml +='<option value="'+item.id+'">'+item.name+'</option>';

    });
     shengFenCtrl.innerHTML=strHtml;
  }



 function selChange() {
   console.log(shengFenCtrl.value);

   var result =arrShi.filter(function (item) {

  if (item.fid == shengFenCtrl.value) {

     return item;
   }

   });
     initCtrlShi(result);


   console.log(shiCtrl.value);

   var result =arrQu.filter(function (item) {

  if (item.fid == shiCtrl.value) {

     return item;
   }
   });
  initCtrlQu(result);


 }

 var shiCtrl =document.querySelector('#shi');

function initCtrlShi(data) {
  var strHtml ='';
  if(data.length== 0){
    data.push({id:"0",name:"请选择"});
  }

data.forEach(function (item) {

   strHtml+='<option value="'+item.id+'">'+item.name+'</option>';


});

shiCtrl.innerHTML=strHtml;


}


//区:
function selQuChange() {
  console.log(shiCtrl.value);

  var result =arrQu.filter(function (item) {

 if (item.fid == shiCtrl.value) {

    return item;
  }
  });
initCtrlQu(result);
}

var quCtrl =document.querySelector('#qu');

function initCtrlQu(data) {
 var strHtml ='';
 if(data.length== 0){
   data.push({id:"0",name:"请选择"});
 }

data.forEach(function (item) {

  strHtml +='<option value="'+item.id+'">'+item.name+'</option>';


});

quCtrl.innerHTML=strHtml;


}
