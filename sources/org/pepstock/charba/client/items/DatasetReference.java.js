goog.module('org.pepstock.charba.client.items.DatasetReference');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.DatasetReference.DatasetReferenceItemFactory');
goog.require('org.pepstock.charba.client.items.DatasetReference.Property');
goog.require('org.pepstock.charba.client.items.Undefined');

const DatasetReference = goog.require('org.pepstock.charba.client.items.DatasetReference$impl');
exports = DatasetReference;

