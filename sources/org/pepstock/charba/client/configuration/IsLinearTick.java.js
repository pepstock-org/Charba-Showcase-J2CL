goog.module('org.pepstock.charba.client.configuration.IsLinearTick');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.callbacks.CountCallback');
goog.require('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.PrecisionCallback');
goog.require('org.pepstock.charba.client.callbacks.StepSizeCallback');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.IsNumericTick');
goog.require('org.pepstock.charba.client.configuration.LinearTickOptionsHandler');

const IsLinearTick = goog.require('org.pepstock.charba.client.configuration.IsLinearTick$impl');
exports = IsLinearTick;

