function displayAll() {
    $('#header').css('background', 'url(/lending/images/header-mob.jpg) no-repeat #756a58; background-size: cover; background-position: center;');
    $('.mid').css('float', NaN);
    $('.mid').css('clear', 'both');
    $('.mid').css('display', 'block');
    $('.mid').css('margin', '20px auto');
    $('.cont-img').css('opacity', '1');
    $('#contacts').css('left', '10px');
    $('#github-link').css('right', '10px');
    $('#pos1, #pos2, #pos3, #pos4, #pos5, #pos6').css('opacity', '1');
    $('#pos1').css('right', '0');
    $('#pos2, #pos6').css('left', '0');
    $('#pos3').css('right', '0');
    $('#pos4, #pos5').css('width', '100%');
    $('#pos6 img').css('width', '260px');
    $('#links').css('display', 'none');
}

if (device.mobile()) {
    displayAll();
    scr = false;
}
