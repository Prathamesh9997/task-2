//1. Create a request variable
var request = new XMLHttpRequest();
//2. Create a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3. Send a request
request.send();
//4. Load the response
request.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
        console.log(data[i].name);
    }
}

