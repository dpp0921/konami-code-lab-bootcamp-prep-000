const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var i = 0;
  var e = 0;
  const key = parseInt(e.which);
  if(key === code[i]){
    i++;
    if(i === code.length){
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
