
$(function() {    
    var viewModel = function(){
    	var that = this;
    	
    	that.selectedIndex = ko.observable(0);
    	that.itemCount = tabPanelItems.length;
    	
    	that.tabPanelOptions = {
    		height: function(){ return 400 + "px"; },
    		dataSource: tabPanelItems,
    		selectedIndex: that.selectedIndex,
    		loop: true,
    		animationEnabled: true,
    		swipeEnabled: true,
    		titleTemplate: "title",
    		itemTemplate: "customer",
    		onSelectionChanged: selChanged,
            onContentReady: load(0)
        };
    };
    ko.applyBindings(new viewModel(), document.getElementById("tabpanel"));
});

function selChanged(e) {
    var tab = e.model.selectedIndex();
    load(tab);
}

function load(tab) {
    //debugger;
    $(".content").html('');
    $.get('partials/tab' + tab + '.html', function(html) {
        $(".content").html(html);
    });
    
}