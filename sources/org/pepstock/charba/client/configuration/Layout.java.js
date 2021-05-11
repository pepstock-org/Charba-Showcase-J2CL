goog.module('org.pepstock.charba.client.configuration.Layout');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.PaddingCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.Layout.Property');
goog.require('org.pepstock.charba.client.configuration.Padding');
goog.require('org.pepstock.charba.client.options.ExtendedOptions');
goog.require('org.pepstock.charba.client.options.IsScriptablePaddingProvider');
goog.require('vmbootstrap.Casts');

const Layout = goog.require('org.pepstock.charba.client.configuration.Layout$impl');
exports = Layout;

