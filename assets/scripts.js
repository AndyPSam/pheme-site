$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
});

function toggleMenu() {
    if (document.getElementById("menu").style.width > "0rem"){
        document.getElementById("menu").style.width = "0rem";
        document.getElementById("menucaret").style.transform = "rotate(0deg)";
    } else{
        document.getElementById("menu").style.width = "15rem";
        document.getElementById("menucaret").style.transform = "rotate(45deg)";
    }
}

function toggleKnowMore() {
    if (document.getElementById("knowbox").style.maxHeight > "0rem"){
        document.getElementById("knowbox").style.maxHeight = "0rem";
        document.getElementById("knowmorecaret").style.transform = "scaleY(1)";
    } else{
        document.getElementById("knowbox").style.maxHeight = "60rem";
        document.getElementById("knowmorecaret").style.transform = "scaleY(-1)";
    }
}