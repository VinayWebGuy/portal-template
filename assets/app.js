
$(document).ready(function () {
    function mobileProhib() {
        if ($(window).width() < 700) {
            $('.mobile-prohibitted').addClass('yes');
            $('.mobile-prohibitted').html('This portal can\'t be accessed on this device. Try on a big device.');
        } else {
            $('.mobile-prohibitted').removeClass('yes');
            $('.mobile-prohibitted').html('');
        }
    }
    $(window).resize(function () {
        mobileProhib();
    });
    mobileProhib();
});
$(document).ready(function() {
    $('input').attr('autocomplete', 'off');
});
$('.toggle-icon i').on('mouseover', function() {
    $('.sidebar').addClass('low')
})
$('.toggle-icon i').on('mouseleave', function() {
    $('.sidebar').removeClass('low')
})
$('.toggle-user-menu i').on('mouseover', function() {
    $('.user-menu-links').addClass('low')
})
$('.toggle-user-menu i').on('mouseleave', function() {
    $('.user-menu-links').removeClass('low')
})
$(".toggle-icon").click(function() {
    var icon = $(this).find('i');
    icon.toggleClass('fa-caret-left fa-caret-right');
    if ($(this).hasClass('closed')) {
        // $("html").css("--sidebar-width", "250px");
        $('.content').removeClass('collapsed')
    } else {
        // $("html").css("--sidebar-width", "0px");
        $('.content').addClass('collapsed')
    }
    $(this).toggleClass('closed');
});
$(".theme-icon").click(function() {
    $(this).find('i').toggleClass('fa-sun fa-moon');
    if ($("html").css("--clr3") === "#fff") {
        $("html").css("--clr3", "#222 ");
        $("html").css("--clr4", "#fff ");
    } else {
        $("html").css("--clr3", "#fff");
        $("html").css("--clr4", "#222");
    }
});
$(document).ready(function() {
    $('.haveSubmenu').click(function(event) {
        event.preventDefault();
        var submenu = $(this).next('.sidebar-submenu');
        submenu.toggleClass('expanded');
    });
    $('.counter-block span').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).data('counter')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});
$(".toggle-user-menu").click(function() {
    $(this).find('i').toggleClass('fa-caret-left fa-caret-right');
        $('.user-menu').toggleClass('active');
});
$(document).ready(function() {
    $('.single-toggle input[type="checkbox"]').on('change', function() {
        var $div = $(this).closest('.single-toggle');
        if ($(this).is(':checked')) {
            $div.addClass('checked'); 
        } else {
            $div.removeClass('checked'); 
        }
    });
    $('.single-toggle input[type="radio"]').on('change', function() {
        $('.single-toggle').removeClass('checked')
        var $div = $(this).closest('.single-toggle');
        if ($(this).is(':checked')) {
            $div.addClass('checked'); 
        } else {
            $div.removeClass('checked'); 
        }
    });
    $('.select_question').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('.select-question').each(function() {
            var questionText = $(this).find('.question-title').text().toLowerCase();
            if (questionText.indexOf(searchTerm) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
$('.add-ques-btn').click(function() {
    $('.backdrop').addClass('on')
    $('.modal').addClass('on')
})
$('.close-modal').click(function() {
    $('.backdrop').removeClass('on')
    $('.modal').removeClass('on')
})
