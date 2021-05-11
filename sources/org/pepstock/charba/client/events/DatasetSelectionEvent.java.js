goog.module('org.pepstock.charba.client.events.DatasetSelectionEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractEvent');
goog.require('org.pepstock.charba.client.events.DatasetSelectionEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.DatasetReference');
goog.require('vmbootstrap.Casts');

const DatasetSelectionEvent = goog.require('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
exports = DatasetSelectionEvent;

