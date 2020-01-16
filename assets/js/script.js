//1er boutons qui clignote
function cligno (){
   $('.bloc1').fadeOut(800).fadeIn(800);
}
$(document).ready(function(){
    setInterval('cligno()',2200);
});
//FIn du 1er boutons qui clignote

//
// $(function(){
// $('div').click(function(){
// $(this).toggleClass('background');
// });
// });
