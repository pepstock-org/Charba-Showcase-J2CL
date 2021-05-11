goog.module('org.pepstock.charba.client.labels.LabelsOptionsFactory');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins');
goog.require('org.pepstock.charba.client.labels.DefaultOptions');
goog.require('org.pepstock.charba.client.labels.LabelsOptions');
goog.require('org.pepstock.charba.client.labels.LabelsPlugin');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory');
goog.require('vmbootstrap.Casts');

const LabelsOptionsFactory = goog.require('org.pepstock.charba.client.labels.LabelsOptionsFactory$impl');
exports = LabelsOptionsFactory;

