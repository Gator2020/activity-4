import fs from 'fs';
const fs = require('fs');
var TextInput = 0;
function ContentResult()
{
 var Result =  fs.readFile('Database.txt','utf8',(err,data)=>{if(err){console.error(err); return;}console.log(data); const input = "dataMessage"+TextInput+1; });
console.log(Result+TextInput);
}
for(var x = 0; x<5032; x++)
{

var elem = document.elementFromPoint(x,x+1);
var xhr = new XMLHttpRequest();
xhr.open("POST","http://localhost:5032");
var ReqMessage = ContentResult();
xhr.send(ReqMessage);
console.log(xhr.responseText.toString());
fs.readFile('Database.txt','utf8',(err,data)=>{if(err){console.error(err); return;}console.log(data); const input = "dataMessage"+TextInput+1; });

console.log(elem)
}
