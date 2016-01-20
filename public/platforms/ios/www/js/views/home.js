define(['jquery', 'underscore', 'backbone', "text!templates/home.html"], 
	function($, _, Backbone, homeTemplate){
	"use strict";

	var HomeView = Backbone.View.extend({
		
		el : "#main-container",

		initialize : function(options){
			console.log("Home view initialize");
		},
		
		render : function(){
			var self = this;
			$(this.el).html(homeTemplate);
		}
	});
	return HomeView;
});