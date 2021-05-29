
$('.carousel').carousel({
    interval: 2000
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});



// chart

    
$(function() {
    $('.chart').easyPieChart({
        size: 180,
        barColor: '#e80566',
        scaleLength: 0,
        lineWidth: 15,
        trackColor: '#ffffff',
        lineCap: 'round',
        animate: 2000,
    });
});