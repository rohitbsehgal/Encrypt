function encrypt(text, level){
  var x = [];
  for(var i = 0; i < text.length; i++){
    x.push(text.charCodeAt(i));
  }
  console.log(x);
  for(var j = 0; j < text.length; j++){
    crypt(x);
  }
  console.log("Secret !keep!:");
  console.log(x[x.length-1]);
  x.splice(x.length-1, 1);
  console.log(x);
}
function crypt(x){
  var random = Math.floor((Math.random() * 10) + 1);
  for(var j = 0; j < x.length; j++){
    x[j]*= random;
    
  }
  x.push(random);
  console.log(x);
}
