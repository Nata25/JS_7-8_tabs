$(function() {

    $("#tab-h1").show();

    $(".heading").click(function() {

        if ($(this).hasClass("active")) { return; }

        $("li").not(this).removeClass("active");
        $(".tab").hide();

        $(this).addClass("active");
        var currentTab = $("#tab-" + $(this).attr("id"));
        currentTab.fadeIn(300);
    }); // end of click

    $(".input").hover(
        function() {
            $(this).prev().children(".tooltip").fadeIn(300);
        },
        function() {
            $(this).prev().children(".tooltip").fadeOut(300);
        }
    ); // end of hover

}); // end of ready()
