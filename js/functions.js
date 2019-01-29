$(document).ready(function () {
    $('.color-block ul>li').click(function () {
        $('body').find('input[name="comment"]').val($(this).attr('value'));
        $('body').find('.color-block ul').children('li').removeClass('active');
        $('body').find('.info-block2 .content ul>li').children('div').removeClass('active');
        $('body').find('.info-block2 .preview>img').hide();
        $('body').find('.color-block ul>li.' + $(this).attr('class')).addClass('active');
        $('body').find('.info-block2 .content ul>li[value="' + $(this).attr('value') + '"]>div').addClass('active');
        $('body').find('.info-block2 .preview>img[alt="' + $(this).attr('value') + '"]').fadeIn();
        $(this).parent().children('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.info-block2 .content ul>li>div').click(function () {
        $('body').find('input[name="comment"]').val($(this).parent().attr('value'));
        $('body').find('.info-block2 .content ul>li').children('div').removeClass('active');
        $(this).parents('.right-side').find('.preview>img').hide();
        $('body').find('.color-block ul').children('li').removeClass('active');
        $('body').find('.info-block2 .content ul>li.' + $(this).parent().attr('class') + '>div').addClass('active');
        $('body').find('.info-block2 .preview>img[alt="' + $(this).parent().attr('value') + '"]').fadeIn();
        $('body').find('.color-block ul>li[value="' + $(this).parent().attr('value') + '"]').addClass('active');
        $(this).parent().children('div').removeClass('active');
        $(this).addClass('active');
    });

    $('.mobile').on('click', function () {
        $('.navigation ul').slideToggle();

        $(document).click(function (event) {
            if ($(event.target).closest(".navigation").length)
                return;
            $(".navigation ul").slideUp();
            event.stopPropagation();
        });

        $('.navigation ul a').on('click', function () {
            $('.desctop').slideUp();
        });
    });

    GetCount();
});
//Timer
var today = new Date(),
    tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);
function GetCount() {
    dateNow = new Date();
    amount = tomorrow.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        $('.countdown').html('<div><span>00</span><p>Часов</p></div><b>:</b><div><span>00</span><p>Минут</p></div><b>:</b><div><span>00</span><p>Секунд</p></div>');
    } else {
        hours = 0;
        mins = 0;
        secs = 0;
        amount = Math.floor(amount / 1000);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        $('.countdown').html('<div><span>00</span><p>дней</p></div><b>:</b><div><span>' + hours + '</span><p>часов</p></div><b>:</b><div><span>' + mins + '</span><p>минут</p></div><b>:</b><div><span>' + secs + '</span><p>секунд</p></div>');
        setTimeout("GetCount()", 1000);
    }
}

//Scrolling
jQuery().ready(function () {
    $('a[href*=#]:not([href=#]):not(.fancybox):not(a[href="#close"])').click(function () {

        target = $(this).attr('href');
        console.log(target);
        $("html, body").animate({scrollTop: $(target).offset().top - 40}, 1000);
        return false;

    });
});