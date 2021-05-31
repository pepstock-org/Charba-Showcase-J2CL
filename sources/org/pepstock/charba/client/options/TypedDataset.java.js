goog.module('org.pepstock.charba.client.options.TypedDataset');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.HasCallbackScope');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTypedDataset');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Animation');
goog.require('org.pepstock.charba.client.options.AnimationContainer');
goog.require('org.pepstock.charba.client.options.Animations');
goog.require('org.pepstock.charba.client.options.BarDatasetOptionsHandler');
goog.require('org.pepstock.charba.client.options.Datasets');
goog.require('org.pepstock.charba.client.options.HasAnimationOptions');
goog.require('org.pepstock.charba.client.options.HasBarDatasetOptions');
goog.require('org.pepstock.charba.client.options.Transitions');
goog.require('org.pepstock.charba.client.options.TypedDataset.Property');
goog.require('vmbootstrap.Casts');

const TypedDataset = goog.require('org.pepstock.charba.client.options.TypedDataset$impl');
exports = TypedDataset;

