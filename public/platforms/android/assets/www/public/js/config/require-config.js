requirejs.config({
	
	"baseUrl": "public", 
	
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

require(['jquery', 'js/config/app'], function ($, App) {
	console.log("config")
    App.initialize();
});

