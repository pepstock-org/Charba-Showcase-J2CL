goog.module('org.pepstock.charba.client.events.AbstractEvent');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.Event');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('vmbootstrap.Casts');

const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');
exports = AbstractEvent;

