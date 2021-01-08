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

// tab
var tabList = document.querySelectorAll('.tab_btn_area li')
Array.prototype.forEach.call(tabList, function(list) {
    list.children[0].addEventListener('click', function(e) {
        e.preventDefault()
        var tabContent = document.querySelectorAll('.tab_cont_area .tab_cont')
        var tabNum = this.parentElement.getAttribute('data-tabnum')
        Array.prototype.forEach.call(tabContent, function(cont, i) {
            cont.style.display = 'none'
            tabList[i].className = ''
        })
        tabContent[tabNum].style.display = 'block'
        if(list.className.indexOf('on') == -1) {
            list.className = 'on'
        }
    })
})