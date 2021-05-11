goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartOptions');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.ChartOptions');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScales');
goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartOptions');
goog.require('org.pepstock.charba.client.defaults.chart.DefaultChartScales');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('org.pepstock.charba.client.options.ExtendedOptions');
goog.require('org.pepstock.charba.client.options.ScaledOptions');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DefaultChartOptions = goog.require('org.pepstock.charba.client.defaults.chart.DefaultChartOptions$impl');
exports = DefaultChartOptions;

