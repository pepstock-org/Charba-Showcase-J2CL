goog.module('org.pepstock.charba.client.plugins.WrapperPlugin');

goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Plugin');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.items.PluginDatasetArgument');
goog.require('org.pepstock.charba.client.items.PluginEventArgument');
goog.require('org.pepstock.charba.client.items.PluginResizeArgument');
goog.require('org.pepstock.charba.client.items.PluginScaleArgument');
goog.require('org.pepstock.charba.client.items.PluginTooltipArgument');
goog.require('org.pepstock.charba.client.items.PluginUpdateArgument');
goog.require('org.pepstock.charba.client.plugins.PluginsEnvelop');
goog.require('org.pepstock.charba.client.plugins.WrapperPlugin.Property');
goog.require('vmbootstrap.Casts');

const WrapperPlugin = goog.require('org.pepstock.charba.client.plugins.WrapperPlugin$impl');
exports = WrapperPlugin;

