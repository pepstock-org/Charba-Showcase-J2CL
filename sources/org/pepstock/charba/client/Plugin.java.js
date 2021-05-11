goog.module('org.pepstock.charba.client.Plugin');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Plugin.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.items.PluginDatasetArgument');
goog.require('org.pepstock.charba.client.items.PluginEventArgument');
goog.require('org.pepstock.charba.client.items.PluginResizeArgument');
goog.require('org.pepstock.charba.client.items.PluginScaleArgument');
goog.require('org.pepstock.charba.client.items.PluginTooltipArgument');
goog.require('org.pepstock.charba.client.items.PluginUpdateArgument');

const Plugin = goog.require('org.pepstock.charba.client.Plugin$impl');
exports = Plugin;

