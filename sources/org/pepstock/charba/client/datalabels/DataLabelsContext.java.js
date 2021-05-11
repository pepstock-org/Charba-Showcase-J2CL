goog.module('org.pepstock.charba.client.datalabels.DataLabelsContext');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsContext.Property');
goog.require('org.pepstock.charba.client.datalabels.LabelItem');
goog.require('org.pepstock.charba.client.enums.ContextType');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DataLabelsContext = goog.require('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
exports = DataLabelsContext;

