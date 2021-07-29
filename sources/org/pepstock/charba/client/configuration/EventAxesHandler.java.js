goog.module('org.pepstock.charba.client.configuration.EventAxesHandler');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.configuration.AbstractEventElementHandler');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AddHandlerEvent');
goog.require('org.pepstock.charba.client.events.AxisClickEvent');
goog.require('org.pepstock.charba.client.events.AxisEnterEvent');
goog.require('org.pepstock.charba.client.events.AxisHoverEvent');
goog.require('org.pepstock.charba.client.events.AxisLeaveEvent');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEvent');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Objects');

const EventAxesHandler = goog.require('org.pepstock.charba.client.configuration.EventAxesHandler$impl');
exports = EventAxesHandler;

