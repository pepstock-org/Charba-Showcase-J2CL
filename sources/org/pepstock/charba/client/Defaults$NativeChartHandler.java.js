goog.module('org.pepstock.charba.client.Defaults.NativeChartHandler');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianTimeAxis');
goog.require('org.pepstock.charba.client.configuration.Scales');
goog.require('org.pepstock.charba.client.configuration.ScalesOptions');
goog.require('org.pepstock.charba.client.intl.CLocale');
goog.require('org.pepstock.charba.client.plugins.AbstractPlugin');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const NativeChartHandler = goog.require('org.pepstock.charba.client.Defaults.NativeChartHandler$impl');
exports = NativeChartHandler;

