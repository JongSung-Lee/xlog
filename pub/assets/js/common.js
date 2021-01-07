$(document).ready(function(){
    $('.lnb .depth1 li').on('click', function(){
        var $self = $(this);
        var $depth2 = $self.find('.depth2');
        var $liOn = $('.lnb .depth1 li.on');
        $liOn.removeClass('on');
        $liOn.find('.depth2').css({
            'display': 'none'
        });
        $self.addClass('on');
        $depth2.animate({
            'height': 'toggle'
        }, 250);
    });
});