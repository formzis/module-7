/* window.onload = function(){

    window.onresize = function(){
        console.log(window.innerWidth);
        
    }

} */

$(function(){
       
    var $mt = $('nav .menu_toggle');
    var $menu = $('nav .menu-disp-480');

    $(window).resize(function(){
        if($menu.css('display') == 'none' && window.innerWidth > 480){
            $menu.show();
        }
    });
    
    $mt.click(function(){
        $menu.slideToggle(500);
    });
    
});








/* $(function(){
       
    var $mt = $('nav .menu_toggle');
    var $menu = $('nav ul');

    $(window).resize(function(){
        if($menu.css('display') == 'none' && window.innerWidth > 680){
            $menu.show();
        }
    });
    
    $mt.click(function(){
        $menu.slideToggle(500);
    });
    
}); */