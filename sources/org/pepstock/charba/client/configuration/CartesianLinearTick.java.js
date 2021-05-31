goog.module('org.pepstock.charba.client.configuration.CartesianLinearTick');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CountCallback');
goog.require('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.PrecisionCallback');
goog.require('org.pepstock.charba.client.callbacks.StepSizeCallback');
goog.require('org.pepstock.charba.client.callbacks.TickCallback');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianNumericTick');
goog.require('org.pepstock.charba.client.configuration.IsLinearTick');
goog.require('org.pepstock.charba.client.configuration.LinearTickHandler');
goog.require('org.pepstock.charba.client.configuration.LinearTickOptionsHandler');
goog.require('vmbootstrap.Casts');

const CartesianLinearTick = goog.require('org.pepstock.charba.client.configuration.CartesianLinearTick$impl');
exports = CartesianLinearTick;

