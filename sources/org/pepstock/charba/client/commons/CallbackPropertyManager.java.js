goog.module('org.pepstock.charba.client.commons.CallbackPropertyManager');

goog.require('java.lang.Object');
goog.require('java.util.HashSet');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyManager.CallbackPropertyNotifier');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsCallbackPropertyHandler');
goog.require('vmbootstrap.Casts');

const CallbackPropertyManager = goog.require('org.pepstock.charba.client.commons.CallbackPropertyManager$impl');
exports = CallbackPropertyManager;

