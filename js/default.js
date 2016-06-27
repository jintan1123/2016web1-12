var message;
document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').number.value)
};
var query = window.location.search.substring( 1 );
var parameters = query.split( '&' );
var number = 100;
if(parameters){
 var element = parameters[0].split( '=' );
 number = parseInt(element[1]);
}

for(var i = 1; i <= number; i++){
  var li = document.createElement('li');
  if(i%3){
    message='Fizz'
  }
  if(i%5){
    message='Buzz'
  }
  else{
    li.textContent = i;
  }
  document.getElementById('list').appendChild(li);
}
