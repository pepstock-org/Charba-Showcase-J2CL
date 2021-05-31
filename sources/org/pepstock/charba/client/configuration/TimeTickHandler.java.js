goog.module('org.pepstock.charba.client.configuration.TimeTickHandler');

goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.TimeTickCallback');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.configuration.AbstractTickHandler');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianTimeTick');
goog.require('org.pepstock.charba.client.items.ScaleTickItem');
goog.require('vmbootstrap.Casts');

const TimeTickHandler = goog.require('org.pepstock.charba.client.configuration.TimeTickHandler$impl');
exports = TimeTickHandler;

