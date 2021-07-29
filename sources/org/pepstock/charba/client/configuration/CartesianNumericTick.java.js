goog.module('org.pepstock.charba.client.configuration.CartesianNumericTick');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.NumberFormatCallback');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianTick');
goog.require('org.pepstock.charba.client.configuration.IsNumericTick');
goog.require('org.pepstock.charba.client.configuration.NumberFormatter');
goog.require('org.pepstock.charba.client.options.IsNumberFormat');

const CartesianNumericTick = goog.require('org.pepstock.charba.client.configuration.CartesianNumericTick$impl');
exports = CartesianNumericTick;

