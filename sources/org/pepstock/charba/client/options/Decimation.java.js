goog.module('org.pepstock.charba.client.options.Decimation');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultDecimation');
goog.require('org.pepstock.charba.client.enums.DecimationAlgorithm');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Decimation.Property');
goog.require('org.pepstock.charba.client.options.Plugins');
goog.require('vmbootstrap.Casts');

const Decimation = goog.require('org.pepstock.charba.client.options.Decimation$impl');
exports = Decimation;

