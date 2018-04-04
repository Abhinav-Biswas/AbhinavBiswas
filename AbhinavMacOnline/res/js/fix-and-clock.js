$(document).ready(function () {
    //-----------------------------------------------------------------------------------
    //	0.	Modernizr test
    //-----------------------------------------------------------------------------------
    if (Modernizr.cssanimations) {
        $('#fail').remove();
    } else {
        $('#fail').addClass('visible');
    }

    //-----------------------------------------------------------------------------------
    //	1.	Clock
    //-----------------------------------------------------------------------------------

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#DateAbbr').html(dayNames[newDate.getDay()].substr(0, 3) + " ");

    setInterval(function () {
        var minutes = new Date().getMinutes();
        $(".min, .mins").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function () {
        var hours = new Date().getHours();
        $(".hours, .hour").html((hours < 10 ? "0" : "") + hours);
    }, 1000);

    var newYear = (new Date).getFullYear();
    $('#currentYear').html(newYear + " ");

    //-----------------------------------------------------------------------------------
    //	2.	Fix Classes after Validate Login
    //-----------------------------------------------------------------------------------

    $('.submit').click(function () {
        //var ValPassword = $('#password').val() === 'guest';
        //        if (ValPassword === true) {
        //$('input[type=password]').addClass('valid');
        $('.tooltip-pass').hide();
        //$('.submit').removeClass('submit').addClass('charge');
        $('#pageLogin').addClass('initLog').delay(1900).queue(function () {
            $(this).removeClass('initLog').addClass('initLogExit');
            $(this).dequeue();
        });;
        $('#page, #head').delay(2500).queue(function () {
            $(this).addClass('vis');
            $(this).dequeue();
        });
        $('.window').delay(3000).queue(function () {
            $(this).addClass('windows-vis');
            $(this).dequeue();
        });
        event.preventDefault();
        //        } else {
        //            $('.tooltip-pass').hide();
        //            $('input[type=password]').select();
        //            $('.validate').addClass('error').delay(210).queue(function () {
        //                $(this).removeClass('error');
        //                $(this).dequeue();
        //                $('.tooltip-pass').show();
        //            });
        //            return false;
        //        }
    });

    //-----------------------------------------------------------------------------------
    //	3.	Draggable Windows
    //-----------------------------------------------------------------------------------

    $('.content').remove();

    var a = 3;
    $('.content,.specific,.project,.share,.safari,.safari-github,.safari-slideshare,.safari-testimons,.safari-posts,.safari-textEdit,.safari-blog,.safari-search,.safari-sound,.safari-contact,.safari-calendar').draggable({
        handle: '.title-inside',
        start: function (event, ui) {
            $(this).css("z-index", a++);
        }
    });
    $(".window").draggable({
        handle: '.titleInside, .title-mac, .tab',
        refreshPositions: true,
        containment: 'window',
        start: function (event, ui) {
            $(this).css("z-index", a++);
        }
    });


    //-----------------------------------------------------------------------------------
    //	4.	Dock
    //-----------------------------------------------------------------------------------

    $('.dock ul li').hover(
        function () {
            $(this).addClass('ok').prev().addClass('prev').prev().addClass('prev-ancor');
            $(this).addClass('ok').next().addClass('next').next().addClass('next-ancor');
        },
        function () {
            $('.dock ul li').removeClass('ok prev next next-ancor prev-ancor');
        }
    );

    //-----------------------------------------------------------------------------------
    //	5.	Hide and Close
    //-----------------------------------------------------------------------------------
    var left = 20 + '%';
    var top = 5 + '%';
    var item = $('<div class="fresh"></div>').hide();
    var itemR = $('<div class="fresh"></div>').hide();

    $("a[data-rel=close]").click(function (e) {
        e.preventDefault();
        $(this.hash).fadeOut(200, function () {
            $(this).css({
                top: top,
                left: left
            });
        });
    });

    $("a[data-rel=show]").click(function (e) {
        e.preventDefault();
        $(this.hash).show();
    });

    $(".dock li a[data-rel=showOp]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            $(this).append(item);
            item.fadeIn(500);
            $(this).dequeue();
        });
        $("#warning").delay(1600).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#warning a[data-rel=close]").click(function (e) {
        e.preventDefault();
        item.fadeOut(500);
        $(this.hash).hide();
    });

    $(".dock li a[data-rel=showOpTrash]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            $(this).append(itemR);
            itemR.fadeIn(500);
            $(this).dequeue();
        });
        $("#trash").delay(1630).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#trash a[data-rel=close]").click(function (e) {
        e.preventDefault();
        itemR.fadeOut(500);
        $(this.hash).hide();
    });


    $("a[data-rel=showOpSafari]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            $(this).append(itemR);
            itemR.fadeIn(500);
            $(this).dequeue();
        });
        $("#safari").delay(1600).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari a[data-rel=close]").click(function (e) {
        e.preventDefault();
        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-github]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            $(this).append(itemR);
            //            itemR.fadeIn(500);
            $(this).dequeue();
        });
        $("#safari-github").delay(1600).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-github a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-slideshare]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            $(this).append(itemR);
            //            itemR.fadeIn(500);
            $(this).dequeue();
        });
        $("#safari-slideshare").delay(1600).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-slideshare a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-testimons]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            //            $(this).append(itemR);
            //            itemR.fadeIn(500);
            $(this).dequeue();
        });
        $("#safari-testimons").delay(1600).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-testimons a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-posts]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-posts").delay(830).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-posts a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-textEdit]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-textEdit").delay(830).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-textEdit a[data-rel=close]").click(function (e) {
        e.preventDefault();
        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-blog]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-blog").delay(830).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-blog a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-search]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-search").delay(830).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-search a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-sound]").click(function (e) {
        e.preventDefault();
        $(this).addClass('bounce').delay(1600).queue(function () {
            $(this).removeClass('bounce');
            $(this).append(itemR);
            itemR.fadeIn(500);
            $(this).dequeue();
        });
        $("#safari-sound").delay(1600).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-sound a[data-rel=close]").click(function (e) {
        e.preventDefault();
        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-contact]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-contact").delay(830).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-contact a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $("a[data-rel=showOpSafari-launchPad]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-launchPad").delay(0).queue(function () {
            $(this).toggle("slow");
            $(this).dequeue();
        });
    });

    $("a[data-rel=showOpSafari-calendar]").click(function (e) {
        e.preventDefault();
        //        $(this).addClass('bounce').delay(1600).queue(function () {
        //            $(this).removeClass('bounce');
        //            $(this).append(itemR);
        //            //            itemR.fadeIn(500);
        //            $(this).dequeue();
        //        });
        $("#safari-calendar").delay(830).queue(function () {
            $(this).show();
            $(this).dequeue();
        });
    });

    $("#safari-contact a[data-rel=close]").click(function (e) {
        e.preventDefault();
        //        itemR.fadeOut(500);
        $(this.hash).hide();
    });

    $(".launchPad").click(function (e) {
        //        e.preventDefault();
        $("#safari-launchPad").hide("slow");
    });

    $(".mac_desktop").click(function (e) {
        //        e.preventDefault();
        $("#warning").hide();
        $("#trash").hide();
        $("#safari").hide();
        $("#safari-github").hide();
        $("#safari-slideshare").hide();
        $("#safari-testimons").hide();
        $("#safari-posts").hide();
        $("#safari-textEdit").hide();
        $("#safari-blog").hide();
        $("#safari-search").hide();
        $("#safari-sound").hide();
        $("#safari-contact").hide();
        $("#safari-launchPad").hide();
        $("#safari-calendar").hide();
        $("#spec").hide();
        $("#finder").hide();
    });

    $('iframe#MyIframes').attr('src', 'https://www.linkedin.com/in/abhinavbiswas/');
    $('iframe#MyIframes-slideshare').attr('src', 'http://www.slideshare.net/Abhinav_Biswas/slideshelf');
    $('iframe#MyIframes-testimons').attr('src', 'testimonials-3.html');
    $('iframe#MyIframes-posts').attr('src', 'http://abhinav-biswas.blogspot.com');
    $('iframe#MyIframes-textEdit').attr('src', 'textEdit.html');
    $('iframe#MyIframes-blog').attr('src', 'http://abhinavbiswas.blogspot.com');
    $('iframe#MyIframes-sound').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54299475&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false');
    $('iframe#MyIframes-abhinav').attr('src', 'abhinav.html');
    $('iframe#MyIframes-contact').attr('src', 'contact.html');
    $('iframe#MyIframes-calendar').attr('src', 'https://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=abhinav.the.prince.7star%40gmail.com&amp;color=%23182C57&amp;src=%23contacts%40group.v.calendar.google.com&amp;color=%23B1440E&amp;src=en.indian%23holiday%40group.v.calendar.google.com&amp;color=%232F6309&amp;src=ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com&amp;color=%23875509&amp;ctz=Asia%2FCalcutta');


    //
    //<<<<<<< HEAD
    //    //    $('iframe#MyIframes-abhinav').bind('extTestimonTrigger', function (e) {
    //    //        e.preventDefault();
    //    //        //        alert("hello");
    //    //        $("#safari-testimons").delay(1230).queue(function () {
    //    //            $(this).show();
    //    //            $(this).dequeue();
    //    //        });
    //    //    });
    //=======
    //    $('iframe#MyIframes-abhinav').bind('extTestimonTrigger', function (e) {
    //        e.preventDefault();
    //        //        alert("hello");
    //        $("#safari-testimons").show();
    //    });
    //>>>>>>> origin/master



});