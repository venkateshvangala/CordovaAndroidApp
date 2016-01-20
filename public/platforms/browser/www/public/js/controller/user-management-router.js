define(['jquery', 'underscore', 'backbone', 'js/views/common/viewCreate', 'js/views/home'], function($, _, Backbone, ViewCreate, HomeView){
	
	var self, UserManagementRouter = Backbone.Router.extend({

		initialize : function(options){
			Backbone.history.start();
			var self = this;
		},
		
		routes : {
			"" : 'renderHome'
		},
		
		renderHome : function(){
			var homeView = ViewCreate.create(self, 'HomeView', HomeView);
			homeView.render();
		}
	});
	
	return UserManagementRouter;
	
});