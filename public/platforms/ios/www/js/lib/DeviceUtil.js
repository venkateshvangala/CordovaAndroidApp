define([], function () {

    device_width = 0;
    device_size = "";

    var DeviceUtil = function () {
    };

    DeviceUtil.prototype.getScreenSize = function () {
        device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (device_width > 1024) {
            device_size = "large";
        }
        else if ((device_width > 768) && (device_width <= 1024)) {
            device_size = "medium";
        }
        else {
            device_size = "small";
        }


        return device_size;
    };

    return DeviceUtil;
});
