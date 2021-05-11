goog.module('org.pepstock.charba.client.events.DatasetRangeSelectionEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractEvent');
goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.ScaleValueItem');
goog.require('vmbootstrap.Casts');

const DatasetRangeSelectionEvent = goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
exports = DatasetRangeSelectionEvent;

