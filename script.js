$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        if(position>=200){
            $('.nav-menu').addClass('custom-navbar');
        }else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        console.log(position);
        if(position>=650 && position<=1180){
            $(".camera-img").addClass("camera-effect");
            $(".mission-text").addClass("text-effect");
        }else{
            $(".camera-img").removeClass("camera-effect");
            $(".mission-text").removeClass("text-effect");
        }
    });
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value=='all'){
            $('.filter').show(300);
        }else{
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }
    });
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });
    
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        if(position>=4070){
            $('.pricing-card-1').addClass("move-from-left");
            $('.pricing-card-2').addClass("move-from-bottom");
            $('.pricing-card-3').addClass("move-from-right");
        }else{
            $('.pricing-card-1').removeClass("move-from-left");
            $('.pricing-card-2').removeClass("move-from-bottom");
            $('.pricing-card-3').removeClass("move-from-right");
        }
    });
    
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
    
});
