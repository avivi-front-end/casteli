function butter(){
    var butt = $('.butter');
    var cont = $('.header__nav');
    if($('.butter').css('display') == "block") cont.removeClass('show');
    butt.click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            cont.addClass('show');
        }else{
            cont.removeClass('show');
        }
    });
}
var player;
function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
        videoId: youtubeVideoID,
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'modestbranding':1,
            'rel':0,
            'showinfo':0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    function onPlayerReady() {
        onClickPlay();
    }
    function onPlayerStateChange() {
        if(player.getPlayerState() == 0){
            changeBanner(1);
        }
    }
    function onClickPlay(){
        var butt = $('.top-block__play');
        butt.css('opacity', 1);
        butt.click(function (){
            player.playVideo();
            changeBanner(0);
        });
    }

    function changeBanner(num){
        var img = $('.top-block__vid-img');
        var vid = $('.video__tube');
        if(num == 0){
            $('.top-block__content').slideUp();
            img.css('opacity', 0);
            vid.css('opacity', 1);
            setTimeout(function () {
                img.css('z-index', 1);
                vid.css('z-index', 20);
            },300)
        } else if(num == 1){
            $('.top-block__content').slideDown();
            img.css('opacity', 1);
            vid.css('opacity', 0);
            setTimeout(function () {
                img.css('z-index', 20);
                vid.css('z-index', 1);
            },300)
        }
    }
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



function autorizedClick() {
    var butt = $('.header__user');
    var cont = $('.header__user-nav');
    butt.click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            cont.addClass('show');
        }else{
            cont.removeClass('show');
        }
    });
    $(document).on('click touchstart',function (event){
        if (!cont.is(event.target) && cont.has(event.target).length === 0 && !butt.is(event.target) && butt.has(event.target).length === 0)
        {
            cont.removeClass('show');
            butt.removeClass('active');
        }

    });
}
function slidersCompany() {
    var slider =$('.company__slider');
    if(slider.length > 0){
        slider.each(function () {
            $(this).slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [{breakpoint: 1150, settings: {slidesToShow: 3 } },
                            { breakpoint: 550, settings: { slidesToShow: 2 } },
                            { breakpoint: 479, settings: { slidesToShow: 1 } } ]
            });
        });
    }
}
function sliderIndusties() {
    var slider = $('.industries__slider');
    if(slider.length > 0){
        slider.each(function () {
            $(this).slick({
                infinite: true,
                rows:3,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [{breakpoint: 1150, settings: {slidesToShow: 2 } },
                    { breakpoint: 767, settings: { slidesToShow: 2 } },
                    { breakpoint: 580, settings: { slidesToShow: 1 } } ]
            });
        });
    }
}
function dotted() {
    var dot = $('.dotted');
    if(dot.length > 0){
        dot.each(function(){
            $(this).dotdotdot();
            var that = $(this);
            $(window).resize(function () {
                that.trigger("update");
            });
        });

    }
}
$(document).ready(function () {
    butter();
    autorizedClick();
    slidersCompany();
    sliderIndusties();
    dotted();

});