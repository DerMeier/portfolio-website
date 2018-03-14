$('button').on('click', function(){
    $('button').removeClass('active')
    $(this).addClass('active');
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
