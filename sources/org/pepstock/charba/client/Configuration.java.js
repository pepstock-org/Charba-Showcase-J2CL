goog.module('org.pepstock.charba.client.Configuration');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Configuration.Property');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.data.Data');
goog.require('org.pepstock.charba.client.plugins.Plugins');

const Configuration = goog.require('org.pepstock.charba.client.Configuration$impl');
exports = Configuration;

