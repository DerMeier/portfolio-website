function addiere(a, b) {
    console.log(a + b);
}

function versteckeAlleBilderDieNichtBWSind() {
    $('.portfolio-item:not(.1)').hide();
    $('.portfolio-item.1').show();
}

function zeigeAlleBilder() {
    $('.portfolio-item').show();
}

function versteckeAlleBilderDieNichtManipulateSind() {
    $('.portfolio-item:not(.2)').hide();
    $('.portfolio-item.2').show();
}
