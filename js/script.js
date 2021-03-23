let actual = 0;
let previous = 0;

$(".next").click(function() {
    if (actual == 0) {
        actual++;
        $('.stage' + actual).show();
        $('.stage' + previous).hide();
        $('.bar' + actual).addClass('active');
    } else {
        previous = actual;
        actual++;
        $('.stage' + actual).show();
        $('.stage' + previous).hide();
        $('.bar' + actual).addClass('active');
    }
});

$(".previous").click(function() {
    if (previous == 0) {
        actual = previous;
        $('.stage' + actual).show();
        $('.stage' + (actual + 1)).hide();
        $('.bar' + (actual + 1)).removeClass('active');
    } else {
        actual = previous;
        previous--;
        $('.stage' + actual).show();
        $('.stage' + (actual + 1)).hide();
        $('.bar' + (actual + 1)).removeClass('active');
    }
});


$('.add-check').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.demo1 .box-list-item').append("<label><input type='checkbox' name='Cuisine" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});
$('.add-check-service').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.demo1 .box-list-item').append("<label><input type='checkbox' name='services" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});