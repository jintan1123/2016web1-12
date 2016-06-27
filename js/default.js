var remainder3;
var remainder5;
document.getElemenybyId('form').onsubmit = function(){
  window.alert(document.getElementById('form').number.value);
};
for(var i = 1; i < 100; i++){
  var li = document.createElement('li');
  remainder3 = i%3;
  remainder5 = i%5;
  if(remainder3=0){
  }
  if(remainder5=0){
  }
  else{
  }
  document.getElementById('list').appendChild(li);
}
