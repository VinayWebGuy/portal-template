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
        $("html").css("--sidebar-width", "250px");
    } else {
        $("html").css("--sidebar-width", "0px");
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
    $('.security-toggle input[type="checkbox"]').on('change', function() {
        var $div = $(this).closest('.security-toggle');
        
        if ($(this).is(':checked')) {
            $div.addClass('checked'); 
        } else {
            $div.removeClass('checked'); 
        }
    });
});










