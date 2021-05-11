goog.module('org.pepstock.charba.client.events.ChartClickEvent');

goog.require('java.lang.Class');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.enums.ChartEventProperty');
goog.require('org.pepstock.charba.client.events.AbstractChartTypedEvent');
goog.require('org.pepstock.charba.client.events.ChartClickEventHandler');
goog.require('org.pepstock.charba.client.events.ChartEventContext');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.DatasetReference');
goog.require('vmbootstrap.Casts');

const ChartClickEvent = goog.require('org.pepstock.charba.client.events.ChartClickEvent$impl');
exports = ChartClickEvent;

