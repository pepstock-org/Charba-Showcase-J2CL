goog.module('org.pepstock.charba.client.events.AxisEnterEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractAxisEvent');
goog.require('org.pepstock.charba.client.events.AxisEnterEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('vmbootstrap.Casts');

const AxisEnterEvent = goog.require('org.pepstock.charba.client.events.AxisEnterEvent$impl');
exports = AxisEnterEvent;

