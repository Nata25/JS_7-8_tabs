$(function() {
    $(".heading").click(function() {
        $("li").not(this).removeClass("heading_active");
        $(".tab").removeClass("tab_active");

        $(this).addClass("heading_active");
        var currentTab = $("#tab-" + $(this).attr("id"));
        currentTab.addClass("tab_active");
        var zIndex = currentTab.css("z-index");
        currentTab.css("z-index", zIndex++);
    }); // end of listener
}); // end of ready()
