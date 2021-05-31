goog.module('org.pepstock.charba.client.configuration.RadialLinearTick');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CountCallback');
goog.require('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.PrecisionCallback');
goog.require('org.pepstock.charba.client.callbacks.StepSizeCallback');
goog.require('org.pepstock.charba.client.callbacks.TickCallback');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.IsLinearTick');
goog.require('org.pepstock.charba.client.configuration.LinearTickHandler');
goog.require('org.pepstock.charba.client.configuration.LinearTickOptionsHandler');
goog.require('org.pepstock.charba.client.configuration.NumberFormatter');
goog.require('org.pepstock.charba.client.configuration.Tick');
goog.require('org.pepstock.charba.client.options.IsNumberFormat');
goog.require('vmbootstrap.Casts');

const RadialLinearTick = goog.require('org.pepstock.charba.client.configuration.RadialLinearTick$impl');
exports = RadialLinearTick;

