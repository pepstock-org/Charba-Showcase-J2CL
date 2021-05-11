goog.module('org.pepstock.charba.client.configuration.RadialPointLabels');

goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.callbacks.PointLabelCallback');
goog.require('org.pepstock.charba.client.callbacks.ScaleContext');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.SimplePaddingCallback');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisContainer');
goog.require('org.pepstock.charba.client.configuration.Font');
goog.require('org.pepstock.charba.client.configuration.Padding');
goog.require('org.pepstock.charba.client.configuration.RadialPointLabels.Property');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider');
goog.require('vmbootstrap.Casts');

const RadialPointLabels = goog.require('org.pepstock.charba.client.configuration.RadialPointLabels$impl');
exports = RadialPointLabels;

