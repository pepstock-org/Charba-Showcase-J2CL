goog.module('org.pepstock.charba.client.configuration.LinearTickHandler');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.TickCallback');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.configuration.AbstractTickHandler');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.Tick');
goog.require('vmbootstrap.Casts');

const LinearTickHandler = goog.require('org.pepstock.charba.client.configuration.LinearTickHandler$impl');
exports = LinearTickHandler;

