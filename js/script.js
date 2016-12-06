$(function() {
    $(".tab").not("#tab-1").hide();

    $(".headings li").click(function() {
        var heading = $(this).attr("id");
        $("#tab-" + heading).show();
    })
});
