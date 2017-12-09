	function function1() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
   var children = ul.children.length + 1;
   var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

   
  var dataEntered=document.getElementById('myInput').value;
  if(dataEntered=='')
      alert("You must write something!");
else{
   li.appendChild(document.createTextNode(dataEntered));
  li.appendChild(span);
  li.setAttribute("id", children); // added line
  ul.appendChild(li);   
}
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  } 
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
           
