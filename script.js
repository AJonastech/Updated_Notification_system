var readall = document.getElementById("readall");

var active = document.getElementsByClassName("active");
 
var items = document.getElementsByClassName("notification-data");

document.getElementById("counter").innerHTML = active.length;
readall.onclick = function(){
    for ($i=0;$i<active.length;$i++){
        active[$i].style.display="none";
    }

  document.getElementById("counter").innerHTML = "0";
}
for (i=0;i<items.length;i++){
  items[i].addEventListener("click", count);

}
function count(a){
var x = this.id;
var data = x.slice(x.length-1);
if (active[data-1].style.display!="none"){
  active[data-1].style.display ="none";
  items[data-1].style.backgroundColor='hsl(0,0%,100%)';
  document.getElementById("counter").innerHTML-=1;
}
}
