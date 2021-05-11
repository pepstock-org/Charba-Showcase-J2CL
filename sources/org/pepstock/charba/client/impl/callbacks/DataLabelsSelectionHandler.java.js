goog.module('org.pepstock.charba.client.impl.callbacks.DataLabelsSelectionHandler');

goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsContext');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.enums.CursorType');
goog.require('org.pepstock.charba.client.events.DatasetSelectionEvent');
goog.require('org.pepstock.charba.client.events.DatasetSelectionEventHandler');
goog.require('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler');
goog.require('org.pepstock.charba.client.items.DatasetReference');
goog.require('vmbootstrap.Casts');

const DataLabelsSelectionHandler = goog.require('org.pepstock.charba.client.impl.callbacks.DataLabelsSelectionHandler$impl');
exports = DataLabelsSelectionHandler;

