goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartScales');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScale');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScales');
goog.require('org.pepstock.charba.client.defaults.chart.DefaultChartScale');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('org.pepstock.charba.client.options.Scales');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DefaultChartScales = goog.require('org.pepstock.charba.client.defaults.chart.DefaultChartScales$impl');
exports = DefaultChartScales;

