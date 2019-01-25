window.onload=function(){
    document.getElementById("result").style.display="none";
}; 

var url ="http://numbersapi.com/";
var response;
var res;

async function numcall(){
    
    var getnum=document.getElementById('searchBox').value;
    var num= getnum + "?json";
    response = await fetch(url+num) ;
    res = await response.json();
     console.log(res.text);
     document.getElementById("def").innerHTML=res.text;
     document.getElementById("result").style.display="block";
  }
  numcall();