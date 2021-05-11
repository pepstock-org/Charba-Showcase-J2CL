goog.module('org.pepstock.charba.client.labels.LabelsContext');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.enums.ContextType');
goog.require('org.pepstock.charba.client.items.DataItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.labels.Label');
goog.require('org.pepstock.charba.client.labels.LabelsContext.Property');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const LabelsContext = goog.require('org.pepstock.charba.client.labels.LabelsContext$impl');
exports = LabelsContext;

