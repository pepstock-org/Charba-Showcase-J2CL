goog.module('org.pepstock.charba.client.configuration.Tick');

goog.require('java.lang.Boolean');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.callbacks.PaddingCallback');
goog.require('org.pepstock.charba.client.callbacks.ScaleContext');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisContainer');
goog.require('org.pepstock.charba.client.configuration.Font');
goog.require('org.pepstock.charba.client.configuration.Major');
goog.require('org.pepstock.charba.client.configuration.Padding');
goog.require('org.pepstock.charba.client.configuration.Tick.Property');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider');
goog.require('org.pepstock.charba.client.options.Ticks');
goog.require('vmbootstrap.Casts');

const Tick = goog.require('org.pepstock.charba.client.configuration.Tick$impl');
exports = Tick;

