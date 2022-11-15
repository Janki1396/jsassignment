document.addEventListener('DOMContentLoaded',function(){
    var checkPageButton=document.getElementById('clikme');
    checkPageButton.addEventListener('click',function(){
        chrome.tabs.getSelected(null, function(tab) {
            alert("Hello Its my first chrome extension"); 
        });
    },false);
},false);