goog.module('org.pepstock.charba.client.commons.CallbackPropertyHandler');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler.CallbackWrapper');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyManager');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.IsCallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const CallbackPropertyHandler = goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
exports = CallbackPropertyHandler;

