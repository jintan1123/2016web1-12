var remainder3;
var remainder5;
var message;
document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').number.value)
};
var query = window.location.search.substring( 1 );
var parameters = query.split( '&' );
var number = 100;
if(parameters){
 var element = parameters[0].split( '=' );
 number = pareInt(element[1]);
}

for(var i = 1; i < number; i++){
  var li = document.createElement('li');
  remainder3 = i%3;
  remainder5 = i%5;
  if(remainder3=0){
    message='Fizz'
  }
  if(remainder5=0){
    message='Buzz'
  }
  else{
    li.textContent = i;
  }
  document.getElementById('list').appendChild(li);
}
