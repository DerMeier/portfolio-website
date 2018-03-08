
//$('.portfolio-item').data('filter', 'schwarzweiss').css('outline', '3px solid pink');

/*function zeigeAlleBilder() {
    $('.portfolio-item').show();
    $('.portfolio-list').masonry();
}

function FilterAlleKohleBilder() {
    $('.portfolio-item:not(.ccd)').hide();
    $('.portfolio-item.ccd').show();
    $('.portfolio-list').masonry({

        itemSelector:'.ccd'
    });
}

function FilterAlleSchwarzWeissBilder() {
    //$('.portfolio-item').data('filter', 'schwarzweiss').hide();
    $('.portfolio-item:not(.bnw)').hide();
    $('.portfolio-item.bnw').show();
    $('.portfolio-list').masonry({

        itemSelector:'.bnw'
    });
}

function FilterAllePsManipulationBilder() {
    $('.portfolio-item:not(.psm)').hide();
    $('.portfolio-item.psm').show();
    $('.portfolio-list').masonry({

        itemSelector:'.psm'
    });
}

function FilterAlleLogoBilder() {
    $('.portfolio-item:not(.logo)').hide();
    $('.portfolio-item.logo').show();
    $('.portfolio-list').masonry({

        itemSelector:'.logo'
    });
}

function FilterAllePlatzhalter() {
    $('.portfolio-item:not(.platzhalter)').hide();
    $('.portfolio-item.platzhalter').show();
    $('.portfolio-list').masonry({

        itemSelector:'.platzhalter'
    });
}*/

$('button').on('click', function(){
    $('button').removeClass('active')
    $(this).addClass('active');
});

$('.filter-icons').on('click', function(){
    $('.filter-icons').removeClass('active-icon')
    $(this).addClass('active-icon');
});

(function ($) {


    var $grid = $('.portfolio-list');
    var $gridItem = $('.portfolio-item');

    $grid.masonry({
        itemSelector: '.portfolio-item'
    });

    $('button').click(function () {
        var filter = $(this).data('filter');

        if (filter === 'all') {
            $gridItem.appendTo($grid);
        }
        else {
            $gridItem.appendTo($grid)
                .css('top','')
                .not('[data-filter*="' + filter + '"]')
                .remove();
        }
        $grid.masonry("reloadItems").masonry();
    })
}(jQuery));
