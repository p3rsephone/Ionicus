cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-fingerprint-aio.Fingerprint",
    "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
    "pluginId": "cordova-plugin-fingerprint-aio",
    "clobbers": [
      "Fingerprint"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-pin-dialog.PinDialog",
    "file": "plugins/cordova-plugin-pin-dialog/www/pin.js",
    "pluginId": "cordova-plugin-pin-dialog",
    "merges": [
      "window.plugins.pinDialog"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-touch-id.TouchID",
    "file": "plugins/cordova-plugin-touch-id/www/TouchID.js",
    "pluginId": "cordova-plugin-touch-id",
    "clobbers": [
      "window.plugins.touchid"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-add-swift-support": "1.7.1",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-fingerprint-aio": "1.3.4",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-pin-dialog": "0.1.3",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-touch-id": "3.3.1",
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-plugin-barcodescanner": "8.0.0"
};
// BOTTOM OF METADATA
});