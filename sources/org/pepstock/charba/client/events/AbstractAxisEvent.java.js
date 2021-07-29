goog.module('org.pepstock.charba.client.events.AbstractAxisEvent');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractEvent');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('vmbootstrap.Casts');

const AbstractAxisEvent = goog.require('org.pepstock.charba.client.events.AbstractAxisEvent$impl');
exports = AbstractAxisEvent;

