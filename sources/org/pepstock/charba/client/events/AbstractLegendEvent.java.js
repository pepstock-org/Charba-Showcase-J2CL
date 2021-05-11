goog.module('org.pepstock.charba.client.events.AbstractLegendEvent');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.events.AbstractChartEvent');
goog.require('org.pepstock.charba.client.events.ChartEventContext');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.events.IsLegendEvent');
goog.require('org.pepstock.charba.client.items.LegendItem');
goog.require('vmbootstrap.Casts');

const AbstractLegendEvent = goog.require('org.pepstock.charba.client.events.AbstractLegendEvent$impl');
exports = AbstractLegendEvent;

