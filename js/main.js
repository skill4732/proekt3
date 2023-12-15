$(document).ready(function() {
    function scroll(id) {
        $('html, body').stop().animate({scrollTop: $('#' + id).offset().top}, 600);
    }
    
    $('#links-ul li').click(function(e) {
        scroll($(this).attr('id').substring(1));
        e.preventDefault();
        return false;
    });
    $('#top-img').click(function(e) {
        scroll('header');
        e.preventDefault();
        return false;
    });
});

function clickLink(e) {
    $('#links-ul li').css('list-style-type', 'circle');
    e.setAttribute('style', 'list-style-type: disc !important;');
}

var pos1, pos2, pos3, pos4, pos5, pos6, scr = true;
window.onscroll = function() {
    if (!scr) return;
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (document.getElementById('header').getBoundingClientRect().bottom + y > y + 100) {
        clickLink(document.getElementById('lheader'));
        return;
    }
    var divs = document.getElementById('container-child').children;
    for (var i = 0, div; div = divs[i]; i++) {
        if (div.getBoundingClientRect().bottom + y > y + 100) {
            var el = document.getElementById('l' + div.id);
            if (!el) break;
            clickLink(el);
            break;
        }
    }
    for (var i = 0, div; div = divs[i]; i++) {
        if (div.getBoundingClientRect().top + y > y + 80) {
            if (!pos1 && div.id == 'pos1') {
                div.style.opacity = '1';
                $('#pos1').animate({right: '+=150%'}, 'fast');
                pos1 = true;
            } else if (!pos2 && div.id == 'pos2') {
                div.style.opacity = '1';
                $('#pos2').animate({left: '+=150%'}, 'slow');
                $('#pos2').rotate({angle: 0, animateTo: 360});
                pos2 = true;
            } else if (!pos3 && div.id == 'pos3') {
                div.style.opacity = '1';
                $('#pos3').animate({right: '+=150%'}, 'slow');
                $('#pos3').rotate({angle: 0, animateTo: 360});
                pos3 = true;
            } else if (!pos4 && div.id == 'pos4') {
                div.style.opacity = '1';
                $('#pos4').animate({width: '+=100%'}, 'slow');
                pos4 = true;
            } else if (!pos5 && div.id == 'pos5') {
                div.style.opacity = '1';
                $('#pos5').animate({width: '+=100%'}, 'slow');
                pos5 = true;
            } else if (!pos6 && div.id == 'pos6') {
                div.style.opacity = '1';
                $('#pos6').animate({left: '+=150%'}, 'fast');
                $('#pos6 img').animate({width: '+=260px'}, 'slow');
                pos6 = true;
            }
            break;
        }
    }
}

var slwidth = 600;
var sltimer;
var slms = 4000;
$(function() {
    $('#slides-ul').width($('#slides-ul').children().length * slwidth);
    sltimer = setInterval(nextSlide, slms);
    $('#slides').hover(function() {
        clearInterval(sltimer);
    }, function() {
        sltimer = setInterval(nextSlide, slms);
    });
    $('#next-slide').click(function() {
        clearInterval(sltimer);
        nextSlide();
        sltimer = setInterval(nextSlide, slms);
    });
    $('#prev-slide').click(function() {
        clearInterval(sltimer);
        prevSlide();
        sltimer = setInterval(nextSlide, slms);
    });
});

function nextSlide() {
    var slide = parseInt($('#slides-ul').data('current')) + 1;
    if (slide >= $('#slides-ul').children().length) slide = 0;
    $('#slides-ul').animate({left: -slide * slwidth}, 500).data('current', slide);
}

function prevSlide() {
    var slide = parseInt($('#slides-ul').data('current')) - 1;
    if (slide < 0) slide = $('#slides-ul').children().length - 1;
    $('#slides-ul').animate({left: -slide * slwidth}, 500).data('current', slide);
}

function showSkype() {
    if (device.mobile()) {
        prompt(document.getElementById('skype-title').innerHTML, document.getElementById('skype-text').getAttribute('value'));
        return;
    }
    document.getElementById('skype-box').style.display = 'block';
    $('#skype-box').animate({
        top: '+=60%',
        opacity: '+=1'
    }, 'slow');
}

function closeSkype() {
    $('#skype-box').animate({
        top: '-=60%',
        opacity: '-=1',
        display: 'none'
    }, 'slow', function() {
        document.getElementById('skype-box').style.display = 'none';
    });
}

$(document).ready(function() {
    $("[href$='.jpg']").click(function(e) {
        if (device.mobile()) return true;
        var link = $(this).attr('href');
        document.getElementById('ib-open').setAttribute('onclick', 'window.open("' + link + '")');
        document.getElementById('ib-show').setAttribute('src', '');
        document.getElementById('ib-show').setAttribute('src', link);
        document.getElementById('image-box').style.display = 'block';
        $('#image-box').animate({
            bottom: '+=160%',
            opacity: '+=1'
        }, 'fast');
        return false;
    });
});

function closeImageBox() {
    $('#image-box').animate({
        bottom: '-=160%',
        opacity: '-=1'
    }, 'slow', function() {
        document.getElementById('image-box').setAttribute('display', 'none');
    });
}

$('footer').bind('inview', function(event, view) {
    if (!pos6 && view) {
        displayAll();
        scr = false;
    }
});
