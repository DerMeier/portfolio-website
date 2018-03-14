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

    $('.js-filter-btn ').click(function () {
        var filter = $(this).data('filter');

        if (filter === 'all') {
            $gridItem
                .appendTo($grid)
                .find('.js-portfolio-image-link').modaal({
                type: 'image'
            });
        }
        else {
            $gridItem
                .appendTo($grid)
                .css('top','')
                .not('[data-filter*="' + filter + '"]')
                .remove()
                .find('.js-portfolio-image-link').modaal({
                type: 'image'
            });
        }
        $grid.masonry("reloadItems").masonry();
    })
}(jQuery));
