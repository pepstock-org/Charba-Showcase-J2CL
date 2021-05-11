goog.module('org.pepstock.charba.client.events.AbstractChartTypedEvent');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.events.AbstractChartEvent');
goog.require('org.pepstock.charba.client.events.ChartEventContext');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.events.IsChartEvent');
goog.require('org.pepstock.charba.client.items.DatasetReference');
goog.require('vmbootstrap.Casts');

const AbstractChartTypedEvent = goog.require('org.pepstock.charba.client.events.AbstractChartTypedEvent$impl');
exports = AbstractChartTypedEvent;

