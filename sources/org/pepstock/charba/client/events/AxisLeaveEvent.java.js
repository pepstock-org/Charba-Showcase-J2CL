goog.module('org.pepstock.charba.client.events.AxisLeaveEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractAxisEvent');
goog.require('org.pepstock.charba.client.events.AxisLeaveEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('vmbootstrap.Casts');

const AxisLeaveEvent = goog.require('org.pepstock.charba.client.events.AxisLeaveEvent$impl');
exports = AxisLeaveEvent;

