
var vbkApp = angular.module('vbkApp', [ 'dx' ]);

vbkApp.controller('MainController', function($scope) {
    $scope.selectedIndex = 0;
    $scope.tabPanelOptions = {
    	height: function(){ return 400 + "px"; },
    	dataSource: tabPanelItems,
        //selectedIndex: $scope.selectedIndex,
    	loop: true,
    	animationEnabled: true,
    	swipeEnabled: true,
    	titleTemplate: "title",
    	itemTemplate: "customer",
    	onSelectionChanged: function() {
            debugger;
            var tab = $("#mainTab").dxTabPanel("instance");
            var idx = tab._options.tabIndex;
            load(idx);       
        },
        onContentReady: load(0)
    };
});

$(function() {
});

function load(tab) {
    //debugger;
    $(".content").html('');
    $.get('partials/tab' + tab + '.html', function(html) {
        $(".content").html(html);
    });
    
}