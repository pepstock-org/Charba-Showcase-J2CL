goog.module('org.pepstock.charba.client.commons.CallbackPropertyManager.CallbackPropertyNotifier');

goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartsLifecycleListener');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyManager');
goog.require('org.pepstock.charba.client.commons.IsCallbackPropertyHandler');
goog.require('org.pepstock.charba.client.utils.CScheduler');
goog.require('vmbootstrap.Casts');

const CallbackPropertyNotifier = goog.require('org.pepstock.charba.client.commons.CallbackPropertyManager.CallbackPropertyNotifier$impl');
exports = CallbackPropertyNotifier;

