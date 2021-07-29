goog.module('org.pepstock.charba.client.configuration.IsNumericTick');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.NumberFormatCallback');
goog.require('org.pepstock.charba.client.configuration.NumericTickOptionsHandler');
goog.require('org.pepstock.charba.client.options.IsNumberFormat');

const IsNumericTick = goog.require('org.pepstock.charba.client.configuration.IsNumericTick$impl');
exports = IsNumericTick;

