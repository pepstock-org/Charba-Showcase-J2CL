goog.module('org.pepstock.charba.client.plugins.AbstractPlugin');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Plugin');
goog.require('org.pepstock.charba.client.items.PluginDatasetArgument');
goog.require('org.pepstock.charba.client.items.PluginEventArgument');
goog.require('org.pepstock.charba.client.items.PluginResizeArgument');
goog.require('org.pepstock.charba.client.items.PluginScaleArgument');
goog.require('org.pepstock.charba.client.items.PluginTooltipArgument');
goog.require('org.pepstock.charba.client.items.PluginUpdateArgument');
goog.require('org.pepstock.charba.client.plugins.PluginIdChecker');

const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');
exports = AbstractPlugin;

