$(function() {

    $(".heading").click(function() {
        $(".heading").removeClass("heading_active");
        $(".tab").removeClass("tab_active");

        $(this).addClass("heading_active");
        var heading = $(this).attr("id");
        var currentTab = $("#tab-" + heading);
        var zIndex = currentTab.css("z-index");
        currentTab.css("z-index", zIndex++);
        currentTab.addClass("tab_active");
    })
});
