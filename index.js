
/*
Combo-Box Viewer script- Created by and (c) Dynamicdrive.com
Visit http://www.dynamicdrive.com/ for this script and more
This notice MUST stay intact for legal use
*/

if (document.getElementById){
document.write('\n')
}

function contractall(){
if (document.getElementById){
var inc=0
while (document.getElementById("dropmsg"+inc)){
document.getElementById("dropmsg"+inc).style.display="none"
inc++
}
}
}

function expandone(){
if (document.getElementById){
var selectedItem=document.dropmsgform.dropmsgoption.selectedIndex
contractall()
document.getElementById("dropmsg"+selectedItem).style.display="block"
}
}

if (window.addEventListener)
window.addEventListener("load", expandone, false)
else if (window.attachEvent)
window.attachEvent("onload", expandone)

