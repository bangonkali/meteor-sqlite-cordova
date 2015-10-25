App.info({
  name: 'Agos',
  description: 'A simple accounting and enterprise resource planning system for your phone and tablet.',
  author: 'AComSys Integrated',
  email: 'info@acomsys.net',
  website: 'http://www.acomsys.com/agos',
  version: '0.0.14'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/iphone/Icon-60.png',
  'iphone_2x': 'resources/icons/iphone/Icon-60-2x.png',
  'iphone_3x': 'resources/icons/iphone/Icon-60-3x.png',
  'ipad': 'resources/icons/iphone/Icon-76.png',
  'ipad_2x': 'resources/icons/iphone/Icon-76-2x.png',

  // Android
  'android_ldpi': 'resources/icons/android/android_ldpi.png',
  'android_mdpi': 'resources/icons/android/android_mdpi.png',
  'android_hdpi': 'resources/icons/android/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android/android_xhdpi.png'
});

App.launchScreens({
  'iphone': 'resources/splash/iphone/Default-iphone_320x480.png',
  'iphone_2x': 'resources/splash/iphone/Default@2x~iphone_640x960.png',
  'iphone5': 'resources/splash/iphone/Default-568h@2x~iphone_640x1136.png',
  'iphone6': 'resources/splash/iphone/Default-750@2x~iphone6-portrait_750x1334.png',
  'iphone6p_portrait': 'resources/splash/iphone/Default-1242@3x~iphone6s-portrait_1242x2208.png',
  'iphone6p_landscape': 'resources/splash/iphone/Default-1242@3x~iphone6s-landscape_2208x1242.png',
  'ipad_portrait': 'resources/splash/iphone/Default-Portrait~ipad_768x1024.png',
  'ipad_portrait_2x': 'resources/splash/iphone/Default-Portrait@2x~ipad_1536x2048.png',
  'ipad_landscape': 'resources/splash/iphone/Default-Landscape~ipad_1024x768.png',
  'ipad_landscape_2x': 'resources/splash/iphone/Default-Landscape@2x~ipad_2048x1536.png',

  'android_ldpi_portrait': 'resources/splash/android/drawable-ldpi/screen.png',
  'android_ldpi_landscape': 'resources/splash/android/drawable-land-ldpi/screen.png',
  'android_mdpi_portrait': 'resources/splash/android/drawable-mdpi/screen.png',
  'android_mdpi_landscape': 'resources/splash/android/drawable-land-mdpi/screen.png',
  'android_hdpi_portrait': 'resources/splash/android/drawable-hdpi/screen.png',
  'android_hdpi_landscape': 'resources/splash/android/drawable-land-hdpi/screen.png',
  'android_xhdpi_portrait': 'resources/splash/android/drawable-xhdpi/screen.png',
  'android_xhdpi_landscape': 'resources/splash/android/drawable-land-xhdpi/screen.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#777777');
App.accessRule('*');
// App.accessRule('*.google.com/*');
// App.accessRule('*.googleapis.com/*');
// App.accessRule('*.gstatic.com/*');
// App.accessRule('*.imgur.com/*');
// App.accessRule('*.amazonaws.com/*');
// App.accessRule('*.weknowdeals.com/*');
