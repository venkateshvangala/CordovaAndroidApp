requirejs.config({
	
	"baseUrl" : "../",
	
    "paths": {
      "jquery" 		: "js/lib/jquery-2.0.0",
      "jqueryUi"	: 'js/lib/jquery-ui',
      "underscore"	: 'js/lib/underscore-min',
      "backbone"	: 'js/lib/backbone-min',
      "chosen"		: 'js/lib/chosen.jquery',
      "noty"		: 'js/lib/jquery.noty',
      "handlebars"	: 'js/lib/handlebars-4.0.5',
      "text"		: 'js/lib/text',
      "deviceutil"	: "js/lib/DeviceUtil"
    },
    "shim" : {
        "underscore" : {
            "exports" : "_"
        },
        "backbone" : {
            "deps"    : ["jquery", "underscore"],
            "exports" : "Backbone"
        }
    }
});

//require(["js/views/common/appView", "js/views/common/viewCreate", "js/controller/user-management-router"],
//function(AppView, ViewCreate, UserManagementRouter){
//	alert("test")
//	var appView = ViewCreate.create({}, 'AppView', AppView);
//	appView.render();
//	var userManagementRouter = new UserManagementRouter({appView : appView}); 
//});