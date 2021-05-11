goog.module('org.pepstock.charba.client.ChartOptions');

goog.require('java.lang.StringBuilder');
goog.require('java.lang.UnsupportedOperationException');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.options.ScaledOptions');
goog.require('org.pepstock.charba.client.options.Scales');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const ChartOptions = goog.require('org.pepstock.charba.client.ChartOptions$impl');
exports = ChartOptions;

