goog.module('org.pepstock.charba.client.options.BarDatasetOptionsHandler');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.commons.PropertyHandler');
goog.require('org.pepstock.charba.client.data.DataEnvelop');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTypedDataset');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultTypedDataset');
goog.require('org.pepstock.charba.client.options.BarDatasetOptionsHandler.Property');
goog.require('vmbootstrap.Casts');

const BarDatasetOptionsHandler = goog.require('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');
exports = BarDatasetOptionsHandler;

