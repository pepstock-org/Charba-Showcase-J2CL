goog.module('org.pepstock.charba.client.plugins.Plugins');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Configuration');
goog.require('org.pepstock.charba.client.ConfigurationElement');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Plugin');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.plugins.PluginIdChecker');
goog.require('org.pepstock.charba.client.plugins.WrapperPlugin');
goog.require('vmbootstrap.Casts');

const Plugins = goog.require('org.pepstock.charba.client.plugins.Plugins$impl');
exports = Plugins;

