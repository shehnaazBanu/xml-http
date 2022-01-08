//step1 : create XHR object/constructor
var req = new XMLHttpRequest();
//step2 : open a connection
req.open('GET','https://restcountries.com/v2/all',true);
//step3 : Initiate a connection
req.send();
//step4 : once the data loaded from the server successfully
req.onload = function()
{
    //here we are converting
    var result = JSON.parse(req.response);
    //https://restcountries.com/v2/all.log(result)
    for(var i=0;i<result.length;i++){
        console.log(result[i].name+" "+result[i].capital);
    }
}