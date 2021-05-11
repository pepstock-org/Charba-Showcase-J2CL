goog.module('org.pepstock.charba.client.options.Plugins');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Options');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory');
goog.require('org.pepstock.charba.client.plugins.PluginIdChecker');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const Plugins = goog.require('org.pepstock.charba.client.options.Plugins$impl');
exports = Plugins;

