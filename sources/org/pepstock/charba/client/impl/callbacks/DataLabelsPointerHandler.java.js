goog.module('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsContext');
goog.require('org.pepstock.charba.client.datalabels.events.AbstractEventHandler');
goog.require('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.CursorType');

const DataLabelsPointerHandler = goog.require('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler$impl');
exports = DataLabelsPointerHandler;

