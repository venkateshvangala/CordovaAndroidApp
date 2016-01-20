define(["js/views/common/appView", "js/views/common/viewCreate", "js/controller/user-management-router", "deviceutil"], 
			function (AppView, ViewCreate, UserManagementRouter, DeviceUtil) {

	var App = {
			
        initialize: function () {
            alert("test")
            var options = { "app": this };
//            var dvcutil = new DeviceUtil();
//            this.screensize = dvcutil.getScreenSize();
//            document.addEventListener("deviceReady", App.onDeviceReady(options),false);
//            StatusBar.overlaysWebView(true);
        },
        

        onDeviceReady: function(options){
			var appView = ViewCreate.create({}, 'AppView', AppView);
			appView.render();
        	
            this.mainRouter = new UserManagementRouter({appView : appView});

            var strUserAgent = navigator.userAgent.toLowerCase();
            var arrMatches = strUserAgent.match(/OS 7_\d/i);

            console.log(navigator.userAgent.toLowerCase());
            console.log("Device version - " + arrMatches);

            if (arrMatches != null) {
            	console.log(arrMatches);
                document.body.style.borderTop = "20px solid #f9f8f8";
            }
            document.addEventListener("resume", App.onResume, false);
        }
    };
	
    return App;
});
