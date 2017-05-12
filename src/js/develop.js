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
function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('player', {
        videoId: 'gGW7lLbx8kE',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'modestbranding':1,
            'rel':0,
            'showinfo':0
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
    function onPlayerReady() {
        console.log(player);
    }

}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function () {
    butter();

});