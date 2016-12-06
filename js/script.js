$(function() {

    $("#tab-h1").show();

    $(".heading").click(function() {
        $("li").not(this).removeClass("active");
        $(".tab").hide();

        $(this).addClass("active");
        var currentTab = $("#tab-" + $(this).attr("id"));
        currentTab.fadeIn(300);
    });

}); // end of ready()
