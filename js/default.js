var remainder3;
var remainder5;
var message;
document.getElemenybyId('form').onsubmit = function(){
};
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
