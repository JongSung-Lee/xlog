// lnb
var lnb = document.querySelectorAll('.lnb .depth1 > li > a');
for (i = 0; i < lnb.length; i++) { 
    lnb[i].addEventListener('click', function() { 
        this.parentNode.classList.toggle('on');
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') { 
            panel.style.display = 'none'; 
        } else { 
            panel.style.display = 'block'; 
        }
    }); 
}

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