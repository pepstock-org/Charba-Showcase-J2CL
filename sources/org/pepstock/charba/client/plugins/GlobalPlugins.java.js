goog.module('org.pepstock.charba.client.plugins.GlobalPlugins');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Configuration');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Plugin');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.plugins.GlobalPlugins.InternalPlugins');
goog.require('org.pepstock.charba.client.plugins.JsPluginHelper');
goog.require('org.pepstock.charba.client.plugins.PluginIdChecker');
goog.require('org.pepstock.charba.client.plugins.PluginReference');
goog.require('org.pepstock.charba.client.plugins.WrapperPlugin');
goog.require('vmbootstrap.Casts');

const GlobalPlugins = goog.require('org.pepstock.charba.client.plugins.GlobalPlugins$impl');
exports = GlobalPlugins;

