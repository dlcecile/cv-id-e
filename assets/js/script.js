//1er boutons qui clignote
function cligno (){
   $('.bloc1').fadeOut(800).fadeIn(800);
}
//je définis ma variable x
var x;
$(document).ready(function(){
//Similaire à setTimeout, elle déclenche répétitivement la même action à intervalles réguliers.
    x = setInterval('cligno()',2200);
//setTimeout définit une action à exécuter et un délai avant son exécution
    setTimeout('myStopFunction()', 5000);
});
function myStopFunction() {
//stop la fonction Interval
  clearInterval(x);
}
//FIn du 1er boutons qui clignote

//Au clique changement de couleur
// $(function(){
// $('.bloc').click(function(){
// $(this).toggleClass(background);
// });
// });
