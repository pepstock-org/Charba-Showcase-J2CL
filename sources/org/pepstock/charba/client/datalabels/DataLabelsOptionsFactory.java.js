goog.module('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptions');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsPlugin');
goog.require('org.pepstock.charba.client.datalabels.DefaultOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory');
goog.require('vmbootstrap.Casts');

const DataLabelsOptionsFactory = goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory$impl');
exports = DataLabelsOptionsFactory;

