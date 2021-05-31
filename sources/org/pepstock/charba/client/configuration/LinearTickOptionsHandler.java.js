goog.module('org.pepstock.charba.client.configuration.LinearTickOptionsHandler');

goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CountCallback');
goog.require('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.PrecisionCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.StepSizeCallback');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisContainer');
goog.require('org.pepstock.charba.client.configuration.LinearTickOptionsHandler.Property');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const LinearTickOptionsHandler = goog.require('org.pepstock.charba.client.configuration.LinearTickOptionsHandler$impl');
exports = LinearTickOptionsHandler;

