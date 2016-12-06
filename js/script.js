$(function() {
    
    $(".tab").not("#tab-h1").hide();

    $(".heading").click(function() {
        $("li").not(this).removeClass("heading_active");
        $(".tab").hide();

        $(this).addClass("heading_active");
        var currentTab = $("#tab-" + $(this).attr("id"));
        currentTab.fadeIn(300);
    }); // end of listener
}); // end of ready()
