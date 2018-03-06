
//$('.portfolio-item').data('filter', 'schwarzweiss').css('outline', '3px solid pink');

function zeigeAlleBilder() {
    $('.portfolio-item').show();
}

function FilterAlleSchwarzWeissBilder() {
    //$('.portfolio-item').data('filter', 'schwarzweiss').hide();
    $('.portfolio-item:not(.bnw)').hide();
    $('.portfolio-item.bnw').show();
}

function FilterAllePsManipulationBilder() {
    $('.portfolio-item:not(.psm)').hide();
    $('.portfolio-item.psm').show();
}

function FilterAlleKohleBilder() {
    $('.portfolio-item:not(.ccd)').hide();
    $('.portfolio-item.ccd').show();
}
