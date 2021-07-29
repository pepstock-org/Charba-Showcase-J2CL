goog.module('org.pepstock.charba.client.events.AxisClickEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractAxisEvent');
goog.require('org.pepstock.charba.client.events.AxisClickEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.ScaleValueItem');
goog.require('vmbootstrap.Casts');

const AxisClickEvent = goog.require('org.pepstock.charba.client.events.AxisClickEvent$impl');
exports = AxisClickEvent;

