/*progress bar*/

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

/*Add content*/
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

/*close button*/

$(".invoice-close").click(function() {
    $(this).parent().remove();
})

/*Add invoice bar*/
$("#addinvoice").click(function() {
    $("#container").append('<div class="band d-flex flex-wrap"><input class="mr-auto w-auto p-2" type="text" value="" placeholder="Title Goes Here"><input class="mr-4 w-auto p-2 invoice-txt" type="text" value="" placeholder="2500.00"><i class="far fa-times-circle invoice-close"></i></div>');
    $(".invoice-close").click(function() {
        $(this).parent().remove();
    })
});

/*Add new species*/
$(".close-chk").click(function() {
    $(this).parent().remove();
})
$("#addspecies").click(function() {
    $("#species").append('<div class="box d-flex"> <span class="img-round"> <img src = "./images/bird.png" alt = "" class = "height-17" > </span> <span> <p> English Name </p> <p class = "fs-12 light-gray"> Scientific Name </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*Add atttractions*/
$("#addattractions").click(function() {
    $("#newattraction").append('<div class="col-lg-3 col-md-6 col-sm-12"><div class="main-attraction"><img src="./images/surfing.png" class="img-fluid attraction border-10" alt=""> </div><div class="attraction-txt mb-3 d-flex justify-content-between align-items-center"><p class="pt-3">Title Goes Here</p><input type="checkbox" class="pt-2" id="main01" name="radio-group"><label for="main01" class="fs-14"></label></div></div>');

});
$("#addattractions1").click(function() {
    $("#newattraction1").append('<div class="col-lg-3 col-md-6 col-sm-12"><div class="main-attraction"><img src="./images/surfing.png" class="img-fluid attraction border-10" alt=""> </div><div class="attraction-txt mb-3 d-flex justify-content-between align-items-center"><p class="pt-3">Title Goes Here</p><input type="checkbox" class="pt-2" id="main01" name="radio-group"><label for="main01" class="fs-14"></label></div></div>');

});
$("#addattractions2").click(function() {
    $("#newattraction2").append('<div class="col-lg-3 col-md-6 col-sm-12"><div class="main-attraction"><img src="./images/surfing.png" class="img-fluid attraction border-10" alt=""> </div><div class="attraction-txt mb-3 d-flex justify-content-between align-items-center"><p class="pt-3">Title Goes Here</p><input type="checkbox" class="pt-2" id="main01" name="radio-group"><label for="main01" class="fs-14"></label></div></div>');

});