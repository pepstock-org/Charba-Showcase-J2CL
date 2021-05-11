goog.module('org.pepstock.charba.client.events.LegendLeaveEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.enums.LegendEventProperty');
goog.require('org.pepstock.charba.client.events.AbstractLegendEvent');
goog.require('org.pepstock.charba.client.events.ChartEventContext');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.events.LegendLeaveEventHandler');
goog.require('org.pepstock.charba.client.items.LegendItem');
goog.require('vmbootstrap.Casts');

const LegendLeaveEvent = goog.require('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
exports = LegendLeaveEvent;

