$(function() {
    console.log("hello");
    $(".tab__text").hide();

    $(".tab__heading").click(function() {
        console.log("inslide click");
        $(this).next(".tab__text").show();
    })
});
