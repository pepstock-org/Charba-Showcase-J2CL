goog.module('org.pepstock.charba.client.configuration.AbstractEventElementHandler');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.IsEventProvider');
goog.require('org.pepstock.charba.client.dom.BaseEventTypes');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('vmbootstrap.Casts');

const AbstractEventElementHandler = goog.require('org.pepstock.charba.client.configuration.AbstractEventElementHandler$impl');
exports = AbstractEventElementHandler;

